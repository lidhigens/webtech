function toFarenheit(temp)
{
    var newTemp;
    newTemp=((temp*9)/5)+32;
    return newTemp;
}

function toCelsius(temp)
{
    var newTemp;
    newTemp=(temp-32)*(5/9);
    return newTemp;
}

var tempToday = 82;
var tempInCelsius = Math.round(toCelsius(tempToday));

var message = "Today's temperature is "+tempToday+"F, which is "+tempInCelsius+"C.";
console.log(message);
