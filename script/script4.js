let operande1 = prompt("Entrer un nombre", "");
let operateur = prompt("Entrer une opération (+, -, *, /)", "");
let operande2 = prompt("Entrer un second nombre", "");

/* 
    Je créer ici le "pointeur" sur fonction qu'on appelle une fonction de callback
    Pour le moment, je n'exécute pas cette fonction 
*/
let operation;
switch (operateur) {
    case '+':
        operation = function (a, b) { return a + b; };
        break;
    case '-':
        operation = function (a, b) { return a - b; };
        break;
    case '*':
        operation = function (a, b) { return a * b; };
        break;
    case '/':
        operation = function (a, b) { return a / b; };
        break;
    default:
        throw "Operateur non supporté " + operateur;
}

let op1 = Number.parseFloat(operande1);
let op2 = Number.parseFloat(operande2);

/* 
    Comme j'utilise les parenthèses derrière operation, l'interpréteur Javascript 
    Considère que la variable operation est une expression et il l'exécute comme une fonction
    c'est pour ça qu'on dit que Javascript est un language fonctionnel, 
    une fonction peut-être stockée dans une variable ! 
*/
document.write(operation(op1, op2));