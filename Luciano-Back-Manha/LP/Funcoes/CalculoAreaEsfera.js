const PI = 3.14159

function CalcularArea(raio){

    CalcularArea = 4 * PI * (raio ** 2);
    
}

function CalcularVolume(raio){

    CalcularVolume = (4/3) * PI * (raio ** 3);
    
}

let raio = parseFloat(prompt('Informe o raio da esfera: '));

if(raio < 0){
    console.log('número inválido');
} else {
    CalcularArea (raio);
    CalcularVolume (raio);
}

  console.log(CalcularArea);
  console.log(CalcularVolume);
