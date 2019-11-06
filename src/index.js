const canvas = document.querySelector("#my_canvas"),
  ctx = canvas.getContext("2d");

function DecartToDispalyCoordX(cartX) {
  return cartX + canvas.width / 2;
}

function DecartToDispalyCoorY(cartY) {
  return canvas.height / 2 - cartY;
}
