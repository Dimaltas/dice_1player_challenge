var sum =0
function rollTheDice() {
    const num1 = Math.floor(Math.random()*6)+1
    console.log(num1);
    const diceImage = "pictures/dice" + num1 +".png";

    document.querySelectorAll('img')[0].setAttribute('src',diceImage);
    
    sum = sum + num1;
    console.log(sum);
    
    document.querySelectorAll('p')[0].innerHTML = "The sum is "+sum;
    if(sum >20){
        document.querySelectorAll('p')[1].innerHTML = "Congratulations you won!";
        sum = 0;
    }else if(num1 == 1){
        document.querySelectorAll('p')[1].innerHTML = "You lose";
        sum = 0;
    }
}







// setTimeout(function () {                        //trying to make the animation (shake and then show)!!!!
//     const num1 = Math.floor(Math.random()*6)+1
//     const diceImage = "pictures/dice" + num1 +".png";
//     document.querySelectorAll('img')[0].setAttribute('src',diceImage);
// }, 0);

        