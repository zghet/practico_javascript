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

function areaCirculo(radio){
    return (radio * radio)*Math.PI;
}

console.groupEnd()

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(input.value);
    alert("El perimetro del Triangulo es " + perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = areaCuadrado(input.value);
    alert(perimetro);
}

//Calculos de triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    
    const base = document.getElementById("InputTriangulo3");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del Triangulo es " + perimetro);
}

function calcularAreaTriangulo(){
    
    const base = document.getElementById("InputTriangulo3");
    const value3 = Number(base.value);
    
    const altura = document.getElementById("InputTrianguloAltura");
    const altura1 = Number(altura.value);

    const area = areaTriangulo(value3, altura1);
    alert("El area del Triangulo es " + area);
}