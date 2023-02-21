FONCTIONS_UTILISEES
  FONCTION printFizzBuzz(LongueurTab)
    VARIABLES_FONCTION
      iB EST_DU_TYPE NOMBRE
    DEBUT_FONCTION
    AFFICHER "Tableau : ["
    POUR iB ALLANT_DE 0 A LongueurTab-2
      DEBUT_POUR
      SI (LISTE_NB[iB] % 15 == 0) ALORS
        DEBUT_SI
        AFFICHER "FizzBuzz"
        FIN_SI
        SINON
          DEBUT_SINON
          SI (LISTE_NB[iB] % 5 == 0) ALORS
            DEBUT_SI
            AFFICHER "Buzz"
            FIN_SI
            SINON
              DEBUT_SINON
              SI (LISTE_NB[iB] % 3 == 0) ALORS
                DEBUT_SI
                AFFICHER "Fizz"
                FIN_SI
                SINON
                  DEBUT_SINON
                  AFFICHERCALCUL LISTE_NB[iB]
                  FIN_SINON
              FIN_SINON
          FIN_SINON
      AFFICHER ", "
      FIN_POUR
    SI (LISTE_NB[LongueurTab - 1] % 15 == 0) ALORS
      DEBUT_SI
      AFFICHER "FizzBuzz"
      FIN_SI
      SINON
        DEBUT_SINON
        SI (LISTE_NB[LongueurTab - 1] % 5 == 0) ALORS
          DEBUT_SI
          AFFICHER "Buzz"
          FIN_SI
          SINON
            DEBUT_SINON
            SI (LISTE_NB[LongueurTab - 1] % 3 == 0) ALORS
              DEBUT_SI
              AFFICHER "Fizz"
              FIN_SI
              SINON
                DEBUT_SINON
                AFFICHERCALCUL LISTE_NB[LongueurTab - 1]
                FIN_SINON
            FIN_SINON
        FIN_SINON
    AFFICHER* "]"
    FIN_FONCTION
  FONCTION initTab(LongueurTab)
    VARIABLES_FONCTION
      iA EST_DU_TYPE NOMBRE
    DEBUT_FONCTION
    POUR iA ALLANT_DE 0 A LongueurTab - 1
      DEBUT_POUR
      LISTE_NB[iA] PREND_LA_VALEUR iA + 1
      FIN_POUR
    FIN_FONCTION
VARIABLES
  LISTE_NB EST_DU_TYPE LISTE
  NB_NOMBRES EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
  AFFICHER "Veuillez entrer un nombre : "
  LIRE NB_NOMBRES
  APPELER_FONCTION initTab(NB_NOMBRES)
  APPELER_FONCTION printFizzBuzz(NB_NOMBRES)
FIN_ALGORITHME