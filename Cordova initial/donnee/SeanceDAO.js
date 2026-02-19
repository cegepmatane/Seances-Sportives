class SeanceDAO {
  constructor() {
    this.listeSeance = [];
    if (localStorage['seance']) {
      this.listeSeance = JSON.parse(localStorage['seance']);
    }
  }

  lister() {
    return this.listeSeance;
  }

  ajouter(seance) {
    seance.id = this.listeSeance.length > 0
                ? this.listeSeance[this.listeSeance.length - 1].id + 1
                : 1;
    this.listeSeance.push(seance);
    localStorage['seance'] = JSON.stringify(this.listeSeance);
  }

  modifier(seanceModifiee) {
    let index = this.listeSeance.findIndex(s => s.id === seanceModifiee.id);
    if (index !== -1) {
      this.listeSeance[index] = seanceModifiee;
      localStorage['seance'] = JSON.stringify(this.listeSeance);
    }
  }
}
