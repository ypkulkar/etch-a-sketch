// Creates the entire grid

function createDivs(numBox){
    for(let i = 0; i < numBox; i++){
        let vdiv = document.createElement("div");
        vdiv.style.height = `${CONTAINER_HEIGHT/numBox}px`;

        for(let i = 0; i < numBox; i++){
            let hdiv = document.createElement("div");
            hdiv.classList.add("inline");
            hdiv.classList.add("target-divs");
            hdiv.style.border = "1px solid black";
            hdiv.style.height = `${CONTAINER_HEIGHT/numBox}px`;
            hdiv.style.width = `${CONTAINER_WIDTH/numBox}px`;
            hdiv.style.backgroundColor = 'white';
            vdiv.appendChild(hdiv);
        }
        con.appendChild(vdiv);
    }

    let hoverDivs = document.querySelectorAll(".target-divs");
    let drawBtn = document.querySelector("#draw-button");
    let clearBtn = document.querySelector("#clear-button");
    let eraserBtn = document.querySelector("#eraser-button");
    let randomBtn = document.querySelector("#random-button");
    
    hoverDivs.forEach(tarDiv => {
        tarDiv.addEventListener('mouseover',function(){
            tarDiv.style.backgroundColor = 'black';
        });
        drawBtn.addEventListener('click',function(){
            tarDiv.addEventListener('mouseover',function(){
                tarDiv.style.backgroundColor = 'black';
            });
        })
        clearBtn.addEventListener('click',function(){
            tarDiv.style.backgroundColor = 'white';
        })
        eraserBtn.addEventListener('click',function(){
            tarDiv.addEventListener('mouseover',function(){
                tarDiv.style.backgroundColor = 'white';
            });
        });
        randomBtn.addEventListener('click',function(){
            tarDiv.addEventListener('mouseover',function(){
                tarDiv.style.backgroundColor = getRandomColor();
            });            
        })
    });
}

function resetDivs(numBox){
    while(con.firstChild){
        con.removeChild(con.firstChild);
    }
    createDivs(numBox);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}



//Main
const CONTAINER_HEIGHT = 480;
const CONTAINER_WIDTH = 480;
let con = document.querySelector("#container");
createDivs(14);

let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener('click',function(){
    do{
        numBox = prompt("How many boxes in each row? (select something above 0 and below 50): ",'');
    } while(numBox < 1 || numBox > 50);
    resetDivs(numBox);
})

let btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener('click',function(){
        btn.classList.add('playing');
        btn.addEventListener('transitionend', removeTransition);
    })
})





