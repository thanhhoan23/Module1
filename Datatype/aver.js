
function showSum() {
    let physical = parseInt(document.getElementById('physical').value);
    let chemistry = parseInt(document.getElementById('chemistry').value);
    let biological = parseInt(document.getElementById('biological').value);
    let sum = physical + chemistry + biological;
    document.getElementById("sum").innerHTML = sum;
    console.log(sum);
}


