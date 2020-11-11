const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.height = canvas.width / 2

function createLogo(posX, posY) {
  ctx.fillRect(posX, posY, 100, 16);
  ctx.fillRect(posX - 38, posY + 38, 16, 150);
  ctx.fillRect(posX + 122, posY + 38, 16, 150);
}

const rec = {}
rec.topLineWidth = canvas.width / 2 - 100 / 2
rec.topLineHeight = canvas.height / 2 - 188 / 2

rec.step = 25

rec.moveup = function () { this.topLineHeight -= this.step };
rec.movedown = function () { this.topLineHeight += this.step };
rec.moveleft = function () { this.topLineWidth -= this.step };
rec.moveright = function () { this.topLineWidth += this.step };

rec.updateLogo = function (pos, negative = false) {
  let secondTopLine

  if (pos === 'H') {
    secondTopLine = negative ? this.topLineHeight - 400 : this.topLineHeight + 400

    createLogo(this.topLineWidth, secondTopLine)

    if (this.topLineHeight >= negative ? 400 : -200) { this.topLineHeight = secondTopLine }

  } else if (pos === 'W') {
    secondTopLine = negative ? this.topLineWidth - 400 : this.topLineWidth + 400

    createLogo(secondTopLine, this.topLineHeight)

    if (this.topLineWidth >= negative ? 400 : -200) { this.topLineWidth = secondTopLine }
  }

}

rec.draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  createLogo(this.topLineWidth, this.topLineHeight)

  // generate new logo for Right side
  if (this.topLineWidth >= 200) this.updateLogo('W', true)
  // generate new logo for Left side
  if (this.topLineWidth <= 0) this.updateLogo("W")
  // generate new logo for Bottom
  if (this.topLineHeight >= 200) this.updateLogo("H", true)
  // generate new logo for Top
  if (this.topLineHeight <= 0) this.updateLogo("H")
};

rec.draw();

document.onkeydown = e => {
  if (e.code == 'ArrowUp') rec.moveup();
  else if (e.code == 'ArrowDown') rec.movedown();
  else if (e.code == 'ArrowLeft') rec.moveleft();
  else if (e.code == 'ArrowRight') rec.moveright();
  else return;
  rec.draw()
};
