/**
 * FONCTION dot_product : Elle retourne directement le résultat ps
 */
function dot_product_func(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i]; // Somme des produits des composants
    }
    return ps;
}

/**
 * Algorithme principal utilisant la FONCTION
 */
function verifierOrthogonaliteFonction(couples) {
    couples.forEach((couple, index) => {
        // On appelle la fonction et on récupère le résultat dans une constante
        const resultat = dot_product_func(couple[0], couple[1]);

        if (resultat === 0) {
            console.log(`Couple ${index + 1} : Orthogonaux (Produit = 0)`);
        } else {
            console.log(`Couple ${index + 1} : Non orthogonaux (Produit = ${resultat})`);
        }
    });
}

// Exemple de test
const mesVecteurs = [
    [[1, 0], [0, 1]], // Orthogonaux
    [[1, 2], [3, 4]]  // Non orthogonaux
];

verifierOrthogonaliteFonction(mesVecteurs);
