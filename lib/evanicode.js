// 打印页面相关信息（代码更新时间）
// let date = new Date()
// console.log(`Now Time : ${date} `);

let blank15 = '               ';
let blank12 = '            ';
let blank11 = '           ';
let blank10 = '          ';
let blank9 = '         ';
let blank8 = '        ';
let blank7 = '       ';
let blank6 = '      ';
let blank5 = '     ';
let blank4 = '    ';

let lCharts = new Map;

lCharts = new Map([
    [
        "0",
        [
            '   ___  ',
            '  / _ \\ ',
            ' | | | |',
            ' | | | |',
            ' | |_| |',
            '  \\___/ ',
            blank8,
            blank8
        ]
    ],
    [
        "1",
        [
            '  __ ',
            ' /_ |',
            '  | |',
            '  | |',
            '  | |',
            '  |_|',
            blank5,
            blank5
        ]
    ],
    [
        "2",
        [
            '  ___  ',
            ' |__ \\ ',
            '    ) |',
            '   / / ',
            '  / /_ ',
            ' |____|',
            blank7,
            blank7     
        ]
    ],
    [
        "3",
        [
            '  ____  ',
            ' |___ \\ ',
            '   __) |',
            '  |__ < ',
            '  ___) |',
            ' |____/ ',
            blank8,
            blank8
        ]
    ],
    [
        "4",
        [
            '  _  _   ',
            ' | || |  ',
            ' | || |_ ',
            ' |__   _|',
            '    | |  ',
            '    |_|  ',
            blank9,
            blank9
        ]
    ],
    [
        "5",
        [
            '  _____ ',
            ' | ____|',
            ' | |__  ',
            ' |___ \\ ',
            '  ___) |',
            ' |____/ ',
            blank8,
            blank8
        ]
    ],
    [
        "6",
        [
            '    __  ',
            '   / /  ',
            '  / /_  ',
            ' | \'_ \\ ',
            ' | (_) |',
            '  \\___/ ',
            blank7,
            blank7
        ]
    ],
    [
        "7",
        [
            '  ______ ',
            ' |____  |',
            '     / / ',
            '    / /  ',
            '   / /   ',
            '  /_/    ',
            blank9,
            blank9
        ]
    ],
    [
        "8",
        [
            '   ___  ',
            '  / _ \\ ',
            ' | (_) |',
            '  > _ < ',
            ' | (_) |',
            '  \\___/ ',
            blank8,
            blank8
        ]
    ],
    [
        "9",
        [
            '   ___  ',
            '  / _ \\ ',
            ' | (_) |',
            '  \\__, |',
            '    / / ',
            '   /_/  ',
            blank8,
            blank8
        ]
    ],
    [
        "A", 
        [
            blank11,
            '     /\\    ',
            '    /  \\   ',
            '   / /\\ \\  ',
            '  / ____ \\ ',
            ' /_/    \\_\\',
            blank11,
            blank11
        ]
    ],
    [
        "a",
        [
            blank8,
            blank8,
            '   __ _ ',
            '  / _` |',
            ' | (_| |',
            '  \\__,_|',
            blank8,
            blank8
        ]
    ],
    [
        "B",
        [

            '  ____  ',
            ' |  _ \\ ',
            ' | |_) |',
            ' |  _ < ',
            ' | |_) |',
            ' |____/ ',
            blank8,
            blank8
        ]
    ],
    [
        "b",
        [
            '  _     ',
            ' | |    ',
            ' | |__  ',
            " | '_  \\",
            ' | |_) |',
            ' |_.__/ ',
            blank8,
            blank8
        ]
    ],
    [
        "C",
        [
            '   _____ ',
            '  / ____|',
            ' | |     ',
            ' | |     ',
            ' | |____ ',
            '  \\_____|',
            blank9,
            blank9
        ]
    ],
    [
        "c",
        [
            blank7,
            blank7,
            '   ___ ',
            '  / __|',
            ' | (__ ',
            '  \\___|',
            blank7,
            blank7

        ]
    ],
    [
        "D",
        [
            '  _____  ',
            ' |  __ \\ ',
            ' | |  | |',
            ' | |  | |',
            ' | |__| |',
            ' |_____/ ',
            blank9,
            blank9
        ]
    ],
    [
        "d",
        [
            '      _ ',
            '     | |',
            '   __| |',
            '  / _` |',
            ' | (_| |',
            '  \\__,_|',
            blank8,
            blank8
        ]
    ],
    [
        "E",
        [
            '  ______ ',
            ' |  ____|',
            ' | |__   ',
            ' |  __|  ',
            ' | |____ ',
            ' |______|',
            blank9,
            blank9
        ]
    ],
    [
        "e",
        [
            blank7,
            blank7,
            '   ___ ',
            '  / _ \\',
            ' |  __/',
            '  \\___|',
            blank7,
            blank7
        ]
    ],
    [
        "F",
        [
            '  ______ ',
            ' |  ____|',
            ' | |__   ',
            ' |  __|  ',
            ' | |     ',
            ' |_|     ',
            blank9,
            blank9
        ]
    ],
    [
        "f",
        [
            '   __ ',
            '  / _|',
            ' | |_ ',
            ' |  _|',
            ' | |  ',
            ' |_|  ',
            blank6,
            blank6
        ]
    ],
    [
        "G",
        [
            '   _____ ',
            '  / ____|',
            ' | |  __ ',
            ' | | |_ |',
            ' | |__| |',
            '  \\_____|',
            blank9,
            blank9
        ]
    ],
    [
        "g",
        [
            blank8,
            blank8,
            '   __ _ ',
            "  / _` |",
            ' | (_| |',
            '  \\__, |',
            '   __/ |',
            '  |___/ '
        ]
    ],
    [
        "H",
        [
            '  _    _ ',
            ' | |  | |',
            ' | |__| |',
            ' |  __  |',
            ' | |  | |',
            ' |_|  |_|',
            blank9,
            blank9
        ]
    ],
    [
        "h",
        [
            '  _     ',
            ' | |    ',
            ' | |__  ',
            " | '_ \\ ",
            ' | | | |',
            ' |_| |_|',
            blank8,
            blank8
        ]
    ],
    [
        "I",
        [
            '  _____ ',
            ' |_   _|',
            '   | |  ',
            '   | |  ',
            '  _| |_ ',
            ' |_____|',
            blank8,
            blank8
        ]
    ],
    [
        "i",
        [
            '  _ ',
            ' (_)',
            '  _ ',
            ' | |',
            ' | |',
            ' |_|',
            blank4,
            blank4
        ]
    ],
    [
        "J",
        [
            '       _ ',
            '      | |',
            '      | |',
            '  _   | |',
            ' | |__| |',
            '  \\____/ ',
            blank9,
            blank9
        ]
    ],
    [
        "j",
        [
            '    _ ',
            '   (_)',
            '    _ ',
            '   | |',
            '   | |',
            '   | |',
            '  _/ |',
            ' |__/ '
        ]
    ],
    [
        "K",
        [
            '  _  __',
            ' | |/ /',
            " | ' / ",
            ' |  <  ',
            ' | . \\ ',
            ' |_|\\_\\',
            blank7,
            blank7
        ]
    ],
    [
        "k",
        [
            '  _    ',
            ' | |   ',
            ' | | __',
            ' | |/ /',
            ' |   < ',
            ' |_|\\_\\',
            blank7,
            blank7
        ]
    ],
    [
        "L",
        [
            '  _      ',
            ' | |     ',
            ' | |     ',
            ' | |     ',
            ' | |____ ',
            ' |______|',
            blank9,
            blank9
        ]
    ],
    [
        "l",
        [
            '  _ ',
            ' | |',
            ' | |',
            ' | |',
            ' | |',
            ' |_|',
            blank4,
            blank4
        ]
    ],
    [
        "M",
        [
            '  __  __ ',
            ' |  \\/  |',
            ' | \\  / |',
            ' | |\\/| |',
            ' | |  | |',
            ' |_|  |_|',
            blank9,
            blank9
        ]
    ],
    [
        "m",
        [
            blank12,
            blank12,
            '  _ __ ___  ',
            " | '_ ` _ \\ ",
            ' | | | | | |',
            ' |_| |_| |_|',
            blank12,
            blank12
        ]
    ],
    [
        "N",
        [
            '  _   _ ',
            ' | \\ | |',
            ' |  \\| |',
            " | . ` |",
            '  | |\\  |',
            ' |_| \\_|',
            blank8,
            blank8
        ]
    ],
    [
        "n",
        [
            blank8,
            blank8,
            '  _ __  ',
            " | '_ \\ ",
            ' | | | |',
            ' |_| |_|',
            blank8,
            blank8
        ]
    ],
    [
        "O",
        [
            '   ____ ',
            '  / __ \\ ',
            ' | |  | |',
            ' | |  | |',
            ' | |__| |',
            '  \\____/ ',
            blank9,
            blank9
        ]
    ],
    [
        "o",
        [
            blank8,
            blank8,
            '   ___  ',
            '  / _ \\ ',
            ' | (_) |',
            '  \\___/ ',
            blank8,
            blank8
        ]
    ],
    [
        "P",
        [
            '  _____  ',
            ' |  __ \\ ',
            ' | |__) |',
            ' |  ___/ ',
            ' | |     ',
            ' |_|     ',
            blank9,
            blank9
        ]
    ],
    [
        "p",
        [
            blank8,
            blank8,
            '  _ __  ',
            ' | \'_ \\ ',
            ' | |_) |',
            ' | .__/ ',
            ' | |    ',
            ' |_|    '
        ]
    ],
    [
        "Q",
        [
            '   ____  ',
            '  / __ \\ ',
            ' | |  | |',
            ' | |  | |',
            ' | |  | |',
            '  \\___\\_\\',
            blank9,
            blank9
        ]
    ],
    [
        "q",
        [
            blank8,
            blank8,
            '   __ _ ',
            "  / _` |",
            ' | (_| |',
            '  \\__, |',
            '     | |',
            '     |_|'
        ]
    ],
    [
        "R",
        [
            '  _____  ',
            ' |  __ \\ ',
            ' | |__) |',
            ' |  _  / ',
            ' | | \\ \\ ',
            ' |_|  \\_\\',
            blank9,
            blank9
        ]
    ],
    [
        "r",
        [
            blank7,
            blank7,
            '  _ __ ',
            " | '__|",
            ' | |   ',
            ' |_|   ',
            blank7,
            blank7
        ]
    ],
    [
        "S",
        [
            '   _____ ',
            '  / ____|',
            ' | (___  ',
            '  \\___ \\ ',
            '  ____) |',
            ' |_____/ ',
            blank9,
            blank9
        ]
    ],
    [
        "s",
        [
            blank6,
            blank6,
            '  ___ ',
            ' / __|',
            ' \\__ \\',
            ' |___/',
            blank6,
            blank6
        ]
    ],
    [
        "T",
        [
            '  _______ ',
            ' |__   __|',
            '    | |   ',
            '    | |   ',
            '    | |   ',
            '    |_|   ',
            blank10,
            blank10
        ]
    ],
    [
        "t",
        [
            '  _   ',
            ' | |  ',
            ' | |_ ',
            ' | __|',
            ' | |_ ',
            '  \\__|',
            blank6,
            blank6
        ]
    ],
    [
        "U",
        [
            '  _    _ ',
            ' | |  | |',
            ' | |  | |',
            ' | |  | |',
            ' | |  | |',
            '  \\____/ ',
            blank9,
            blank9
        ]
    ],
    [
        "u",
        [
            blank8,
            blank8,
            '  _   _ ',
            ' | | | |',
            ' | | | |',
            '  \\__,_|',
            blank8,
            blank8
        ]
    ],
    [
        "V",
        [
            ' __      __',
            ' \\ \\    / /',
            '  \\ \\  / / ',
            '   \\ \\/ /  ',
            '    \\  /   ',
            '     \\/    ',
            blank11,
            blank11
        ]
    ],
    [
        "v",
        [
            blank8,
            blank8,
            ' __   __',
            ' \\ \\ / /',
            '  \\ V / ',
            '   \\_/  ',
            blank8,
            blank8
        ]
    ],
    [
        "W",
        [
            ' __          __',
            ' \\ \\        / /',
            '  \\ \\  /\\  / / ',
            '   \\ \\/  \\/ /  ',
            '    \\  /\\  /   ',
            '     \\/  \\/    ',
            blank15,
            blank15
        ]
    ],
    [
        "w",
        [
            blank11,
            blank11,
            ' __      __',
            ' \\ \\ /\\ / /',
            '  \\ V  V / ',
            '   \\_/\\_/  ',
            blank11,
            blank11
        ]
    ],
    [
        "X",
        [
            ' __   __',
            ' \\ \\ / /',
            '  \\ V / ',
            '   > <  ',
            '  / . \\ ',
            ' /_/ \\_\\',
            blank8,
            blank8
        ]
    ],
    [
        "x",
        [
            blank7,
            blank7,
            ' __  __',
            ' \\ \\/ /',
            '  >  < ',
            ' /_/\\_\\',
            blank7,
            blank7
        ]
    ],
    [
        "Y",
        [
            ' __     __',
            ' \\ \\   / /',
            '  \\ \\_/ / ',
            '   \\   /  ',
            '    | |   ',
            '    |_|   ',
            blank10,
            blank10

        ]
    ],
    [
        "y",
        [
            blank8,
            blank8,
            '  _   _ ',
            ' | | | |',
            ' | |_| |',
            '  \\__, |',
            '   __/ |',
            '  |___/ '
        ]
    ],
    [
        "Z",
        [
            '  ______',
            ' |___  /',
            '    / / ',
            '   / /  ',
            '  / /__ ',
            ' /_____|',
            blank8,
            blank8
        ]
    ],
    [
        "z",
        [
            blank6,
            blank6,
            '  ____',
            ' |_  /',
            '  / / ',
            ' /___|',
            blank6,
            blank6
        ]
    ],
    [
        " ",
        [
            blank4,
            blank4,
            blank4,
            blank4,
            blank4,
            blank4,
            blank4,
            blank4
        ]
    ],
    [
        "-",
        [
            blank9,
            blank9,
            '  ______ ',
            ' |______|',
            blank9,
            blank9,
            blank9,
            blank9,  
        ]
    ]
]);

class Evanicode {
    constructor() {
        this.name = 'Evanicode';
        this.info = "this is a Object tool to get text chart of a string";
    }

    toString() {
        console.log("Evanicode: [\n"
           + " name: " + this.name + ",\n"
           + " info: " + this.info + ",\n"
           + " convert(str,mode): " + "Put into a string and you will get the text chart of it, if you don't put any params, you will get an empty string, the 'mode' has three choice: ('close','far',.etc), if you don't put into mode, the mode will be default as .etc" + "\n]"
        );
    }

    convert(str,mode) {
        if(str == undefined || str == "" || str == null){
            return "";
        }
        let strs = str.split('');
        let textchart = '';
        for(let i = 0; i < 8 ; i++){
            for(let j = 0; j < strs.length ; j++){
                // console.log(strs[j]);
                let strtmp = '';
                if(!lCharts.has(strs[j])){
                    strtmp = lCharts.get(" ")[i].valueOf();
                }else {
                    strtmp = lCharts.get(strs[j])[i].valueOf();
                }              
                if(mode == 'close'){
                    strtmp = strtmp.replace(' ','');
                } else if (mode == 'far'){
                    strtmp = strtmp.replace(' ','  ');
                }
                textchart = textchart + strtmp;
                if (strs.length == j + 1) {
                    textchart = textchart + '\n';
                }
            }
            if (8 == i + 1) {
                textchart = textchart + '\n';
            }
        }
        return textchart;
    }
}

// let x = new Evanicode();
// x.toString();
// console.log(x.convert("js-text-chart","close"));

module.exports = Evanicode;
