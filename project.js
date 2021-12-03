// HELPER ====
let br = document.createElement("BR");
//============

// HEADER ==================================================
let headerElement = document.createElement("HEADER");
headerElement.innerHTML = "<h1>MUSICALY</h1>";
document.body.appendChild(headerElement);

// SEARCH ==================================================
let searchElement = document.createElement("INPUT");
searchElement.setAttribute("type", "search");
searchElement.setAttribute("placeholder", "Search name...");
// searchElement.setAttribute("keyup", "searchValue(this)");
searchElement.className = "search-box";
searchElement.id = "search-box";

let searchButton = document.createElement("button");
searchButton.id = "search-button";
searchButton.innerHTML = "Search";

headerElement.appendChild(searchElement);
headerElement.appendChild(searchButton);

// BUTTONS =================================================
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
cartCounter.innerHTML = "0";

headerElement.appendChild(br);
headerElement.appendChild(loginButton);
headerElement.appendChild(registerButton);
headerElement.appendChild(cartButton);
headerElement.appendChild(cartCounter);
//==========================================================
//==========================================================
//==========================================================

// BODY ====================================================
let sideBar = document.createElement("SECTION");
let main = sideBar.cloneNode();

sideBar.id = "side-bar";
main.id = "main-content";

sideBar.innerHTML =
  "<h2>Category</h2><br/><ul><li>Classical</li><li>Baroque</li><li>Romantic</li><li>Late 19th</li></ul>";

document.body.appendChild(sideBar);
document.body.appendChild(main);

// CONTENT =================================================
let returnHomeLink = document.createElement("a");
let mainStatus = document.createElement("h2");

returnHomeLink.id = "return-home-link";
mainStatus.id = "main-status";

returnHomeLink.innerHTML = "Home";
mainStatus.innerHTML = "ALL Music";

returnHomeLink.setAttribute("onclick", "return_home()");
return_home = () => {
  window.location.href = "index.html";
};

main.appendChild(returnHomeLink);
main.appendChild(mainStatus);

// MUSIC GRID ==============================================
let musicGrid = document.createElement("div");
musicGrid.className = "music-grid";
musicGrid.id = "music-grid";

//==========================================================
