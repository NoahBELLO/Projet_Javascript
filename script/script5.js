function forEach(tableau, callback){
    for(i = 0; i < tableau.length; i++){
        //pour chaque élément de mon tableau j'exécute le callback
        callback(tableau[i], i) ;
    }
}

let array = [1, 4, 5, 45, 9];
maFonction = function(nombre, position){ document.write("Le nombre à la position "+ position + " est " + nombre + "<br>") ; } 
forEach(array, maFonction) ;

/*
Ou 

let array = [1, 4, 5, 45, 9];
 
forEach(array, function(nombre, position){ 
    document.write("Le nombre à la position "+ position + " est " + nombre + "<br>") ; 
}) ;
*/