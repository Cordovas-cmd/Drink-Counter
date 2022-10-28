const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remainder = document.getElementById('remaining')


updateLargeCup(); 
smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
    console.log(index)
})

function highlightCups(index) {
    if (smallCups[index].classList.contains('full') &&
        /* if the next index doesn't contain full class toggle on and off by decrementing current index by 1
         */
        !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    /*
    A for each loop to loop through all the cups and add the class to the appropriate cups.
     */
    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }
    })
    updateLargeCup()
}

function updateLargeCup() {
    // furst see how many full cups there are
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        /* use the total height to take fullCups / by totalcups(100%) and multiply by 330px */
        percentage.style.height = `${fullCups/ totalCups * 330}px`
        // update percentage
        percentage.innerText = `${fullCups/ totalCups * 100}%`
    }

    // if no cups remain hide 'remaining'
    if(fullCups === totalCups) {
        remainder.style.visibility = 'hidden'
        remainder.style.height = 0
    } else {
        remainder.style.visibility = 'visible'
        // show remaining liters
        liters.innerText = `${2 -(250 * fullCups / 1000)}`
    }
}
    // console.log(totalCups)
    // console.log(fullCups)

    /* TODO LIST---------------------------------
        1. Need to add some function to convert and select diff units of measurement.
        2. use this logic to apply to different areas such as sodium, fat, carbs, calories etc.
        3. style different measurments types of tracking */
        // want to update this soon