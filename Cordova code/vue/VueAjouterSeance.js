 class VueAjouterSeance{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-seance").innerHTML;
        this.actionAjouterSeance = null;
    }


    initialiserActionAjouterSeance(actionAjouterSeance){
        this.actionAjouterSeance = actionAjouterSeance;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit", evenement=>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let nom = document.getElementById("seance-nom").value;
        let type = document.getElementById("seance-type").value;
        let partiecible = document.getElementById("seance-partiecible").value;
        let description = document.getElementById("seance-description").value;

        this.actionAjouterSeance(new Seance(nom, type, partiecible, description, null));
    }

}

