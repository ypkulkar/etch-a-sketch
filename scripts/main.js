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
            vdiv.appendChild(hdiv);
        }
        con.appendChild(vdiv);
    }


    let hoverDivs = document.querySelectorAll(".target-divs");
    let clearBtn = document.querySelector("#clear-button");

    hoverDivs.forEach(tarDiv => {
        tarDiv.addEventListener('mouseover',function(){
            tarDiv.style.backgroundColor = 'purple';
        });
        clearBtn.addEventListener('click',function(){
            tarDiv.style.backgroundColor = 'white';
        })
        
    
    });
}

function resetDivs(numBox){
    while(con.firstChild){
        con.removeChild(con.firstChild);
    }
    createDivs(numBox);
}


//Main
const CONTAINER_HEIGHT = 480;
const CONTAINER_WIDTH = 480;
let con = document.querySelector("#container");
createDivs(14);

let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener('click',function(){
    numBox = prompt("How many boxes in each row? ",'');
    resetDivs(numBox);
})




