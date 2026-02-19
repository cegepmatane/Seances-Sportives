class VueSeance {
  constructor() {
    this.html = document.getElementById("html-vue-seance").innerHTML;
    this.seance = null;
    this.actionSupprimerSeance = null;
  }

  initialiserSeance(seance) {
    this.seance = seance;
  }

  initialiserActionSupprimerSeance(actionSupprimerSeance) {
    this.actionSupprimerSeance = actionSupprimerSeance;
  }

  afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    document.getElementById("seance-nom").innerHTML = this.seance.nom;
    document.getElementById("seance-type").innerHTML = this.seance.type;
    document.getElementById("seance-partiecible").innerHTML = this.seance.partiecible;
    document.getElementById("seance-description").innerHTML = this.seance.description;

    document.getElementById("bouton-supprimer")
      .addEventListener("click", () => this.supprimer());
  }

  supprimer() {
    if (confirm("Voulez-vous vraiment supprimer cette séance ?")) {
      this.actionSupprimerSeance(this.seance.id);
    }
  }
}
