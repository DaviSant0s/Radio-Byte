const stationsUrl = {
    94.3: 'atlantida',
    97.1: 'oceano',
    102.1: 'gaucha',
    103.3: 'cultura'
}

const stations = {
    94.3: 'Atlântida',
    97.1: 'Oceano',
    102.1: 'Gaúcha',
    103.3: 'Cultura'
}

/* evento de carregamento da janela, para esperar ela carregar */

window.addEventListener('load', function() {

    //referenciar itens
    const image = document.querySelector('#img');
    const input = document.querySelector('#range-input');
    const stationText = document.querySelector('#station-text');
    const currentStationNumber = this.document.querySelector('#station-number');

    /* colocar o evento de deslizamento no input */
    input.addEventListener('input', function(e){
        // ontém o valor de entrada atual de 'e' (evento)
        const freq = e.target.value;

        // Obtém a nova estação, de acordo com a variável 'freq'
        const newStation = stationsUrl[freq];

        if(newStation != undefined){
            image.src = `public/assets/stations/${newStation}.png`;
            currentStationNumber.innerHTML = Number(freq).toFixed(1);
            stationText.innerHTML = `- Rádio ${stations[freq]}`;
        }else{
            if(stationText.textContent == 'Fora do ar') return;

            image.src = `public/assets/stations/default.png`;
            currentStationNumber.innerHTML = Number(freq).toFixed(1);
            stationText.innerHTML = `Fora do ar`;
        }
    });

})

