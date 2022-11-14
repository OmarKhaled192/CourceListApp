  // Class Cource Represent a Cource
  class Cource {
    constructor(title, price, instructor, description) {
      this.title = title;
      this.price = price;
      this.instructor = instructor;
      this.description = description;
    }
  }

// Class Represent Cource Ui
class courceUi {
  static displayCources() {
    // Dummy Cources 
    const cources = [
      {title : "Html5 cource", price : 500, instructor:"Omar Khaled", description : "this is my First cource"},
      {title : "Css3 cource", price : 600, instructor:"Adel Ahmed", description : "this is my Second cource"},
      {title : "js cource", price : 700, instructor:"Mohamed Nasser", description : "this is my Third cource"},
      {title : "Node.js cource", price : 750, instructor:"Abanoub atef", description : "this is my Fourth cource"}
    ]
    //adding Dummy Cources in table
    for(let cource of cources) {
      courceUi.addCourcetoTable(cource);
    }
  }
  static addCourcetoTable(cource) {
    const tbody = document.querySelector("#Cources-list"),
          row = document.createElement('tr');
        row.innerHTML = `
          <td>${cource.title}</td>
          <td>${cource.price}</td>
          <td>${cource.instructor}</td>
          <td>${cource.description}</td>
          <td >
            <a href="#" class = "btn btn-outline-danger text-center btn-md delete">Delete</a>
          </td>
        `;
        tbody.appendChild(row);
  }
  // Show Messages 
  static showMessage(textMesssage, className) {
    const div = document.createElement("div"),
          section = document.querySelector(".cources-section"),
          form = document.getElementById("courses-form");
    div.className = `alert alert-${className}`;
    // append text into div
    div.appendChild(document.createTextNode(textMesssage));
    // insert div between section & form
    section.insertBefore(div, form);
    // Remove message after 4s
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 4000)
  }

  // Clear All inputs 
  static clearInputs() {
    document.querySelector("#title").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#instructor").value = "";
    document.querySelector("#description").value = "";
  }

  // Delete Row
  static deleteRow(element) {
    if(element.classList.contains('delete'))
    {
      element.parentElement.parentElement.remove();
    }
  }
}

//display all cources 
document.addEventListener('DOMContentLoaded', courceUi.displayCources);

// Add new Cource 
document.querySelector('#courses-form').addEventListener('submit', (event) => {
  // prevent default submit
  event.preventDefault();
  
  // Get Data From my form
  const title = document.querySelector("#title").value,
    price = document.querySelector("#price").value,
    instructor = document.querySelector("#instructor").value,
    description = document.querySelector("#description").value;
    //handle errors
    if(title == "" || price =="" || instructor == "" || description =="") {
      courceUi.showMessage("All field required", "danger");
    } 
    else if(price < 500 ) {
      courceUi.showMessage("Price must be greater than or equal 500 ", "danger");
    }
    else {
    //Take an Instance from Cource
    let cource = new Cource(title, price, instructor, description);
    // Add Cource into table 
    courceUi.addCourcetoTable(cource);
    // success Message
    courceUi.showMessage("Cource Add Successfully", "success");

    // Clear All Inputs
    courceUi.clearInputs();
    }
})

// delete event 
document.querySelector('#Cources-list').addEventListener('click', (event) => {
  // target my element when you click on it
  courceUi.deleteRow(event.target);
})

