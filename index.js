const medicamentsDB = [
    { id: 1, nom: "Paracétamol", dosage: "500mg", forme: "Comprimé", prix: 3.50, image: "images/paracetamol.jpg" },
    { id: 2, nom: "Ibuprofène", dosage: "200mg", forme: "Comprimé", prix: 4.00, image: "images/ibuprofene.jpg" },
    { id: 3, nom: "Amoxicilline", dosage: "500mg", forme: "Gélule", prix: 5.00, image: "images/amoxicilline.jpg" },
    { id: 4, nom: "Sirop de Toux", dosage: "5mg/ml", forme: "Sirop", prix: 6.50, image: "images/syrup_toux.jpg" },
    { id: 5, nom: "Aspirine", dosage: "300mg", forme: "Comprimé", prix: 2.00, image: "assets/aspi.png" }
];

const filtrerMedicaments = (searchValue) => {
    searchValue = searchValue.toLowerCase().replace(/\s+/g, ""); // Nettoie l'entrée utilisateur

    return medicamentsDB
        .map(med => {
            const medNom = med.nom.toLowerCase().replace(/\s+/g, "");

            // Compter le nombre de lettres en commun (dans l'ordre)
            let matchCount = 0;
            let index = 0;

            for (let char of searchValue) {
                index = medNom.indexOf(char, index);
                if (index !== -1) {
                    matchCount++;
                    index++;
                }
            }

            return { ...med, matchCount }; // Ajoute matchCount à l'objet
        })
        .filter(med => med.matchCount >= 2) // Garde ceux avec au moins 2 lettres en commun
        .sort((a, b) => b.matchCount - a.matchCount) // Trie du plus au moins pertinent
        .slice(0, 2); // Limite à 4 résultats max
};



const inputMedicamentSearch = document.querySelector('.search-input');
const resultContenair = document.querySelector('.result');

inputMedicamentSearch.addEventListener('input', (e) => {
    const searchValue = e.target.value.trim();
    resultContenair.innerHTML = ""; // Efface les résultats précédents

    if (searchValue.length < 1) {
        resultContenair.classList.add('hidden');
        
    }else{
        resultContenair.classList.remove('hidden');
    }

    if (searchValue.length < 2) return; // Recherche dès 2 caractères

    const medicamentsFiltres = filtrerMedicaments(searchValue);

    if (medicamentsFiltres.length === 0) {
        resultContenair.innerHTML = "<p>Aucun médicament trouvé.</p>";
        return;
    }

    const btnVoirProduit = document.createElement('a');
    btnVoirProduit.textContent = 'Voir plus';
    btnVoirProduit.classList.add('boutonlink');
    btnVoirProduit.href = 'voirplus';


    // Affichage des résultats triés
    medicamentsFiltres.forEach(medicament => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('item');

        const resultImage = document.createElement('img');
        resultImage.src = medicament.image;
        resultImage.alt = medicament.nom;
        resultImage.style.width = "100px";

        const nomMedoc = document.createElement('p');
        nomMedoc.textContent = `${medicament.nom}`;

        const dosageMedoc = document.createElement('p');
        dosageMedoc.textContent = `Dosage : ${medicament.dosage}`;

        const prixMedoc = document.createElement('p');
        prixMedoc.textContent = `Prix : ${medicament.prix} €`;

        resultItem.appendChild(resultImage);
        resultItem.appendChild(nomMedoc);
        resultItem.appendChild(dosageMedoc);
        resultItem.appendChild(prixMedoc);
        resultContenair.appendChild(resultItem);
        resultContenair.appendChild(btnVoirProduit);
    });

    console.log(`📌 Médicaments trouvés (${medicamentsFiltres.length}) :`, medicamentsFiltres);
});
