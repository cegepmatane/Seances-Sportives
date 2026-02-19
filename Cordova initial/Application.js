class Application{
    constructor(window, seanceDAO, vueListeSeance, vueAjouterSeance, vueModifierSeance, vueSeance){
        this.window = window;
        this.seanceDAO = seanceDAO;
        this.vueListeSeance = vueListeSeance;
        this.vueSeance = vueSeance;
        this.vueModifierSeance = vueModifierSeance;
        this.vueAjouterSeance = vueAjouterSeance;
        this.vueAjouterSeance.initialiserActionAjouterSeance(seance =>this.actionAjouterSeance(seance));
        this.vueModifierSeance.initialiserActionModifierSeance(seance =>this.actionModifierSeance(seance));
        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
    }

     naviguer(){
    let hash = window.location.hash;

  if(!hash) {
    const liste = this.seanceDAO.lister();
    this.vueListeSeance.initialiserListeSeance(liste);
    this.vueListeSeance.afficher();
  }else if(hash.match(/^#ajouter-seance/)){
      this.vueAjouterSeance.afficher();

    }else {
        let navigation = hash.match(/^#seance\/([0-9]+)/);

        if(navigation){
        let idSeance = navigation[1];
        this.vueSeance.initialiserSeance(this.seanceDAO.lister()[idSeance]);
        this.vueSeance.afficher();
        }

        }

        if (hash.match(/^#modifier-seance/)){
        let navigation = hash.match(/^#modifier-seance\/([0-9]+)/);
        if (navigation){
        let idSeance = navigation[1];
        let seance = this.seanceDAO.lister()[idSeance];
        this.vueModifierSeance.seance = seance;
        this.vueModifierSeance.afficher();
    }
}

    }
    actionAjouterSeance(seance){
    this.seanceDAO.ajouter(seance);
    this.window.location.hash = "#";

  }

   actionModifierSeance(seance){
    this.seanceDAO.modifier(seance)
    this.window.location.hash = "#";
  }


}

new Application(window, new SeanceDAO(), new VueListeSeance(), new VueAjouterSeance() , new VueModifierSeance(), new VueSeance());
