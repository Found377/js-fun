const getNumber = (max = 11, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const optimizeNumber = (n) => {
  let str = n + "";
  return str.length >= 2 ? str : "0" + str;
};

const data = [];

const colors = [
  "#CDB9D6aa",
  "#02A298aa",
  "#A3D8CFaa",
  "#F0B2ABaa",
  "#73615Eaa",
  "#F2E205aa",
  "#F25C05aa",
  "#F24405aa",
  "#885BA6aa",
  "#CAD959aa",
];

let n = Math.floor(getNumber(61, 6) / 6) * 6;

while (n--) {
  data.push(getNumber(100));
}

console.log(data);

const box = document.querySelector(".box");

for (let val of data) {
  box.innerHTML += `<div class="card" style="background-color: ${
    colors[getNumber(colors.length - 1)]
  }">${optimizeNumber(val)}</div>`;
}
