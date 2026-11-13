let colors = ["Red", "Yellow", "Green"];
let index = 0;

function changeLight() {
    console.log("Traffic Light:", colors[index]);
    index = (index + 1) % colors.length;
}

changeLight();
changeLight();
changeLight();
changeLight();
