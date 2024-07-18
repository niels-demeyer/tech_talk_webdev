// Handle form submission
document
  .getElementById("tableForm")
  .addEventListener("submit", function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the input values
    const tag = document.getElementById("tagInput").value;
    const desc = document.getElementById("descInput").value;

    // Create a new row and cells
    const row = document.createElement("tr");
    const tagCell = document.createElement("td");
    const descCell = document.createElement("td");
    const removeCell = document.createElement("td");

    // Add text to the cells
    tagCell.textContent = tag;
    descCell.textContent = desc;

    // Add a remove button to the remove cell
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      // Remove the row when the button is clicked
      row.parentNode.removeChild(row);
    });
    removeCell.appendChild(removeButton);

    // Append the cells to the row
    row.appendChild(tagCell);
    row.appendChild(descCell);
    row.appendChild(removeCell);

    // Append the row to the table body
    document.querySelector("tbody").appendChild(row);

    // Clear the input fields
    document.getElementById("tagInput").value = "";
    document.getElementById("descInput").value = "";
  });
