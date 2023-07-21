let JsTextChart = require("../dist/js.text.chart.cjs")

let str = "js-console-chart";
let mode = [ "close", "far", undefined ];
let chart = JsTextChart.convert(str, mode[0]);
console.log(chart);
