/* 
    //Fonction en mode sale pour les boutons
    //Correction Partie 1
    function saisir(){
        //je regarde si il y a des éléments p.square
        let squares = document.getElementsByClassName("square") ;
        if(squares.length > 0){
            alert("Vous devez effacer avant de saisir") ;
            return ;
        }
        let mesNombres = [] ;
        do{ //je réalise l'extraction des données, et je vais les transformer dans un tableau
            //Saisir quelque chose venant de l'utilisateur (prompt)
            let saisie = window.prompt("Entrez un nombre positif, un nombre négatif arrête la saisie", "") ;
            let nombre = parseFloat(saisie) ;
            if(Number.isInteger(nombre)){
                nombre = parseInt(saisie) ; //je sais que j'ai vraiment un nombre entier
                if(nombre < 0){
                    console.log("La valeur est négative, arrêt de la saisie : "+nombre) ;
                }

                else{
                    console.log("Ajout dans le tableau du nombre : "+nombre) ;
                    mesNombres.push(nombre) ;
                }
            }

            else{
                console.log("La valeur n'est pas un nombre entier : "+ saisie) ;
            }
        }while(true) ;
        console.log(mesNombres) ;
        for(i = 0; i<mesNombres.length; ++i){
            let p = document.createElement("p") ;
            p.textContent = mesNombres[i] ;
            p.setAttribute("id", "identifiant_"+(i+1)) ;
            if(i%2==0){
                p.setAttribute("class", "even square") ;
            }
            else{
                p.setAttribute("class", "odd square") ;
            }
            document.body.appendChild(p) ;
        }
    }
    //Correction Partie 2 
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    function calcul(){        
        let res = document.getElementsByClassName("res") ;

        if(res.length > 0){
            alert("Un calcul a déjà été lancée, veuillez d'abord effacer") ;
            return ;
        }    

        let squares = document.getElementsByClassName("square") ;
        if(squares.length == 0){
            alert("Vous devez lancer une saisie avant de calculer") ;
            return ;
        }
        
        //Calcul des racines carrés
        for(i=0; i<squares.length; ++i){
            let paragraph = squares[i] ;
            let value = parseInt(squares[i].textContent) ;
            let nextParagraph = document.createElement("p") ;
            let racine = Mat.sqrt(value) ;
            nextParagraph.textContent = racine ; //Je met la racine carré dans le <p>
            nextParagraph.setAttribute("class", "res") ;
            if(Number.isInteger(value)){
                nextParagraph.classList.add("integer") ;
            }
            insertAfter(paragraph, nextParagraph) ;
        }
    }

    function effacer(){
        let divResultat = document.getElementById("resultat") ;
        divResultat.innerHTML = '';
    }
--------------------------------------------------------------------------------------------------------------
    //Fonction en mode propre pour les boutons
    //Correction Partie 1
    let saisir = fonction(){
        //je regarde si il y a des éléments p.square
        let squares = document.getElementsByClassName("square") ;
        if(squares.length > 0){
            alert("Vous devez effacer avant de saisir") ;
            return ;
        }
        let mesNombres = [] ;
        do{ //je réalise l'extraction des données, et je vais les transformer dans un tableau
            //Saisir quelque chose venant de l'utilisateur (prompt)
            let saisie = window.prompt("Entrez un nombre positif, un nombre négatif arrête la saisie", "") ;
            let nombre = parseFloat(saisie) ;
            if(Number.isInteger(nombre)){
                nombre = parseInt(saisie) ; //je sais que j'ai vraiment un nombre entier
                if(nombre < 0){
                    console.log("La valeur est négative, arrêt de la saisie : "+nombre) ;
                }

                else{
                    console.log("Ajout dans le tableau du nombre : "+nombre) ;
                    mesNombres.push(nombre) ;
                }
            }

            else{
                console.log("La valeur n'est pas un nombre entier : "+ saisie) ;
            }
        }while(true) ;
        console.log(mesNombres) ;
        for(i = 0; i<mesNombres.length; ++i){
            let p = document.createElement("p") ;
            p.textContent = mesNombres[i] ;
            p.setAttribute("id", "identifiant_"+(i+1)) ;
            if(i%2==0){
                p.setAttribute("class", "even square") ;
            }
            else{
                p.setAttribute("class", "odd square") ;
            }
            document.body.appendChild(p) ;
        }
    };

    let saisirButton = document.getElementById("saisirButton") ;
    saisirButton.addEvenListener("click", saisir) ;

    //Correction Partie 2 (sans bouton)
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    let calcul = fonction(){        
        let res = document.getElementsByClassName("res") ;

        if(res.length > 0){
            alert("Un calcul a déjà été lancée, veuillez d'abord effacer") ;
            return ;
        }    

        let squares = document.getElementsByClassName("square") ;
        if(squares.length == 0){
            alert("Vous devez lancer une saisie avant de calculer") ;
            return ;
        }
        
        //Calcul des racines carrés
        for(i=0; i<squares.length; ++i){
            let paragraph = squares[i] ;
            let value = parseInt(squares[i].textContent) ;
            let nextParagraph = document.createElement("p") ;
            let racine = Mat.sqrt(value) ;
            nextParagraph.textContent = racine ; //Je met la racine carré dans le <p>
            nextParagraph.setAttribute("class", "res") ;
            if(Number.isInteger(value)){
                nextParagraph.classList.add("integer") ;
            }
            insertAfter(paragraph, nextParagraph) ;
        }
    };
    let calculButton = document.getElementById("calculButton") ;
    calculButton.addEvenListener("click", calcul) ;

    //Déclaration de la fonction pour effacer
    let effacerButton = document.getElementById("effacerButton") ;
    let effacerButton.onclick= fonction(){
        let divResultat = document.getElementById("resultat") ;
        divResultat.innerHTML = '';
    } ;
    
    effacerButton.addEvenListener("click", effacer) ;
*/

/* Manière sale */
//Partie 1
/* function saisie() {
    let p = document.querySelectorAll("p");
    if (p.length === 0) {
        alert("Vous allez pouvoir saisir");
        let b; let para; let Variable;

        let i = 1;
        i = Number.parseFloat(i);
        do {
            Variable = window.prompt("Entrez un nombre entier positif", "");
            Variable = Number.parseFloat(Variable);

            b = document.body;
            if (Number.isInteger(Variable) && Variable >= 0) {
                para = document.createElement("p");
                para.setAttribute("id", "identifiant_" + i);
                if (i % 2 == 0) {
                    para.setAttribute("class", "even");
                }
                else {
                    para.setAttribute("class", "odd");
                }
                para.classList.add("square");
                para.textContent = Variable;
                b.appendChild(para);
                ++i;
            }
        } while (!(Number.isInteger(Variable) && (Variable < 0)));
    }
    else {
        alert("Vous ne pouvez pas saisir car il y a déjà des données");
    }
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//Partie 2
function calcul() {
    let p = document.querySelectorAll("p");

    if (p.length === 0) {
        alert("Vous ne pouvez pas calculer car aucune données");
    }
    else {
        let p2 = document.querySelectorAll(".res");
        if (p2.length === 0) {
            alert("Vous allez pouvoir calculer");
            let array = [];
            let squ = document.querySelectorAll(".square");
            for (j = 0; j < squ.length; j++) {
                array.push(squ[j].innerHTML);
                squ[j].innerHTML = "Racine Carré de " + array[j];
                para2 = document.createElement("p");
                para2.setAttribute("class", "res");
                para2.textContent = Math.sqrt(array[j]);
                if (Number.isInteger(Math.sqrt(array[j]))) {
                    para2.setAttribute("class", "res integer");
                }
                /* else {
                    para2.setAttribute("class", "res float");
                } //Possible mais pas demander 
                //squ[j].appendChild(para2); //ça marche mais ce n'est pas demander
                insertAfter(para2, squ[j]);
            }
        }
        else {
            alert("Vous ne pouvez pas calculer car il y a déjà des résultats");
        }
    }
}

function efface() {
    let supp = document.querySelectorAll(".square, .res");
    alert(supp.length === 0 ? "Impossible de supprimer car aucun élément" : "Tout va être supprimer");
    for (i = 0; i < supp.length; i++) {
        supp[i].parentNode.removeChild(supp[i]);
    }
}

function inversion() {
    let para = document.querySelectorAll(".square");
    if (para.length === 0) {
        alert("Vous ne pouvez pas inverser les classes car il y a aucune données");
    }
    else {
        alert("Vous allez inverser les classes odd et even");
        let odd = document.querySelectorAll(".odd");
        let even = document.querySelectorAll(".even");

        for (i = 0; i < odd.length; i++) {
            odd[i].classList.replace("odd", "even");
        }

        for (j = 0; j < even.length; j++) {
            even[j].classList.replace("even", "odd");
        }
    }
}

function gras() {
    let p = document.querySelectorAll("p");
    if (p.length === 0) {
        alert("Vous ne pouvez pas m'être en gras car aucune données");
    }
    else {
        let p2 = document.querySelectorAll(".res");
        let i = 0 ;
        if (p2.length === 0) {
            alert("Vous ne pouvez pas m'être en gras car aucun calcul n'a été effectuer précédement");
        }
        else {
            alert("Vous allez mettre en gras les résultats qui ne sont pas des entiers");
            for (i = 0; i < p2.length; i++) {
                if (p2[i].getAttribute("style") === null) {
                    if (!(Number.isInteger(p2[i].innerHTML) || p2[i].classList.contains("integer"))) {
                        p2[i].style.fontWeight = "bold";
                        p2[i].style.backgroundColor = "green";
                    }
                }
                else {
                    console.log("Vous avez remis les résultats à leur état initial");
                    p2[i].removeAttribute("style");
                }
            }
        }
    }
}

function popup(){

} */

let saisie = function () {
    let p = document.querySelectorAll("p");
    if (p.length === 0) {
        let quest = window.confirm("Est-ce que vous voulez saisir ?");
        if (quest == true) {
            let b; let para; let Variable; let i = 1;
            i = Number.parseFloat(i);
            do {
                Variable = window.prompt("Entrez un nombre entier positif", "");
                Variable = Number.parseFloat(Variable);

                b = document.body;
                if (Number.isInteger(Variable) && Variable >= 0) {
                    para = document.createElement("p");
                    para.setAttribute("id", "identifiant_" + i);
                    if (i % 2 == 0) {
                        para.setAttribute("class", "even");
                    }
                    else {
                        para.setAttribute("class", "odd");
                    }
                    para.classList.add("square");
                    para.textContent = Variable;
                    b.appendChild(para);
                    ++i;
                }
            } while (!(Number.isInteger(Variable) && (Variable < 0)));
        }
        else console.log("Vous avez annulé votre demande de saisie");
    }
    else alert("Vous ne pouvez pas saisir car il y a déjà des données");
};
let saisirButton = document.getElementById("saisirButton");
saisirButton.addEventListener("click", saisie);

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//Partie 2
let calculButton = document.getElementById("calculButton");
calculButton.onclick = function () {
    let p = document.querySelectorAll("p");

    if (p.length === 0) alert("Vous ne pouvez pas calculer car aucune données");
    else {
        let p2 = document.querySelectorAll(".res");
        if (p2.length === 0) {
            let quest = window.confirm("Est-ce que vous voulez calculer ?");
            if (quest == true) {
                let array = [];
                let squ = document.querySelectorAll(".square");
                for (j = 0; j < squ.length; j++) {
                    array.push(squ[j].innerHTML);
                    squ[j].innerHTML = "Racine Carré de " + array[j];
                    para2 = document.createElement("p");
                    para2.setAttribute("class", "res");
                    para2.textContent = Math.sqrt(array[j]);
                    if (Number.isInteger(Math.sqrt(array[j]))) {
                        para2.setAttribute("class", "res integer");
                    }
                    /* else {
                        para2.setAttribute("class", "res float");
                    } //Possible mais pas demander */
                    //squ[j].appendChild(para2); //ça marche mais ce n'est pas demander
                    insertAfter(para2, squ[j]);
                }
            }
            else console.log("Vous avez annulé votre demande de calcul");
        }
        else alert("Vous ne pouvez pas calculer car il y a déjà des résultats");
    }
};

let efface = function () {
    let supp = document.querySelectorAll(".square, .res");
    if (supp.length === 0) alert("Impossible de supprimer car aucun élément");

    else {
        let quest = window.confirm("Est-ce que vous voulez tout effacer ?");
        if (quest == true) {
            for (i = 0; i < supp.length; i++) {
                supp[i].parentNode.removeChild(supp[i]);
            }
        }
        else console.log("Vous avez annulé votre demande de suppression");
    }
}
let effaceButton = document.getElementById("effaceButton");
effaceButton.addEventListener("click", efface);

//Partie 3
let inversionButton = document.getElementById("inversionButton");
inversionButton.onclick = function () {
    let para = document.querySelectorAll(".square");
    if (para.length === 0) alert("Vous ne pouvez pas inverser les classes car il y a aucune données");
    else {
        let quest = window.confirm("Est-ce que vous voulez inverser les classes odd et even ?");
        if (quest == true) {
            let odd = document.querySelectorAll(".odd");
            let even = document.querySelectorAll(".even");

            for (i = 0; i < odd.length; i++) {
                odd[i].classList.replace("odd", "even");
            }

            for (j = 0; j < even.length; j++) {
                even[j].classList.replace("even", "odd");
            }
        }
        else console.log("Vous avez annulé votre demande d'inversion de classes");
    }
};

let gras = function () {
    let p = document.querySelectorAll("p");
    if (p.length === 0) alert("Vous ne pouvez pas m'être en gras car aucune données");
    else {
        let p2 = document.querySelectorAll(".res");
        let i = 0;
        if (p2.length === 0) alert("Vous ne pouvez pas m'être en gras car aucun calcul n'a été effectuer précédement");
        else {
            let quest = window.confirm("Est-ce que vous voulez mettre en gras les résultats qui ne sont pas des entiers ?");
            if (quest == true) {
                for (i = 0; i < p2.length; i++) {
                    if (p2[i].getAttribute("style") === null) {
                        if (!(Number.isInteger(p2[i].innerHTML) || p2[i].classList.contains("integer"))) {
                            p2[i].style.fontWeight = "bold";
                        }
                    }
                    else {
                        console.log("Vous avez remis les résultats à leur état initial");
                        p2[i].removeAttribute("style");
                    }
                }
            }
            else console.log("Vous avez annulé votre demande de mise en gras");
        }
    }
};
let grasButton = document.getElementById("grasButton");
grasButton.addEventListener("click", gras);

//Partie 4

setInterval(function () {
    let p3 = document.querySelectorAll(".res");
    for (i = 0; i < p3.length; i++) {
        if (p3[i].innerHTML > 10) {
            if (p3[i].style.backgroundColor == "purple") {
                p3[i].style.backgroundColor = "yellowgreen"
            }
            else {
                p3[i].style.backgroundColor = "purple";
            }
        }
    }
}, 2000);

/* let popupButton = document.getElementById("popupButton");
popupButton.onclick = function () {
    let quest = window.confirm("Popup");
    let x = setTimeout(function () {
        window.close();
    }, 0);

    if (quest == true) {
        clearTimeout(x) ;
    }
}; */