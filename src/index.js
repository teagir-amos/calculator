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
        document.getElementById("ScientificResults").innerHTML = "";
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
        let displayInput = document.getElementById("occurrence").innerHTML; //getting the value of the occurrence display box
        let valueEvaluate = eval(displayInput);//using eval to evaluate the expression.
        //console.log(valueEvaluate);
        document.getElementById("result").innerHTML = valueEvaluate; //displaying the result in the result display box.
        document.getElementById("occurrence").innerHTML = displayInput;// showing the values being evaluated in the occurrence box
    });
}

Calculate();

function proportion() {
    document.getElementById("percent").addEventListener("click", function () {
        document.getElementById("percent").style.backgroundColor = "#770737";
        document.getElementById("percent").style.color = "#fff";
        document.getElementById("percent").style.fontWeight = "bold";

        setTimeout(function () { //Onclick, change the background color to the desired color for two seconds.
            document.getElementById("percent").style.backgroundColor = "";// Reset to default
            document.getElementById("percent").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let percentResults = (displayInput / 100);
        console.log(percentResults);
        document.getElementById("ScientificResults").innerHTML = percentResults;
    });
};

proportion();


function logCalc() {
    const log = 10;
    document.getElementById("logBtn").addEventListener("click", function () {
        document.getElementById("logBtn").style.backgroundColor = "#770737";
        document.getElementById("logBtn").style.color = "#fff";
        document.getElementById("logBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("logBtn").style.backgroundColor = "";
            document.getElementById("logBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let logResults = (Math.log10(displayInput));
        document.getElementById("ScientificResults").innerHTML = logResults;
    })
}

logCalc()

function lncalc() {
    document.getElementById("lnBtn").addEventListener("click", function () {
        document.getElementById("lnBtn").style.backgroundColor = "#770737";
        document.getElementById("lnBtn").style.color = "#fff";
        document.getElementById("lnBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("lnBtn").style.backgroundColor = "";
            document.getElementById("lnBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let lnResults = Math.log(displayInput);
        console.log(lnResults);
        document.getElementById("ScientificResults").innerHTML = lnResults;
    })


};

lncalc();


function factorial() {
    document.getElementById("factorialBtn").addEventListener("click", function () {
        document.getElementById("factorialBtn").style.backgroundColor = "#770737";
        document.getElementById("factorialBtn").style.color = "#fff";
        document.getElementById("factorialBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("factorialBtn").style.backgroundColor = "";
            document.getElementById("factorialBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let factorialResults = 1;
        for (let i = 1; i <= displayInput; i++) {
            factorialResults *= i;
        }
        console.log(factorialResults);
        document.getElementById("ScientificResults").innerHTML = factorialResults;
    });
}

factorial()

function pie() {
    const pie = 3.1415926535897;
    document.getElementById("pieBtn").addEventListener("click", function () {
        document.getElementById("pieBtn").style.backgroundColor = "#770737";
        document.getElementById("pieBtn").style.color = "#fff";
        document.getElementById("pieBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("pieBtn").style.backgroundColor = "";
            document.getElementById("pieBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let pieResults = (pie * displayInput);
        console.log(pieResults);
        document.getElementById("ScientificResults").innerHTML = pieResults;
    });
}

pie()


function exponent() {
    const exp = 2.718281828459045;
    document.getElementById("expoBtn").addEventListener("click", function () {
        document.getElementById("expoBtn").style.backgroundColor = "#770737";
        document.getElementById("expoBtn").style.color = "#fff";
        document.getElementById("expoBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("expoBtn").style.backgroundColor = "";
            document.getElementById("expoBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let expResults = (exp * (displayInput));
        console.log(expResults);
        document.getElementById("ScientificResults").innerHTML = expResults;
    });

}

exponent()

function power() {
    document.getElementById("powerBtn").addEventListener("click", function () {
        document.getElementById("powerBtn").style.backgroundColor = "#770737";
        document.getElementById("powerBtn").style.color = "#fff";
        document.getElementById("powerBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("powerBtn").style.backgroundColor = "";
            document.getElementById("powerBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence").innerHTML;
        let powerResults = Math.pow(displayInput, 2);
        console.log(powerResults);
        document.getElementById("ScientificResults").innerHTML = powerResults;
    });
};

power()

function bracket() {
    document.getElementById("bracketBtn").addEventListener("click", function () {
        document.getElementById("bracketBtn").style.backgroundColor = "#770737";
        document.getElementById("bracketBtn").style.color = "#fff";
        document.getElementById("bracketBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("bracketBtn").style.backgroundColor = "";
            document.getElementById("bracketBtn").style.color = "#915f6d";
        }, 2000);

        let displayInput = document.getElementById("occurrence");
        let displayInputValue = displayInput.innerHTML;
        let bracketResults = ("(" + displayInputValue + ")");
        console.log("Bracketed Expression:", bracketResults);
        let result = Function(`return ${bracketResults}`)();
        document.getElementById("ScientificResults").innerHTML = result;
        document.getElementById("occurrence").innerHTML = bracketResults;
    })
};

bracket()

function root(value) {
    document.getElementById("rootBtn").addEventListener("click", function () {
        document.getElementById("rootBtn").style.backgroundColor = "#770737";
        document.getElementById("rootBtn").style.color = "#fff";
        document.getElementById("rootBtn").style.fontWeight = "bold";

        setTimeout(function () {
            document.getElementById("rootBtn").style.backgroundColor = "";
            document.getElementById("rootBtn").style.color = "#915f6d";
        }, 2000);

        let displayroot = document.getElementById("occurrence").innerText;
        let rootResults = Math.sqrt(displayroot)
        console.log(rootResults)
        document.getElementById("ScientificResults").innerText = rootResults;

    });
}

root()











