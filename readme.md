# js-text-chart

js-text-chart is a tool to transform a string of a text into a string of the chart of the text.

## Latest Version: 1.0.5

**v1.0.5**:
Fix 1.0.4, v1.0.4 has a bug while imported.

**v1.0.4**:
Fix 1.0.3, 1.0.3 is must usable.

**v1.0.2**:
Refactored by TypeScript, support commonJs require and esmodule import.

**v1.0.1**:
support capital and small letters and natural numbers.
Besides, only blank and "-" are allowed, others will be treated as blank.

## Code Resource
https://github.com/Evanpatchouli/js-text-chart

## Install

```shell
npm install js-text-chart
```

## Useage
### Code

**CommonJS:**
``` javascript
const JsTextChart = require('js-text-chart');

let str = "js-console-chart";
let mode = [ "close", "far", undefined ];
let chart = JsTextChart.convert(str, mode[0]);
console.log(chart);
```

**ESModule:**
```javascript
import JsTextChart from 'js-text-chart';

let str = "js-console-chart";
let mode = [ "close", "far", undefined ];
let chart = JsTextChart.convert(str, mode[0]);
console.log(chart);
```

The function **convert** returns you with the chart string, and it takes two params: the first one **str** is must, and the **mode** is not necessary, you can assign it to "close", "far" or anyelse which will all be treated as default.

### Output

```
[Running] node "d:\Workstation\js-console-chart\examples\demo.js"
   _                                               _                      _                   _   
  (_)                                             | |                    | |                 | |  
   _  ___  ______   ___   ___   _ __   ___   ___  | |  ___  ______   ___ | |__    __ _  _ __ | |_ 
  | |/ __||______| / __| / _ \ | '_ \ / __| / _ \ | | / _ \|______| / __|| '_ \  / _` || '__|| __|
  | |\__ \        | (__ | (_) || | | |\__ \| (_) || ||  __/        | (__ | | | || (_| || |   | |_ 
  | ||___/         \___| \___/ |_| |_||___/ \___/ |_| \___|         \___||_| |_| \__,_||_|    \__|
 _/ |                                                                                             
|__/                                                                                              



[Done] exited with code=0 in 0.138 seconds
```