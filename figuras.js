// Codigo del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd()

//Codigo del Triangulo
console.group("Triangulo")
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

console.groupEnd()

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(input.value);
    alert(perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = areaCuadrado(input.value);
    alert(perimetro);
}