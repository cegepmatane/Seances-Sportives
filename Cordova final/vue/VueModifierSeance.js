class VueModifierSeance {
  constructor() {
    this.html = document.getElementById("html-vue-modifier-seance").innerHTML;
    this.actionModifierSeance = null;
    this.seance = null;
  }

  initialiserActionModifierSeance(actionModifierSeance) {
    this.actionModifierSeance = actionModifierSeance;
  }


  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    document.getElementById("seance-nom").value = this.seance.nom;
    document.getElementById("seance-type").value = this.seance.type;
    document.getElementById("seance-partiecible").value = this.seance.partiecible;
    document.getElementById("seance-description").value = this.seance.description;

    // Nouveaux champs
    document.getElementById("seance-duree").value = this.seance.dureeMinutes ?? 0;
    document.getElementById("seance-intensite").value = this.seance.intensite ?? "moyenne";
    document.getElementById("seance-calories").value = this.seance.caloriesEstimees ?? 0;
    document.getElementById("seance-notes").value = this.seance.notes ?? "";
    document.getElementById("seance-date").value = this.seance.dateSeance ?? "";

    document.getElementById("formulaire-modifier")
      .addEventListener("submit", evenement => this.enregistrer(evenement));
  }

  enregistrer(evenement) {
    evenement.preventDefault();

    this.seance.nom = document.getElementById("seance-nom").value;
    this.seance.type = document.getElementById("seance-type").value;
    this.seance.partiecible = document.getElementById("seance-partiecible").value;
    this.seance.description = document.getElementById("seance-description").value;

    // Nouveaux champs
    this.seance.dureeMinutes = Number(document.getElementById("seance-duree").value || 0);
    this.seance.intensite = document.getElementById("seance-intensite").value;
    this.seance.caloriesEstimees = Number(document.getElementById("seance-calories").value || 0);
    this.seance.notes = document.getElementById("seance-notes").value;
    this.seance.dateSeance = document.getElementById("seance-date").value;

    this.actionModifierSeance(this.seance);
  }
}
