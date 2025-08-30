// 今日の日付を取得
const date = new Date();

// 日本語の年月日形式にフォーマット
const formatted = date.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(formatted); 
// 実行日が2025年8月30日の場合 → "2025年8月30日"
