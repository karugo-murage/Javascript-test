
function result() {
    var score=0
        if (document.getElementById('answer1').checked){
                score++;
        }
        if (document.getElementById('answer2').checked){
                score++;
            }
        if (document.getElementById('answer3').checked){
                score++;
        }
        if (document.getElementById('answer4').checked){
                score++;
        }
        if (document.getElementById('answer5').checked){
                score++;
        }
        if (document.getElementById('answer6').checked){
                score++;
        }
        if (document.getElementById('answer7').checked){
                score++;
        }
        if (document.getElementById('answer8').checked){
                score++;
        }
       
            alert("Your scored" + score +"out of 8");
}
