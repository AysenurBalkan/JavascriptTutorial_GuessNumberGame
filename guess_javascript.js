var heart = 3;
var random = 0;
function guess() {
    var number = document.getElementById("number").value

    if (heart == 3) {
        random = Math.floor(Math.random()*10+1);
    }
    if (number == random) {
        document.getElementById("result").innerHTML = "Correct Answer : " + random;
        showButton("btn-again");
        hideButton("btn-guess");
    }
   
    else {
        var element = document.querySelectorAll("#hearts > i")[heart - 1];
        element.classList.remove("heart-red");
        element.classList.add("heart-gray");
        heart--;
        

        if (heart > 0) {
            document.getElementById("result").innerText = "You Got it Wrong";
        }
       
        else {
            showButton("btn-again")
            hideButton("btn-guess");
            document.getElementById("result").innerText = "You Got it Wrong:" + random;

        }
     
    }
}

function again()
{
    heart = 3;

    for (var i = 0; i < 3; i++)
    {
        var element = document.querySelectorAll("#hearts > i")[i];
        element.classList.remove("heart-gray");
        element.classList.add("heart-red");
    }
    showButton("btn-guess")
    hideButton("btn-again");
    document.getElementById("result").innerText = " ";
    document.getElementById("number").value ="Please Write a Number"
}

function showButton(id) {
    document.getElementById(id).classList.add("btn-show")
    document.getElementById(id).classList.remove("btn-hide")
}
function hideButton(id) {
    document.getElementById(id).classList.add("btn-hide")
    document.getElementById(id).classList.remove("btn-show")
}