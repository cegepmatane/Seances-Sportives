class VueSeance{
  constructor(){
    this.html = document.getElementById("html-vue-seance").innerHTML;
    this.seance = null;
  }

  initialiserSeance(seance){
    this.seance = seance;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("seance-nom").innerHTML = this.seance.nom;
    document.getElementById("seance-type").innerHTML = this.seance.type;
      document.getElementById("seance-partiecible").innerHTML = this.seance.partiecible;
    document.getElementById("seance-description").innerHTML = this.seance.description;

  }

}
