const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const form = document.getElementById("form");
const pizzasize = document.getElementById("pizza size");
const pizzatoppings = document.getElementById("pizza toppings");
const errorElement = document.getElementById("error");
form.addEventListener("submit", (e) => {
    let message = [];
    if (fname.value === "" || fname.value == null) {
        message.push("First name is required");
    }
    e.preventDefault();

});
{
  if (lname.value === "" || lname.value == null) {
    message.push("Last name is required");
  }  
}

{
    if (pizzasize.value === "" || pizzasize.value == null) {
        message.push("Pizza size is required");
    }
}
{
    if (pizzatoppings.value === "" || pizzatoppings.value == null) {
        message.push("Pizza toppings are required");
    }
}
{
    if (message.length > 0) {
        e.preventDefault();
        errorElement.innerText = message.join(", ");
    } else {
        alert("Order placed successfully!");
    }
}








