function getPoints(value) {
    switch(value) {
        case 'nice':
            return 1

        case 'naughty':
            return -1

        default:
            return -1
    }
}

function checkNaughtyorNice() {
    const q1 = document.getElementById('q1').value
    const q2 = document.getElementById('q2').value
    const q3 = document.getElementById('q3').value
    const q4 = document.getElementById('q4').value
    const q5 = document.getElementById('q5').value

const score = getPoints(q1) + getPoints(q2) + getPoints(q3) + getPoints(q4) + getPoints(q5)

if (score > 2.5){
    alert('Yippee !! You are on the Nice list!')
} else {
    alert('Hold on buddy.. that is not so nice..')
}


}