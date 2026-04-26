/** 
 * --- PROBLÈME 1 : SOMME DES ÉLÉMENTS DISTINCTS --- 
 */
function sommeElementsDistincts(set1, set2) {
    let somme = 0;

    // On parcourt le premier ensemble
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            somme += set1[i];
        }
    }

    // On parcourt le deuxième ensemble
    for (let i = 0; i < set2.length; i++) {
        if (!set1[i].includes && !set1.includes(set2[i])) {
            somme += set2[i];
        }
    }

    return somme;
}

/** 
 * --- PROBLÈME 2 : PRODUIT SCALAIRE ET ORTHOGONALITÉ --- 
 */

// Version FONCTION (elle retourne le résultat)
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Algorithme principal pour vérifier n couples de vecteurs
function verifierOrthogonalite(n, couples) {
    for (let i = 0; i < n; i++) {
        let v1 = couples[i][0];
        let v2 = couples[i][1];
        
        // Appel de la fonction
        if (dot_product(v1, v2) === 0) {
            console.log(`Le couple ${i + 1} est orthogonal.`);
        } else {
            console.log(`Le couple ${i + 1} n'est pas orthogonal.`);
        }
    }
}

// --- TESTS ---
console.log("Résultat Problème 1 :", sommeElementsDistincts([3, 1, 7, 9], [2, 4, 1, 9, 3]));

const mesCouples = [
    [[1, 0], [0, 1]], // Orthogonaux
    [[1, 2], [3, 4]]  // Pas orthogonaux
];
verifierOrthogonalite(2, mesCouples);
