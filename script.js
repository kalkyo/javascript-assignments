
function heeHaw()
{
    let number = document.getElementById("number").value;

    document.getElementById("message").innerText = "";
    document.getElementById("err-number").innerHTML = "";


    if (number < 0 || isNaN(number)) {
        text = "Please enter a positive integer";
        document.getElementById("err-number").innerHTML = text;
    }

    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // document.write("Hee Haw!" + "\n"); //This prints the values that you stored in the array
            document.getElementById("message").innerText += ("Hee Haw" + "\n");
        } else if (i % 3 === 0) {
            // document.write("Hee!" + "\n"); //This prints the values that you stored in the array
            document.getElementById("message").innerText += ("Hee!" + "\n");
        } else if (i % 5 === 0) {
            // document.write("Haw!" + "\n"); //This prints the values that you stored in the array
            document.getElementById("message").innerText += ("Haw!" + "\n");

        } else {
            // document.write([i] + "\n"); //This prints the values that you stored in the array
            document.getElementById("message").innerText += ([i] + "\n");
        }
    }
}