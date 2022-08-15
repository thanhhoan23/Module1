let view = document.getElementById('num') ;
function inputvalue(value) {
    view.value = view.value + value;
} 
function result() {
    view.value = eval(view.value);
}
function xoa() {
    view.value = "";
}
