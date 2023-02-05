let exchart = require("../index").evchart;
/**
 * evchart has a littel higher esm grammar
 * let exchart = require("../index").evchart;
 */

let str = "js-console-chart";
let mode = [ "close", "far", undefined ];
let chart = exchart.convert(str, mode[0]);
console.log(chart);
