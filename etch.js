let cells = document.querySelectorAll('.cell');

cells.forEach( el => el.addEventListener('mouseover', ev => {
    ev.target.style.cssText = 'background-color : black';
}))
