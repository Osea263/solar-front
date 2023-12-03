
// // Get the dial and gauge_value elements
var dial = document.querySelector(".dial .inner");
var gauge_value = document.querySelector(".gauge .value");

function rotateDial() {
    var deg = 0;
    var value = Math.round(Math.random() * 100);
    deg = (value * 177.5) / 100;

    // Update the gauge value
    gauge_value.innerHTML = value + "%";

    // Apply the rotation to the dial
    dial.style.msTransform = 'rotate(' + deg + 'deg)';
    dial.style.mozTransform = 'rotate(' + deg + 'deg)';
    dial.style.oTransform = 'rotate(' + deg + 'deg)';
    dial.style.webkitTransform = 'rotate(' + deg + 'deg)';
}

// Call rotateDial every 2000 milliseconds (2 seconds)
setInterval(rotateDial, 2000);