class Seance {
  constructor(
    nom,
    type,
    partiecible,
    description,
    dureeMinutes,
    intensite,
    caloriesEstimees,
    notes,
    dateSeance,
    id
  ) {
    this.id = id;
    this.nom = nom;
    this.type = type;
    this.partiecible = partiecible;
    this.description = description;

    // Nouveaux champs
    this.dureeMinutes = dureeMinutes;
    this.intensite = intensite;
    this.caloriesEstimees = caloriesEstimees;
    this.notes = notes;
    this.dateSeance = dateSeance;
  }
}
