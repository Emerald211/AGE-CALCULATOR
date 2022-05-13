
function oldLeft(){
    
    const age = document.getElementById('age').value;
    let ageVAlue = Number(age);
        var weeks = 52;
        var weeksLeft = Math.floor((weeks* 120) - (weeks * ageVAlue))
        var days = 365;
        var daysLeft = Math.floor((days * 120) - (days * ageVAlue))
        var years = 120;
        var yearsLeft = Math.floor(years - ageVAlue);
        const box = document.getElementById("cal");
        const result = document.createElement('h5');
        result.style.color = "white"

        if (age === "" ) {
            alert ("pls fill in your age pls")
        } else {
            box.appendChild(result);
            result.innerHTML = "You have " + yearsLeft + "years  " + weeksLeft + "weeks  " + daysLeft + "days left";
            console.log(result);
            
        }
    
        

    // alert("You have " + yearsLeft + "years  " + weeksLeft + "weeks  " + daysLeft + "days")
}

// oldLeft();





// function oldLeft(){
//     const age = prompt("How old are you");
//     let ageVAlue = Number(age);
//         var weeks = 52;
//         var weeksLeft = Math.floor((weeks*90) - (weeks * ageVAlue))
//         var days = 365;
//         var daysLeft = Math.floor((days * 90) - (days * ageVAlue))
//         var years = 90;
//         var yearsLeft = Math.floor(years - ageVAlue)
//     alert("You have " + yearsLeft + "years  " + weeksLeft + "weeks  " + daysLeft + "days")
// }

// oldLeft();