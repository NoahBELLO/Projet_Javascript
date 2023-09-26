function affichage(v) {
    //Je vérifie que c'est bien un nombre entier 
    if (Number.isInteger(v)) {
        //Je vérifie que ce nombre est bien entre 1 et 10 inclus
        if (v >= 1 && v <= 10) {
            //J'affiche ma table de multiplication
            document.write("<table> <thead> <tr> <th colspan=" + 3 + ">La Table de Multiplication de " + v + "</th> </tr> </thead> <tr><th>Operande 1</th><th>Operande 2</th><th>Resultat</th></tr>");
            for (i = 1; i < 11; i++) {
                document.write("<tbody> <tr> <td>" + v + "</td>" + "<td>" + i + "</td>" + "<td>" + v * i + "</td> </tr>");
            }
            document.write("</tbody> </table>");
        }

        else {
            document.write("Le nombre saisie n'est pas entre 1 et 10 : " + v);
        }
    }

    else {
        document.write("Saisie invalide : " + v);
    }
}

//Cas sans le do while
//Saisir quelque chose venant de l'utilisateur (prompt)
/* 
var Variable = window.prompt("Veuillez saisir une variable entre 1 et 10 ", "");

Variable = parseFloat(Variable);

affichage(Variable); 
*/

//Cas avec le do while
function affiche(v){
    document.write("<table> <thead> <tr> <th colspan=" + 3 + ">La Table de Multiplication de " + v + "</th> </tr> </thead> <tr><th>Operande 1</th><th>Operande 2</th><th>Resultat</th></tr>");
    for (i = 1; i < 11; i++) {
        document.write("<tbody> <tr> <td>" + v + "</td>" + "<td>" + i + "</td>" + "<td>" + v * i + "</td> </tr>");
    }
    document.write("</tbody> </table>");
}

do{
    var Variable = window.prompt("Veuillez saisir une variable entre 1 et 10 ", "");

    Variable = parseFloat(Variable);
}while(!(Number.isInteger(Variable) && (Variable >= 1 && Variable <= 10))) ;
//}while(!Number.isInteger(Variable) || !(Variable >= 1 && Variable <= 10)) ;
/* 
    Je fais une loi de Morgan pour optimiser ma boucle
    !a || !b = !(a && b)
    !a && !b = !(a || b) 
*/
affiche(Variable) ;