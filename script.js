const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.style.color = 'red';
    btn.style.border = '2px solid red';
});

const animateBtn = document.querySelector('.animate-btn');

animateBtn.addEventListener('click', () => {
    animateBtn.style.color = 'red';
    animateBtn.style.border = '2px solid red';

    const timeline = gsap.timeline({ defaults: { duration: .15 }});

    timeline
        .to('.animate-btn', {x: '-50%'})
        .to('.animate-btn', {x: '75%'})
        .to('.animate-btn', {x: '-35%'})
        .to('.animate-btn', {x: '10%'});
})


