let currentScreen = 1;
const correctFormula = {
    var1: "pizzas_sold",
    operator: "*",
    var2: "pizza_price"
};
const correctValues = {
    pizzas_sold: 50,
    pizza_price: 20
};

function nextScreen(screen) {
    document.getElementById(`screen${currentScreen}`).classList.remove('active');
    currentScreen = screen;
    document.getElementById(`screen${screen}`).classList.add('active');
}

function prevScreen(screen) {
    document.getElementById(`screen${currentScreen}`).classList.remove('active');
    currentScreen = screen;
    document.getElementById(`screen${screen}`).classList.add('active');
}

function checkFormula() {
    const selectedVar1 = document.getElementById('var1').value;
    const selectedOperator = document.getElementById('operator').value;
    const selectedVar2 = document.getElementById('var2').value;

    if (selectedVar1 === correctFormula.var1 && selectedOperator === correctFormula.operator && selectedVar2 === correctFormula.var2) {
        alert("Correct formula! Now, let's calculate.");
        document.getElementById('selectedOperator').innerText = selectedOperator;
        nextScreen(3);
    } else {
        alert("Incorrect formula. Please try again.");
    }
}

function checkCalculation() {
    const value1 = parseInt(document.getElementById('value1').value);
    const value2 = parseInt(document.getElementById('value2').value);
    const result = parseInt(document.getElementById('revenueResult').value);
    const correctResult = correctValues.pizzas_sold * correctValues.pizza_price;

    if (value1 === correctValues.pizzas_sold && value2 === correctValues.pizza_price && result === correctResult) {
        alert("Correct! The daily revenue is " + correctResult);
        nextScreen(4);
    } else {
        alert("Incorrect values or calculation. Try again.");
    }
}

