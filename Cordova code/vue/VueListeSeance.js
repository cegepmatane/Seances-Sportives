class VueListeSeance {
  constructor() {
    this.html = document.getElementById("html-vue-liste-seance").innerHTML;
    this.listeSeanceDonnee = [];
  }

  initialiserListeSeance(listeSeanceDonnee) {
    this.listeSeanceDonnee = listeSeanceDonnee;
  }

  afficher() {
    // Remplace le body par le template
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listeSeance = document.getElementById("liste-seance");
    const listeSeanceItemHTML = listeSeance.innerHTML; // le li modèle
    let listeSeanceHTMLRemplacement = "";

    for (let numeroSeance in this.listeSeanceDonnee) {
      let liHTML = listeSeanceItemHTML;
      liHTML = liHTML.replace(/{Seance.id}/g, this.listeSeanceDonnee[numeroSeance].id);
      liHTML = liHTML.replace(/{Seance.nom}/g, this.listeSeanceDonnee[numeroSeance].nom);
      listeSeanceHTMLRemplacement += liHTML;
    }

    listeSeance.innerHTML = listeSeanceHTMLRemplacement;
  }
}
