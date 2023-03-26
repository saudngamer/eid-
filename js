function saveCard() {
    let name = document.getElementById("name").value;
    let message = "عيد سعيد " + name + "!";
    let container = document.querySelector(".container");
    container.innerHTML = "<h1>" + message + "</h1>";
    container.style.backgroundColor = "#FFD700";
    container.style.color = "white";
    container.style.textAlign = "center";
}
