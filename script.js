let textBox = document.getElementById("textBox");
let charCounter = document.getElementById('charCounter');
let message = document.getElementById("message");
textBox.addEventListener("input", function () {
    charLength = textBox.value.length;
    charCounter.innerText = charLength;
    if (charLength == 280) {
        charCounter.innerText = `${charLength} / 280 🚨 Max Limit!`;
        charCounter.style.color = "red";
        charCounter.style.fontWeight = "bold";
    } else {
        charCounter.style.color = "black";
    }
}
);