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



function perimetroTriangulo(ladoa, ladob, base){
    return ladoa + ladob + base;
} 

function areaTriangulo(base, altura){
    return (base * altura)/2;
} 

console.groupEnd()

// Codigo del Circulo
console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
}


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * Math.PI;
}
//Area

function areaCirculo(radio){
    return (radio * radio)*Math.PI;
}

