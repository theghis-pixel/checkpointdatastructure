/**
 * PROBLÈME 2 : Produit scalaire et Orthogonalité
 */

// Procédure dot_product qui calcule le produit scalaire (ps)
// On utilise un objet pour "resultat" pour simuler un passage par référence
function dot_product(v1, v2, stockage) {
    stockage.ps = 0;
    // Boucle INTERNE : Calcule le produit des composants
    for (let j = 0; j < v1.length; j++) {
        stockage.ps += v1[j] * v2[j];
    }
}

// Algorithme principal pour n couples de vecteurs
function verifierOrthogonalite(n, listeCouples) {
    // Boucle EXTERNE : Parcourt les n couples
    for (let i = 0; i < n; i++) {
        let v1 = listeCouples[i][0];
        let v2 = listeCouples[i][1];
        let stockage = { ps: 0 }; // Passage par référence

        // Appel de la procédure
        dot_product(v1, v2, stockage);

        if (stockage.ps === 0) {
            console.log(`Couple ${i + 1} : Orthogonaux`);
        } else {
            console.log(`Couple ${i + 1} : Non orthogonaux`);
        }
    }
}

// --- TEST ---
const n = 2;
const couplesVecteurs = [
    [[1, 0], [0, 1]], // Orthogonaux
    [[1, 2], [3, 4]]  // Non orthogonaux
];

verifierOrthogonalite(n, couplesVecteurs);
