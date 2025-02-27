function calculate(operation) {
    let num1 = parseFloat(document.getElementById("inp1").value);
    let num2 = parseFloat(document.getElementById("inp2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 === 0 ? "Cannot divide by zero!" : num1 / num2;
                break;
            case '%':
                result = num2 === 0 ? "Cannot find modulus with zero!" : num1 % num2;
                break;
            default:
                result = "Invalid operation!";
        }
    }

    document.getElementById("result").innerText = "Result: " + result;


}

function handleCheckBox() {
    const colorPicker = document.getElementById('colorPicker');
    const resultDiv = document.getElementById('result');
    const checkbox = document.getElementById('colorCheck');

    if (checkbox.checked) {
        colorPicker.style.display = 'inline-block';
        applyColor();
    } else {
        colorPicker.style.display = 'none';
        resultDiv.style.backgroundColor = 'white';
        resultDiv.style.color = 'black';
    }
}

function toggleColorPicker() {
    const checkbox = document.getElementById('toggleCheckbox');
    const colorPicker = document.getElementById('colorPicker');
    const resultDiv = document.getElementById('result');

    if (checkbox.checked) {
        colorPicker.style.display = 'inline-block';
        applyColor();
    } else {
        colorPicker.style.display = 'none';
        resultDiv.style.backgroundColor = 'white';
        resultDiv.style.color = 'black';
    }
}

function applyColor() {
    const color = document.getElementById('colorPicker').value;
    const resultDiv = document.getElementById('result');
    resultDiv.style.color = color;
}

function toggleBorderOptions() {
    const borderOptions = document.getElementById('borderOptions');
    const checkbox = document.getElementById('borderCheck');

    if (checkbox.checked) {
        borderOptions.style.display = 'block';
        updateBorder();
    } else {
        borderOptions.style.display = 'none';
        document.getElementById('result').style.border = '2px solid red';
    }
}

function updateBorder() {
    const resultDiv = document.getElementById('result');
    const borderType = document.getElementById('borderType').value;
    const borderWidth = document.getElementById('borderWidth').value;
    const borderColor = document.getElementById('borderColor').value;

    // Apply border settings
    resultDiv.style.border = `${borderWidth}px ${borderType} ${borderColor}`;

    document.getElementById('borderWidthValue').innerText = `${borderWidth}px`;
}


const data = {
    "apple": "A sweet red or green fruit.",
    "apricot": "A small, soft fruit with an orange color.",
    "avocado": "A green fruit with a creamy texture.",
    "banana": "A long, curved yellow fruit.",
    "blackberry": "A small, juicy black fruit.",
    "blueberry": "A small, round, blue fruit.",
    "cherry": "A small, red, juicy fruit with a pit.",
    "cranberry": "A tart, red fruit often used in juices.",
    "grape": "A small, round fruit used in wine making.",
    "grapefruit": "A large, citrus fruit with a tangy taste.",
    "waghbhau": "Why clear karane wale masterji!",
};

function filterResults() {
    // setTimeout(() => {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (query === "") return;
    console.log(query);
    const selectdAta = Object.keys(data).filter(key => key.includes(query));

    selectdAta.forEach(key => {
        const p = document.createElement("p");
        p.innerHTML = key;
        p.onclick = () => showDescription(key);
        resultsContainer.appendChild(p);
    });
    // }, 10);
}

function showDescription(key) {
    const query = document.getElementById("searchBox")
    const descriptionBox = document.getElementById("descriptionBox");
    const description = document.getElementById("description");
    const resultsContainer = document.getElementById("results");
    query.value = key;
    description.textContent = data[key];
    const selectedP = document.createElement("p");
    selectedP.textContent = key;
    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(selectedP);
    descriptionBox.style.display = "block";
}

function hideDescription() {
    const descriptionBox = document.getElementById("descriptionBox");
    descriptionBox.style.display = "none";
}

function closeButton() {
    const descriptionBox = document.getElementById("descriptionBox");
    const resultsContainer = document.getElementById("results");
    const inputBox = document.getElementById("searchBox");
    inputBox.focus();
    resultsContainer.innerHTML="";
    descriptionBox.style.display = "none";
    const query = document.getElementById("searchBox")
    query.value = "";
}

function factorial(){
    let num = parseInt(document.getElementById("input").value)
    fact = 1
    for(let i=1;i<=num;i++){
        fact = fact*i
    }
    document.getElementById("result2").innerHTML="The factorial of num is "+fact;
}


function PrimeOrNot(){
    let num = parseInt(document.getElementById("input").value)

    if (isNaN(num) || num <= 0) {
        document.getElementById("result2").innerHTML = "Please enter a valid positive number.";
    return;
    }

    if (num === 1) {
        document.getElementById("result2").innerHTML = "1 is neither prime nor composite.";
        return;
    }
    let isPrime = true;
    for (let i =2;i <= num / 2;i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("result2").innerHTML="The factorial of num is Prime";
    } else {
        document.getElementById("result2").innerHTML="The factorial of num is not prime";
    }

}
document.addEventListener("DOMContentLoaded",function(){document.getElementById("buttonID").addEventListener("click",function(){
    let num = parseInt(document.getElementById("input").value)
    fact = 1
    for(let i=1;i<=num;i++){
        fact = fact*i
    }
    document.getElementById("result").innerHTML="The factorial of num is "+fact;
})
})
document.addEventListener("DOMContentLoaded",function(){
document.getElementById("button2").addEventListener("mouseover",function(){
    inputelement =document.getElementById("pass")
    inputelement.type="text";
    button2.innerHTML = "hide"

})
})
document.addEventListener("DOMContentLoaded",function(){
document.getElementById("button2").addEventListener("mouseout",function(){
    inputelement =document.getElementById("pass")
    inputelement.type="password"
    button2.innerHTML = "show"

})
})