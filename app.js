const player = document.getElementById('player');
const borderBox = document.getElementById('border-box');
skore = document.getElementById('score-number');


let newElement = document.createElement('div');
newElement.classList.add('bodik');

let points = 0;


let maxX = borderBox.offsetWidth - 45;
let maxY = borderBox.offsetHeight - 45;
let randomX = Math.floor(Math.random() * maxX);
let randomY = Math.floor(Math.random() * maxY);

newElement.style.left = `${randomX}px`;
newElement.style.top = `${randomY}px`;

borderBox.appendChild(newElement);

console.log(borderBox.offsetWidth, borderBox.offsetHeight);
console.log(`ELEMENT VLEVO:${newElement.style.left}`, `ELEMENT VPRAVO:${newElement.style.top}`);



document.addEventListener('keydown', function(e) {
    let newLeft, newTop;

    if (e.key === 'ArrowRight') {
        newLeft = player.offsetLeft + 10;
        if (newLeft + player.offsetWidth <= borderBox.offsetWidth + 20) {
            player.style.left = `${newLeft}px`;
            console.log(`VPRAVO: ${newLeft}`);
        } else {
            alert("Konec hry");
        }
    }
    if (e.key === 'ArrowLeft') {
        newLeft = player.offsetLeft - 10;
        if (newLeft >= 13) {
            player.style.left = `${newLeft}px`;
            console.log(`VLEVO: ${newLeft}`);
        }else {
            alert("Konec hry");
        }
    }
    if (e.key === 'ArrowUp') {
        newTop = player.offsetTop - 10;
        if (newTop >= 13) {
            player.style.top = `${newTop}px`;
            console.log(`NAHORU: ${newTop}`);
        }else {
            alert("Konec hry");
        }
    }
    if (e.key === 'ArrowDown') {
        newTop = player.offsetTop + 10;
        if (newTop + player.offsetHeight <= borderBox.offsetHeight +20) {
            player.style.top = `${newTop}px`;
            console.log(`DOLU: ${newTop}`);
        }else {
            alert("Konec hry");
        }
    }
    let playerRect = player.getBoundingClientRect();
    let newElementRect = newElement.getBoundingClientRect();

    if (playerRect.x < newElementRect.x + newElementRect.width &&
        playerRect.x + playerRect.width > newElementRect.x &&
        playerRect.y < newElementRect.y + newElementRect.height &&
        playerRect.y + playerRect.height > newElementRect.y) {
        newElement.style.display = 'none';
        points++;
        skore.innerHTML = points;
        // let newElement = document.createElement('div');
        newElement.classList.add('bodik');
        newElement.style.display = 'block';

        let maxX = borderBox.offsetWidth - 45;
        let maxY = borderBox.offsetHeight - 45;
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);
        newElement.style.left = `${randomX}px`;
        newElement.style.top = `${randomY}px`;
        borderBox.appendChild(newElement);

    }

    
});
