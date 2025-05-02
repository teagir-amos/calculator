const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");
const darkmode = document.querySelector("#darkmode");
const lightmode = document.querySelector("#lightmode");

//Theme Variations//

function darkMode() {
    const moonIcon = document.querySelector("#moon");
    const sunIcon = document.querySelector("#sun");
    const darkmode = document.querySelector("#darkmode");
    const lightmode = document.querySelector("#lightmode");

    moonIcon.addEventListener("click", () => {
        document.body.classList.add("dark");
        moonIcon.style.display = "flex";
        sunIcon.style.display = "flex";
        darkmode.style.display = "flex";
        lightmode.style.display = "none"
    });
};

darkMode();

function lightMode() {
    const moonIcon = document.querySelector("#moon");
    const sunIcon = document.querySelector("#sun");
    const darkmode = document.querySelector("#darkmode");
    const lightmode = document.querySelector("#lightmode");

    sunIcon.addEventListener("click", () => {
        document.body.classList.remove("dark");
        sunIcon.style.display = "flex";
        moonIcon.style.display = "block";
        darkmode.style.display = "none";
        lightmode.style.display = "flex";
    });
};

lightMode();

const Occurrence = document.querySelector("#occurrence");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const subtract = document.querySelector("#subtract");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const add = document.querySelector("#add");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const equals = document.querySelector("#equals");
const percent = document.querySelector("#percent");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");

//Didplaying digits on the occurence display box
function displayDigits() {
    const Occurrence = document.querySelector("#occurrence");
    console.log(Occurrence.innerHTML);
    const seven = document.querySelector("#seven");
    seven.addEventListener("click", function () {
        const seven = document.querySelector("#seven").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += seven;
        let displayClean = displayInput.replace(/\s+/g, ''); //Removing the white spaces.
        document.getElementById("occurrence").innerHTML = displayClean;
    });

    const eight = document.querySelector("#eight");
    eight.addEventListener("click", function () {
        const eight = document.querySelector("#eight").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += eight;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    })

    const nine = document.querySelector("#nine");
    nine.addEventListener("click", function () {
        const nine = document.querySelector("#nine").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += nine;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });

    const four = document.querySelector("#four");
    four.addEventListener("click", function () {
        const four = document.querySelector("#four").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += four;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const five = document.querySelector("#five");
    five.addEventListener("click", function () {
        const five = document.querySelector("#five").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += five;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const six = document.querySelector("#six");
    six.addEventListener("click", function () {
        const six = document.querySelector("#six").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += six;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const one = document.querySelector("#one");
    one.addEventListener("click", function () {
        const one = document.querySelector("#one").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += one;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const two = document.querySelector("#two");
    two.addEventListener("click", function () {
        const two = document.querySelector("#two").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += two;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const three = document.querySelector("#three");
    three.addEventListener("click", function () {
        const three = document.querySelector("#three").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += three;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const zero = document.querySelector("#zero");
    zero.addEventListener("click", function () {
        const zero = document.querySelector("#zero").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += zero;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
    const decimal = document.querySelector("#decimal");
    decimal.addEventListener("click", function () {
        const decimal = document.querySelector("#decimal").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += decimal;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    });
}

displayDigits();

function Clear(params) {
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", function () {
        document.getElementById("occurrence").innerHTML = "";
        document.getElementById("result").innerHTML = "";
    });
}

Clear();

function Sum() {
    const add = document.querySelector("#add");
    add.addEventListener("click", function () {
        const add = document.querySelector("#add").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += add;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    })
}

Sum();

function Minus(params) {
    const subtract = document.querySelector("#subtract");
    subtract.addEventListener("click", function () {
        const subtract = document.querySelector("#subtract").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += subtract;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    })
}

Minus()

function Multiply(params) {
    const multiply = document.querySelector("#times");
    multiply.addEventListener("click", function () {
        const multiply = document.querySelector("#times").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += multiply;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    })
}

Multiply();

function Partititon() {
    const divide = document.querySelector("#divide");
    divide.addEventListener("click", function () {
        const divide = document.querySelector("#divide").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += divide;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    })
}

Partititon();

function propotion() {
    const percent = document.querySelector("#percent");
    percent.addEventListener("click", function () {
        const percent = document.querySelector("#percent").innerHTML;
        let displayInput = document.getElementById("occurrence").innerHTML += percent;
        let displayClean = displayInput.replace(/\s+/g, '');
        document.getElementById("occurrence").innerHTML = displayClean;
    })
}

propotion();

function clearDigit() {
    const clearone = document.querySelector("#lightmode");
    console.log(clearone);
    clearone.addEventListener("click", function () {
        let displayInput = document.getElementById("occurrence").innerHTML;
        let displayClean = displayInput.slice(0, -1); //using slice to remove the last character. -1 deletes the last character
        document.getElementById("occurrence").innerHTML = displayClean;
    });

    const cleartwo = document.querySelector("#darkmode");
    console.log(cleartwo);
    cleartwo.addEventListener("click", function () {
        let displayInput = document.getElementById("occurrence").innerHTML;
        let displayClean = displayInput.slice(0, -1); //using slice to remove the last character. -1 deletes the last character
        document.getElementById("occurrence").innerHTML = displayClean;
    })
};

clearDigit();

function Calculate() {
    const equals = document.querySelector("#equals");
    const results = document.querySelector("#result");
    const Occurrence = document.querySelector("#occurrence").innerHTML;
    equals.addEventListener("click", function () {
        let displayInput = document.getElementById("occurrence").innerHTML; //getting the value of the occurrence display box.
        console.log(displayInput)
        let valueEvaluate = eval(displayInput);//using eval to evaluate the expression.
        console.log(valueEvaluate);
        document.getElementById("result").innerHTML = valueEvaluate; //displaying the result in the result display box.
        document.getElementById("occurrence").innerHTML = displayInput; // showing the values being evaluated in the occurrence box

    });
}

Calculate();

