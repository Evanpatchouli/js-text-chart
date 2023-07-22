const JsTextChart = require("../dist/index.js");
// import JsTextChart from "../dist/index.js";


let str = "js-console-chart";
let mode = [ "close", "far", undefined ];
let chart = JsTextChart.convert(str, mode[0]);
console.log(chart);
