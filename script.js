let numberA = "";
let numberB = "";
let sign = "";
let endProgram = false;

const digit = ["0", "1", "2", "3","4", "5", "6", "7", "8" , "9", "."];
const action = ["+", "-" , "/", "%", "*"];

const out = document.querySelector(".calculator__display p");

function clearAll() {
    numberA = "";
    numberB = "";
    sign = "";
    endProgram = false;
    out.textContent = 0;
}
console.log("test1");
document.querySelector('.calculator__button_c').onclick = clearAll;
console.log("test2");
document.querySelector(".calculator__buttons").onclick = (event) => {
    if(!event.target.classList.contains("calculator__button")) return;
    if(event.target.classList.contains("calculator__button_c")) return;

    out.textContent = "";
    const key = event.target.textContent;
    let flag = 0;
    if(digit.includes(key)) {
        if (numberB === '' && sign === "") {
        numberA+=key;
        out.textContent = numberA;
        } else if(numberA !== '' && numberB !== '' && endProgram) {
            numberB = key;
            endProgram = false;
            out.textContent = numberB;
        } else {
            numberB +=key;
            out.textContent = numberB;
        }
        console.log(numberA, sign,  numberB);
        return;
    }
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(numberA, numberB, sign);
        return;
    }
    if(key === 'D') {
        if (numberB === '' && sign === "") {
        numberA--;
        out.textContent = numberA;
        } else {
            numberB--;
            out.textContent = numberB;
        }
        console.log(numberA, sign,  numberB);
        return;
    }
    if (key === '=') {
        if (numberB == '') {
            numberB = numberA;
        }
        switch (sign) {
            case "+":
                numberA = (+numberA) + (+numberB);
                break;
            case "-":
                numberA = (+numberA) - (+numberB);
                break;
            case "*":
                numberA = (+numberA) * (+numberB);
                break;
            case "/":
                if (numberB === "0") {
                    alert("Cannot divide by zero");
                    break;
                }
                numberA = (+numberA) / (+numberB);
                break;
            case '%':
               numberA = +numberA % +numberB;
            default:
                break;
        }
        endProgram = true;
        out.textContent = numberA;
        console.log(`= ${numberA}`);
    }
}