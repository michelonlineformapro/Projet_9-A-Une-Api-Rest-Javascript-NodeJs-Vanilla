/*
L’évènement DOMContentLoaded est émis lorsque le document HTML initial a été complètement chargé et analysé,
sans attendre que les feuilles de style, images et sous-documents aient terminé de charger.
 */
document.addEventListener('DOMContentLoaded', () => {
    //La <div> html qui va contenir nos produits
    const produitsDIV = document.getElementById("produitsDIV");
    /*****************AFFICHER LES PRODUITS******************/
    function afficherProduits() {
        //Le parcours du fichier  produits.json avec fetch et des promesses
        //Api fetch a besoin d'une URL en paramètre (ici notre server.js)
        fetch('http://localhost:3000')
            //Par defaut une promesse retourne un objet avec une série de méthodes utilisables
            // en fonction de ce que vous voulez faire avec les informations
            .then((response) => {
                return response;
            })
            //On transforme l'objet reponse au format json
            .then((data) => {
            return data.json();
            })
            //Enfin l'objet json est passé dans un tableau utilisable en html
            //On boucle sur le tableau [{objet}] avec la fonction .map et on creer un nouveau tableau pour acceder a chaque element des objets
            .then((Produits) => {
                //On passe un id dynamique a chaque carte col-md-4
                const carteProduit = Produits.map((produit) =>
                `<div class="col-md-4 col-sm-12 mt-3" id="carte-produit-${produit.id}">
                    <div class="card p-3">
                    <h3 class="card-title text-danger">${produit.nomProduit}</h3>
                    <div class="card-img-top">
                    <!--IMAGE = parametre produit de la fonction ajouterProduit(produit) + nom de element a afficher de notre db.json (ici imageProduit)-->
                      <img class="img-fluid card-img p-3" src="${produit.imageProduit}"  alt="${produit.nomProduit}" title="${produit.nomProduit}">
                      
                    </div>
                    <div class="card-text">                      
                      <p>${produit.descriptionProduit}</p>
                    </div>
                    <div class="card-action">
                      <p class="text-success">Prix : ${produit.prixProduit} €</p>
                      <a href="#carte-produit-${produit.id}" class="btn btn-outline-danger">Détails</a>
                    </div>
                  </div>
                </div>`)
                //join('') supprimer chaque virgule entre les objets du tableau
                produitsDIV.innerHTML = carteProduit.join('');
            })
            .catch((erreur) => {
                console.log("Erreur " + erreur)
            })


    }

    /************APPEL DES FONCTIONS***********/
    afficherProduits();

});