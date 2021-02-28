// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
    let resultado = (dollar / oneEuroIs.USD)  * oneEuroIs.JPY;
    return resultado;
};

function fromEuroToDollar(euro){
    let resultado = (euro * oneEuroIs.USD);
    return resultado;
};

function fromYenToPound(yenes){
    let resultado = (yenes / oneEuroIs.JPY)* oneEuroIs.GBP;
    return resultado;
};
console.log(fromDollarToYen(100) + " JPY");
console.log(fromEuroToDollar(1)+ " USD");
console.log(fromYenToPound(1)+ " GBP");

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};