// task 1 a) //

function splitLines(text) {
    // Replace literal "\n" with actual newline characters
    let processedText = text.replace(/\\n/g, "\n");

    let lines = processedText.split("\n");

    // Remove empty line at the end if text ends with \n
    if (lines[lines.length - 1] === "") {
        lines.pop();
    }

    return lines;
}

function runSplit() {
    let text = document.getElementById("textInput").value;

    let result = splitLines(text);

    let list = document.getElementById("result");
    list.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
        let li = document.createElement("li");
        li.textContent = result[i];
        list.appendChild(li);
    }
}

// task 1b) //

function textToNumbers(array) {
    return array.map(Number);
}
    let textnumber = ["1.2", "-3.4", "5.6"];
    let numbers = textToNumbers(textnumber);
    console.log(numbers)

    let list = document.getElementById("numberlist");
    numbers.forEach(num => {
        let li = document.createElement("li");
        li.textContent = num;
        list.appendChild(li);
    });
