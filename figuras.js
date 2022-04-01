// Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El area del cuadrado mide: " + perimetroCuadrado + " cm2");

console.groupEnd()

// Codigo del triangulo
//console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("El lado A mide " + ladoTriangulo1 + " cm");
//console.log("El lado B mide " + ladoTriangulo2 + " cm");
//console.log("La base mide " + baseTriangulo + " cm");
//console.log("La altura del triangulo es:  " + baseTriangulo + " cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm");
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm);

function perimetroTriangulo(ladoa, ladob, base){
    return ladoa + ladob + base;
} 

//const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
//console.log("El area del cuadrado mide: " + areaTriangulo + " cm^2");
function areaTriangulo(base, altura){
    return (base * altura)/2;
} 

console.groupEnd()

// Codigo del Circulo
console.group("Circulo");

//Radio
const radioCirculo = 4;

//Diametro
const diametroCirculo = radioCirculo * 2;

//Pi
const pi = 3.1416;

//Circunferencia
const perimetroCirculo = diametroCirculo * pi;

//Area
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log("El radio del circulo mide " + radioCirculo + " cm");
console.log("El diametro del Circulo es " + diametroCirculo + " cm");
console.log("Pi es igual a " + pi + " cm");
console.log("La el perimetro del circulo es: " + perimetroCirculo + " cm");
console.log("El area del circulo es: " + areaCirculo + " cm^2");

