    // Calculate Nav Left Position
    let index = 4;

    const calcNavPos = () => {
        const navWidth = document.querySelector('.list').clientWidth;
        const leftNavPosition = navWidth / 10 * index;
        let middleNavWidth = navWidth / 10 * 2;
        middleNavWidth = middleNavWidth > 72 ? leftNavPosition + (middleNavWidth - 67) / 2 : leftNavPosition;
        document.querySelector('.indicator').style.left = middleNavWidth + 'px';
    };

    window.addEventListener('resize', () => calcNavPos());
    calcNavPos();

    const navClick = document.querySelectorAll('.col-span-2 a');
    navClick.forEach((click, i) => {
        click.addEventListener('click', () => {
            index = i * 2;
            calcNavPos();  
            navClick.forEach(click => click.classList.remove('active'));
            click.classList.add('active');
        })
    });