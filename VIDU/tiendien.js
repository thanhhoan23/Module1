let number = Number(document.getElementById('number').value);

if (0 < number <= 50) {
    document.getElementById('money').innerHTML = number * 1678;
} else if (number <=100) {
    document.getElementById('money').innerHTML = (number - 50)*1734 + (50*1678 );
} else if (number <=200){
    document.getElementById('money').innerHTML = (number - 100)*2014 + (50*1678) + (50*11734);

}
