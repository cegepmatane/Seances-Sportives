import SeanceDAO from "./donnee/SeanceDAO.js";

class Application {
  constructor(window, seanceDAO, vueListeSeance, vueAjouterSeance, vueModifierSeance, vueSeance) {
    this.window = window;
    this.seanceDAO = seanceDAO;

    this.vueListeSeance = vueListeSeance;
    this.vueSeance = vueSeance;
    this.vueModifierSeance = vueModifierSeance;
    this.vueAjouterSeance = vueAjouterSeance;

    // Cache local pour éviter de relire Firestore pour chaque navigation
    this.listeSeance = [];

    this.vueAjouterSeance.initialiserActionAjouterSeance(seance => this.actionAjouterSeance(seance));
    this.vueModifierSeance.initialiserActionModifierSeance(seance => this.actionModifierSeance(seance));
    this.vueSeance.initialiserActionSupprimerSeance(id => this.actionSupprimerSeance(id));
    this.window.addEventListener("hashchange", () => this.naviguer());
    this.naviguer();
  }

  async chargerListe() {
    this.listeSeance = await this.seanceDAO.lister();
    return this.listeSeance;
  }

  trouverSeanceParId(id) {
    return this.listeSeance.find(s => String(s.id) === String(id));
  }

  async naviguer() {
    const hash = this.window.location.hash;

    // Page liste
    if (!hash || hash === "#") {
      const liste = await this.chargerListe();
      this.vueListeSeance.initialiserListeSeance(liste);
      this.vueListeSeance.afficher();
      return;
    }

    // Page ajouter
    if (hash.match(/^#ajouter-seance$/)) {
      this.vueAjouterSeance.afficher();
      return;
    }

    // Page détail séance (id Firestore = string)
    let navSeance = hash.match(/^#seance\/([^/]+)$/);
    if (navSeance) {
      const idSeance = navSeance[1];
      if (this.listeSeance.length === 0) await this.chargerListe();

      const seance = this.trouverSeanceParId(idSeance);
      if (!seance) {
        // Optionnel : gérer "introuvable"
        this.window.location.hash = "#";
        return;
      }

      this.vueSeance.initialiserSeance(seance);
      this.vueSeance.afficher();
      return;
    }

    // Page modifier (id Firestore = string)
    let navModif = hash.match(/^#modifier-seance\/([^/]+)$/);
    if (navModif) {
      const idSeance = navModif[1];
      if (this.listeSeance.length === 0) await this.chargerListe();

      const seance = this.trouverSeanceParId(idSeance);
      if (!seance) {
        this.window.location.hash = "#";
        return;
      }

      this.vueModifierSeance.seance = seance;
      this.vueModifierSeance.afficher();
      return;
    }

    // Fallback
    this.window.location.hash = "#";
  }

  async actionAjouterSeance(seance) {
    await this.seanceDAO.ajouter(seance);
    this.window.location.hash = "#";
  }

  async actionModifierSeance(seance) {
    await this.seanceDAO.modifier(seance);
    this.window.location.hash = "#";
  }
  async actionSupprimerSeance(id) {
  await this.seanceDAO.supprimer(id);
  this.window.location.hash = "#";
}
}

new Application(
  window,
  new SeanceDAO(),
  new VueListeSeance(),
  new VueAjouterSeance(),
  new VueModifierSeance(),
  new VueSeance()
);
