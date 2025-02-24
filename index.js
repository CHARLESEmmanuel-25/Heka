const medicamentsDB = [
    { id: 1, nom: "Paracétamol", dosage: "500mg", forme: "Comprimé", prix: 3.50, image: "https://tse4.mm.bing.net/th?id=OIP.aSUGu9XTfKqkMmOZFZN-iAHaHa&pid=Api" },
    { id: 2, nom: "Ibuprofène", dosage: "200mg", forme: "Comprimé", prix: 4.00, image: "https://tse2.mm.bing.net/th?id=OIP.-7jVUF9CWWX9F2EPAl873AHaHa&pid=Api" },
    { id: 3, nom: "Amoxicilline", dosage: "500mg", forme: "Gélule", prix: 5.00, image: "https://tse1.mm.bing.net/th?id=OIP.aWuRBBRcs60zriEE2GojCwHaHa&pid=Api" },
    { id: 4, nom: "Sirop de Toux", dosage: "5mg/ml", forme: "Sirop", prix: 6.50, image: "https://tse1.mm.bing.net/th?id=OIP.grhnkmYdWtftVFCCp0v0FgHaHa&pid=Api" },
    { id: 5, nom: "Aspirine", dosage: "300mg", forme: "Comprimé", prix: 2.00, image: "https://tse1.mm.bing.net/th?id=OIP.nu8mJr6PBlzCZIHzztBx5QHaHa&pid=Api" },
    { id: 6, nom: "Loratadine", dosage: "10mg", forme: "Comprimé", prix: 4.50, image: "https://tse2.mm.bing.net/th?id=OIP.imjFLFS87EJM8vkvX6fH5gHaHa&pid=Api" },
    { id: 7, nom: "Omeprazole", dosage: "20mg", forme: "Comprimé", prix: 5.00, image: "https://tse3.mm.bing.net/th?id=OIP.MUAg0DFLFRTLc7czExQ4LwHaHa&pid=Api" },
    { id: 8, nom: "Prednisolone", dosage: "20mg", forme: "Comprimé", prix: 6.00, image: "https://tse3.mm.bing.net/th?id=OIP.r0qXJ_heLP8DmTN4bybSwQAAAA&pid=Api" },
    { id: 9, nom: "Furosemide", dosage: "40mg", forme: "Comprimé", prix: 4.80, image: "https://tse3.mm.bing.net/th?id=OIP.BFw6VU88f0AtEtjZdpty4QHaHa&pid=Api" },
    { id: 10, nom: "Salbutamol", dosage: "100mcg", forme: "Inhalateur", prix: 10.00, image: "https://tse3.mm.bing.net/th?id=OIP.MqUcz7-QL_sK3HLtSXUT8AHaHa&pid=Api" },
    { id: 11, nom: "Simvastatine", dosage: "20mg", forme: "Comprimé", prix: 7.00, image: "https://tse1.mm.bing.net/th?id=OIP.3CI7S3AHfPRQNyZz0t0Z2QHaHa&pid=Api" },
    { id: 12, nom: "Metformine", dosage: "1000mg", forme: "Comprimé", prix: 3.80, image: "https://tse1.mm.bing.net/th?id=OIP.R_GkVhw6fmzIEbqhB4VjYQHaHa&pid=Api" },
    { id: 13, nom: "Lisinopril", dosage: "10mg", forme: "Comprimé", prix: 5.20, image: "https://tse2.mm.bing.net/th?id=OIP.j-56RM9PDouFMse-B9SNfQHaHa&pid=Api" },
    { id: 14, nom: "Doxylamine", dosage: "15mg", forme: "Comprimé", prix: 6.00, image: "https://tse1.mm.bing.net/th?id=OIP.eg3C2Q3pmVewNRCRG6o7bAAAAA&pid=Api" },
    { id: 15, nom: "Hydrochlorothiazide", dosage: "50mg", forme: "Comprimé", prix: 4.50, image: "https://tse1.mm.bing.net/th?id=OIP.-CwvQjEj0fZxgY3c8G0bSQHaHa&pid=Api" },
    { id: 16, nom: "Citalopram", dosage: "20mg", forme: "Comprimé", prix: 9.00, image: "https://tse3.mm.bing.net/th?id=OIP.UEJG6cxb79U7YvPHI33gKQHaDt&pid=Api" },
    { id: 17, nom: "Levothyroxine", dosage: "50mcg", forme: "Comprimé", prix: 12.00, image: "https://tse2.mm.bing.net/th?id=OIP.mF1t6zz0Rj4J8ux0Gv43KAHaFc&pid=Api" },
    { id: 18, nom: "Métronidazole", dosage: "200mg", forme: "Comprimé", prix: 7.50, image: "https://tse2.mm.bing.net/th?id=OIP.mF1t6zz0Rj4J8ux0Gv43KAHaFc&pid=Api" },
    { id: 19, nom: "Bisoprolol", dosage: "2.5mg", forme: "Comprimé", prix: 4.90, image: "https://tse3.mm.bing.net/th?id=OIP.1Jr2gczihnqNpslaFg7OGAHaHa&pid=Api" },
    { id: 20, nom: "Codéine", dosage: "30mg", forme: "Comprimé", prix: 6.50, image: "https://tse2.mm.bing.net/th?id=OIP.rvXyfkDyAlh37-BbQQGDpgAAAA&pid=Api" }
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
    btnVoirProduit.href = 'search.html';
    btnVoirProduit.textContent = 'Voir plus';


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


/*

     <div class="medication-card">
                <div class="medication-header">
                    <div class="medication-info">
                        <h3>Amoxicilline</h3>
                        <span class="medication-category">Antibiotiques</span>
                    </div>
                    <span class="medication-price">15.99€</span>
                </div>
             <button class="add-to-cart">Ajouter au panier</button>
     </div>



*/ 


document.addEventListener("DOMContentLoaded", () => {
    medicamentsDB.forEach(element => {
        const container = document.querySelector(".medications-grid");

        const medicationcard = document.createElement('div');
        medicationcard.classList.add('medication-card');

        const medicationheader = document.createElement('div');
        medicationheader.classList.add('medication-header');

        const medicationinfo = document.createElement('div');
        medicationinfo.classList.add('medication-info');

        const prix = document.createElement('p');
        prix.textContent = `${element.prix} $`;
        const titre = document.createElement('h3');
        titre.textContent = element.nom; 
        const btnOrder = document.createElement('a');
        btnOrder.textContent = 'Commander';
        btnOrder.classList.add('boutonlink');
        btnOrder.href = 'search.html';
        const imgMed = document.createElement('img')
        imgMed.src = element.image;
        imgMed.alt = element.nom;
        imgMed.style.width = "100px";

        medicationinfo.appendChild(imgMed);
        medicationinfo.appendChild(titre);
        medicationinfo.appendChild(medicationheader); // Si vous avez des informations spécifiques dans le header
        medicationcard.appendChild(medicationinfo);
        medicationcard.appendChild(prix);
        medicationcard.appendChild(btnOrder); // Ajout du bouton de commande après le prix

        container.appendChild(medicationcard); // Ajout du card directement au container
    });
});



