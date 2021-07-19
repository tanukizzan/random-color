'use strict';
const wordInput = document.getElementById('window');
const submitBtn = document.getElementById('submit-btn');
const redBtn = document.getElementById('red-btn');
const greenBtn = document.getElementById('green-btn');
const blueBtn = document.getElementById('blue-btn');
const resultArea = document.getElementById('result-area');

// ランダム色生成
function mainHex() {
  let result = '';
  for (let i = 0; i < 3; ++i) {
    const n = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    result += n;
  }
  return result;
}
submitBtn.onclick = () => {
  document.body.style.background = '#' + mainHex();
  resultArea.innerHTML = '#' + mainHex();
}
window.onload = () => {
  submitBtn.onclick();
}
document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    submitBtn.onclick();
  }
});

// 赤系色を生成
redBtn.onclick = () => {
  const red = Math.floor(Math.random() * (256 + 1 - 128) + 128).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  let colorCode = '#' + red + green + blue;
  document.body.style.background = colorCode;
  resultArea.innerHTML = colorCode;
}
// 緑系色を生成
greenBtn.onclick = () => {
  const red = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * (256 + 1 - 128) + 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  let colorCode = '#' + red + green + blue;
  document.body.style.background = colorCode;
  resultArea.innerHTML = colorCode;
}
// 青系色を生成
blueBtn.onclick = () => {
  const red = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * (256 + 1 - 128) + 128).toString(16).padStart(2, '0');
  let colorCode = '#' + red + green + blue;
  document.body.style.background = colorCode;
  resultArea.innerHTML = colorCode;
}

/* カラーコードの生成コード
submitBtn.onclick = () => {
  function hex(n) {
    let result = '';
    for (let i = 0; i < n.length; ++i) {
      let sum = ('0' + n.charCodeAt(i).toString(16)).substr(-2);
      result += sum;
    }
    return result;
  }
  const hexResult = hex(wordInput.value);
  console.log(hexResult.slice(0,6));
  document.body.style.background = '#' + hexResult.slice(0,6);
  resultArea.innerHTML = '#' + hexResult.slice(0,6);
};

const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
const green = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
const blue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
let colorCode = '#' + red + green + blue;
document.body.style.background = colorCode;
resultArea.innerHTML = colorCode;

const max = 60;
const min = 0;
const hsl = Math.floor(Math.random() * (max + 1 - min) + min);
document.body.style.background = 'hsl(' + hsl + ', 80%, 60%)';

const red = Math.floor(Math.random() * (100 + 1 - 50) + 50);
const green = Math.floor(Math.random() * 50);
const blue = Math.floor(Math.random() * 50);
let colorCode = 'rgb(' + red + '%,' + green + '%,' + blue + '%)';
*/