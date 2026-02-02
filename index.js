// Select form and table body

let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

// Add event listener to form

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect values

  let name = document.querySelector("#name").value;
  let docID = document.querySelector("#docID").value;
  let dept = document.querySelector("#dept").value;
  let exp = document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mbl = document.querySelector("#mbl").value;

  // Create table row

  let tr = document.createElement("tr");

  // Create table cells
  
  let td1 = document.createElement("td");
  td1.innerText = name;

  let td2 = document.createElement("td");
  td2.innerText = docID;

  let td3 = document.createElement("td");
  td3.innerText = dept;

  let td4 = document.createElement("td");
  td4.innerText = exp;

  let td5 = document.createElement("td");
  td5.innerText = email;

  let td6 = document.createElement("td");
  td6.innerText = mbl;

  // Role based on experience
  let td7 = document.createElement("td");
  if (exp > 5) {
    td7.innerText = "Senior";
  } else if (exp >= 2 && exp <= 5) {
    td7.innerText = "Junior";
  } else {
    td7.innerText = "Trainee";
  }

  // Delete button
  let td8 = document.createElement("td");
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.style.backgroundColor = "red";
  delBtn.style.color = "white";
  delBtn.addEventListener("click", function () {
    tr.remove();
  });
  td8.appendChild(delBtn);

  // Append all cells to row
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

  // Append row to table body
  tbody.appendChild(tr);

  // Reset form
  form.reset();
});













