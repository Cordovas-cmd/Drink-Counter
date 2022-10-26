const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remainder = document.getElementById('remaining')

smallCups.forEach((cup, index) => {

    cup.addEventListener('click', ( )=> highlightCups(index))
    console.log(index)
})

function highlightCups(index) {
    if(smallCups[index].classList.contains('full') && 
    /*
    if the next index doesn't contain full class toggle on and off by
    decrementing current index by 1
     */ 
    !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }
    /*
    A for each loop to loop through all the cups and add the class to 
    the appropriate cups.
     */ 
    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }
    }) 

        
    }