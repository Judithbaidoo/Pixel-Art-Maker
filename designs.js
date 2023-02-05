const heightElement = document.getElementById('inputHeight');
const widthElement = document.getElementById('inputWidth');
const submitButton = document.getElementById('submitButton');
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');

// event listener for submit button

var submit = submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    table.innerHTML = '';
    const heightValue = heightElement.value;
    const widthValue = widthElement.value;

    // loop within loop to create a table row and data elements. 

    for (let x = 0; x < heightValue; x++) {
        const row = document.createElement("tr");
        for (let y = 0; y < widthValue; y++) {
            const data = document.createElement("td");

            // click event listener on "data" variable to color backgrownd once clicked  

            var colorElement = data.addEventListener("click", function () {
                color.innerHTML = '';
                const colorValue = color.value;
                const dataBackground = data.style.backgroundColor = colorValue;

            });

            // append data to row to create grid      
            row.appendChild(data)
        }
        table.appendChild(row);

    }

});