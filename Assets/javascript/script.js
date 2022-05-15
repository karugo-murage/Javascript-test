
function results() {
    var totalMark=0
        if (document.getElementById('answer1').checked){
                totalMark++;
        }
        if (document.getElementById('answer2').checked){
                totalMark++;
            }
        if (document.getElementById('answer3').checked){
                totalMark++;
        }
        if (document.getElementById('answer4').checked){
                totalMark++;
        }
        if (document.getElementById('answer5').checked){
                totalMark+=2;
        }
        if (document.getElementById('answer6').checked){
                totalMark+=2;
        }
        if (document.getElementById('answer7').checked){
                totalMark+=2;
        }
        if (document.getElementById('answer8').checked){
                totalMark+=2;
        }
       
            alert("Your scored " + totalMark +" out of 12");
        if(totalMark<6){
                alert("You need to redo the test");
        }
        else if(totalMark>=6 && totalMark<9.6){
                alert("You fairly passed.");
        }
        else{
                alert("Excellent")
        }    
}
function procede(){
    alert("Confirm if you are ready to start the quiz now !");
}

