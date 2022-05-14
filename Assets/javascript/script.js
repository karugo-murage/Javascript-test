
function result() {
    var mark=0
        if (document.getElementById('answer1').checked){
                mark++;
        }
        if (document.getElementById('answer2').checked){
                mark++;
            }
        if (document.getElementById('answer3').checked){
                mark++;
        }
        if (document.getElementById('answer4').checked){
                mark++;
        }
        if (document.getElementById('answer5').checked){
                mark+=2;
        }
        if (document.getElementById('answer6').checked){
                mark+=2;
        }
        if (document.getElementById('answer7').checked){
                mark+=2;
        }
        if (document.getElementById('answer8').checked){
                mark+=2;
        }
       
            alert("Your scored " + mark +" out of 12");
        if(mark<6){
                alert("You need to redo the test");
        }
        else if(mark>=6 && mark<9.6){
                alert("You fairly passed.");
        }
        else{
                alert("Excellent")
        }    
}
function success(){
    alert("Confirm if you are ready to start the quiz now !");
}

