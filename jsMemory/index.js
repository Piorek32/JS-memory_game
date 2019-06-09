(() => {
    console.log('działa')
    const tilesNumber = 20;
    let tilesArray = []
    let clickedTile = [];
    let score = 0;
    let canClick = true;

    const container = document.querySelector('.container');
    const tiles = document.getElementsByClassName('til');
    const scoreBox = document.querySelector('.scoreBox');

    for (let i = 0; i < tilesNumber; i++) {
        let index = Math.floor(i / 2);
        tilesArray.push(index)
    }

    for (let i = tilesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
    }





    for (let i = 0; i < tilesNumber; i++) {

        var div = document.createElement('div');
        var span = document.createElement('span');
        div.appendChild(span);
        div.classList.add(`tiles${i}`);
        div.classList.add(`til`);
        div.dataset.tiles = tilesArray[i];
       
       
    
        container.appendChild(div);

    }

    function tilesCliked() {
       
        if (canClick) {
            clickedTile.push(this);
            
            this.firstChild.classList.add('cliked');
            if (clickedTile.length > 1 ) {
                canClick = false;
                if (clickedTile[0].dataset.tiles === clickedTile[1].dataset.tiles && clickedTile[0].classList[0] !== clickedTile[1].classList[0] ) {
                    debugger 
                    score += 1;
                    if (score === 10) {
                        //end game
                    }
               
                    scoreBox.innerHTML = score;
                    for (char of clickedTile) {
                        char.classList.add('matched');
                        canClick = true;
                    }
                    clickedTile = [];
                    canClick = true;
                } else {
                    clickedTile.forEach(span => {
                        setTimeout(() => {
                            span.firstChild.classList.remove('cliked');
                            clickedTile = [];
                            canClick = true;
                        },
                            1000);
                    });
                }
            }
        }
    }



    for (const char of tiles) {
        char.addEventListener('click', tilesCliked);
    }


}

)();
