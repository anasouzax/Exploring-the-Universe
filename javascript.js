let planetaTerraEl = document.querySelector('#terra');

//função para movimentar o planeta
let anguloPlaneta = 0;

function novaPosição () {
    anguloPlaneta += 0,05; 

    //posição do x e y
    let xDaTerra = Math.cos(anguloPlaneta) * 100;
    let yDaTerra = Math.sin(anguloPlaneta) * 100;

    planetaTerraEl.style.transform = `translate(${xDaTerra}px, ${yDaTerra}px)`;
}

setInterval(novaPosição, 33);