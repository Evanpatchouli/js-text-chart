# js-text-chart

js-text-chart is a tool to transform a string of a text into a string of the chart of the text.

## Latest Version: 1.0.0

**v1.0.0**:
support capital and small letters and natural numbers.
Besides, only blank and "-" are allowed, others will be treated as blank.

## Install

```shell
npm install js-text-chart
```

## Useage
### Code

``` javascript
let exchart = require("../index").evchart;

let str = "js-console-chart";
let mode = [ "close", "far", undefined ];
let chart = exchart.convert(str, mode[0]);
console.log(chart);

```

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