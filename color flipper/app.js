const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const changeColorBtn = document.getElementById('btn');
const colorSpan = document.querySelector('.color')

changeColorBtn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    colorSpan.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}