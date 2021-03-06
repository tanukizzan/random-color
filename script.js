'use strict';
const wordInput = document.getElementById('window');
const submitBtn = document.getElementById('submit-btn');
const redBtn = document.getElementById('red-btn');
const greenBtn = document.getElementById('green-btn');
const blueBtn = document.getElementById('blue-btn');
const monotone = document.getElementById('monotone');
const resultArea = document.getElementById('result-area');
const colorPicker = document.getElementById('color-picker');
const tweetBtn = document.getElementById('tweet-btn');
const tweetColor = document.getElementById('tweet-color');

// ランダム色生成
submitBtn.onclick = () => {
  const mainHex = () => {
    let result = '';
    for (let i = 0; i < 3; ++i) {
      const n = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      result += n;
    }
    return result;
  }
  const colorCode = mainHex();
  output(colorCode);
}
// サイト読み込み時にもランダム色生成
window.onload = () => {
  if (window.location.search.length > 0) {
    const colorCode = window.location.search.slice(1);
    output(colorCode);
  } else {
    submitBtn.onclick();
  }
}
// Enterキーでもランダム色生成
document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    submitBtn.onclick();
  }
});

// 赤系色を生成
redBtn.onclick = () => {
  const red = Math.floor(Math.random() * (256 + 1 - 128) + 128).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const colorCode = red + green + blue;
  output(colorCode);
}
// 緑系色を生成
greenBtn.onclick = () => {
  const red = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * (256 + 1 - 128) + 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const colorCode = red + green + blue;
  output(colorCode);
}
// 青系色を生成
blueBtn.onclick = () => {
  const red = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * (256 + 1 - 128) + 128).toString(16).padStart(2, '0');
  const colorCode = red + green + blue;
  output(colorCode);
}
// モノトーン色を生成
monotone.onclick = () => {
  const mono = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const colorCode = mono + mono + mono;
  output(colorCode);
}

// カラーピッカー
colorPicker.addEventListener('change', () => {
  const colorCode = colorPicker.value.slice(1);
  output(colorCode);
})

// 生成したカラーコードをHTMLに出力
const output = (colorCode) => {
  document.body.style.background = '#' + colorCode;
  resultArea.innerHTML = '#' + colorCode;
  const tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('#ランダムカラーピッカー で生成しました') + '&url=' + encodeURIComponent('https://app.tanukizzan.com/random-color?' + colorCode) + '&hashtags=' + colorCode;
  tweetBtn.setAttribute('href', tweetLink);
  tweetColor.innerText = '#' + colorCode;
  colorPicker.value = '#' + colorCode;
}
