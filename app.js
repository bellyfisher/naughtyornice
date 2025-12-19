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

// add subtle selection animations and show inline result
document.addEventListener('DOMContentLoaded', function(){
    const selects = Array.from(document.querySelectorAll('select'));
    selects.forEach(s => {
        // initialize chosen state
        if(s.value) s.classList.add('chosen');
        s.addEventListener('change', () => {
            if(s.value) {
                s.classList.add('chosen');
            } else {
                s.classList.remove('chosen');
            }
        });
        s.addEventListener('focus', () => s.classList.add('chosen'));
        s.addEventListener('blur', () => { if(!s.value) s.classList.remove('chosen'); });
    });

    // replace alerts with inline result element
    window.checkNaughtyorNice = function(){
        const q1 = document.getElementById('q1').value
        const q2 = document.getElementById('q2').value
        const q3 = document.getElementById('q3').value
        const q4 = document.getElementById('q4').value
        const q5 = document.getElementById('q5').value

        const score = getPoints(q1) + getPoints(q2) + getPoints(q3) + getPoints(q4) + getPoints(q5)

        const resultEl = document.getElementById('result');
        const title = document.querySelector('.card-title');
        if(!resultEl) {
            // fallback to alert
            if (score > 2) alert('Yippee !! You are on the Nice list!')
            else alert('Hold on buddy.. that is not so nice..')
            return;
        }

        // clear previous
        resultEl.classList.remove('show','nice','naughty');
        title.classList.remove('pop');

        if (score > 2){
            resultEl.textContent = 'You are on the Nice list!';
            resultEl.classList.add('nice','show');
            // confetti for nice
            launchConfetti();
        } else {
            resultEl.textContent = "Hold on — that's not so nice yet";
            resultEl.classList.add('naughty','show');
        }

        // tiny title pop
        setTimeout(()=> title.classList.add('pop'), 20);

        // hide after a moment
        clearTimeout(window._naughtyNiceTimeout);
        window._naughtyNiceTimeout = setTimeout(()=>{
            resultEl.classList.remove('show');
            title.classList.remove('pop');
        }, 3600);
    };

});

/* Confetti launcher - simple, lightweight */
function launchConfetti(){
    const colors = ['#ff9ecb','#ffd6e8','#ffb3d2','#f28aa8','#f7b6ce','#ff8fb3'];
    const count = 22;
    const container = document.body;
    const width = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);

    for(let i=0;i<count;i++){
        const node = document.createElement('div');
        node.className = 'confetti';
        const size = 6 + Math.floor(Math.random()*12);
        node.style.width = size + 'px';
        node.style.height = Math.floor(size * 1.25) + 'px';
        node.style.background = colors[Math.floor(Math.random()*colors.length)];
        const left = Math.floor(Math.random()*width);
        node.style.left = left + 'px';
        node.style.top = (-20 - Math.random()*80) + 'px';
        node.style.opacity = (0.8 + Math.random()*0.3).toString();
        node.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
        node.style.animationDuration = (1100 + Math.random()*700) + 'ms';
        container.appendChild(node);
        // remove after animation
        (function(n){ setTimeout(()=>{ n.remove(); }, 2200); })(node);
    }
}