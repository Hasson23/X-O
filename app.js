let turn = "x";
let title = document.querySelector(".title");
let sq = []
function win(){
    for(let i = 1; i<10; i++){
       sq[i] = document.getElementById('item'+ i).innerHTML
    }


function end(num1,num2,num3){
    title.innerHTML = `${sq[num1]} is Winner <br> <video src="1.mp4" autoplay></video>`;
       document.getElementById("item" + num1).style.background ="black" 
       document.getElementById("item" + num2).style.background ="black" 
       document.getElementById("item" + num3).style.background ="black" 

       setInterval(function(){title.innerHTML+= "."},3000)
       setTimeout(function() {location.reload()},3000)
}
    if(sq[1] == sq[2] && sq[2] == sq[3] && sq[1] != "")
    {
        end(1,2,3)

    } else if(sq[4] == sq[5] && sq[5] == sq[6] && sq[5] != "")
    {
        end(4,5,6)
    } else if(sq[7] == sq[8] && sq[8] == sq[9] && sq[7] != "")
    {
        end(7,8,9)
    } if(sq[1] == sq[4] && sq[4] == sq[7] && sq[1] != "")
    {
        end(1,4,7)
    }if(sq[2] == sq[5] && sq[5] == sq[8] && sq[5] != "")
    {
        end(2,5,8)
    }if(sq[3] == sq[6] && sq[6] == sq[9] && sq[6] != "")
    {
        end(3,6,9)
    }if(sq[1] == sq[5] && sq[5] == sq[9] && sq[1] != "")
    {
        end(1,5,9)
    }if(sq[3] == sq[5] && sq[5] == sq[7] && sq[5] != "")
    {
        end(3,5,7)
    }

}


function game(id){
    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML ==""){
        element.innerHTML = "X"
        turn = "o";
        title.innerHTML = 'O'
    }
    else if(turn === "o" && element.innerHTML == ""){
        element.innerHTML = "O"
        turn = "x";
        title.innerHTML = 'X'
    }
    win();
}