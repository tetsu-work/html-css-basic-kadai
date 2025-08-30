const date = new Date(2024, 9, 12);
const formatted = date.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric"
});
console.log(formatted); // 2024年10月12日
