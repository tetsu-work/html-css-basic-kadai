// h2要素とボタンを取得
const text = document.getElementById("text");
const btn = document.getElementById("btn");

// 初期表示の設定
text.textContent = "ボタンをクリックしてください";

// ボタンクリック時の処理
btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});
