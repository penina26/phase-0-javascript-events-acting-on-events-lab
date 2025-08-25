// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left) || 0;

    // Decrease the 'left' value to move the element to the left
    dodger.style.left = (currentLeft - 15) + 'px';
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left) || 0;

    // Increase the 'left' value to move the element to the right
    dodger.style.left = (currentLeft + 15) + 'px';
}
