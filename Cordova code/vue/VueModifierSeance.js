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


        document.getElementById("formulaire-modifier")
                .addEventListener("submit", evenement => this.enregistrer(evenement));
    }

    enregistrer(evenement) {
        evenement.preventDefault();

        this.seance.nom = document.getElementById("seance-nom").value;
        this.seance.type = document.getElementById("seance-type").value;
        this.seance.partiecible = document.getElementById("seance-partiecible").value;
        this.seance.description = document.getElementById("seance-description").value;

        this.actionModifierSeance(this.seance);
    }
}
