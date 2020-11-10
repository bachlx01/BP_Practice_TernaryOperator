function excercise1 () {
    let a = prompt("a: ");
    let b = prompt("b: ");
    result = (a + b < 4) ? 'Below' : 'Over';
    alert(result);
}

function excercise2 () {
    let message = prompt("Input your possition: ");
    message == "Employee"? alert('Hello'): message == "Director"? alert("Greeting"): alert("No login");
}