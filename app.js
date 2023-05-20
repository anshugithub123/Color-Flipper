//making function
const getColor = () => {
    //hex code
    //also apply math function to divide from particular numer
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color_code").innerText = randomCode;

    //making the clipbord to store the color code 
    navigator.clipboard.writeText(randomCode);
}

//this is our event call 
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//this our initial call
getColor();