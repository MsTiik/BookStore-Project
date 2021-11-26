let headerElement = document.createElement("HEADER");
headerElement.innerHTML = "<h1>MUSICALY</h1>";
document.body.appendChild(headerElement);

let searchElement = document.createElement("INPUT");
searchElement.setAttribute("type", "search");
searchElement.setAttribute("placeholder", "Search name...");
// searchElement.setAttribute("keyup", "searchValue(this)");
searchElement.className = "search-box";
searchElement.id = "search-box";

headerElement.appendChild(searchElement);

let br = document.createElement("BR");

let loginButton = document.createElement("button");
let registerButton = loginButton.cloneNode();
let cartButton = loginButton.cloneNode();
let cartCounter = document.createElement("span");

loginButton.id = "login-button";
registerButton.id = "register-button";
cartButton.id = "cart-button";
cartCounter.id = "cart-counter";

loginButton.innerHTML = "Login";
registerButton.innerHTML = "Register";
cartButton.innerHTML = "Cart";

headerElement.appendChild(br);
headerElement.appendChild(loginButton);
headerElement.appendChild(registerButton);
headerElement.appendChild(cartButton);
headerElement.appendChild(cartCounter);
