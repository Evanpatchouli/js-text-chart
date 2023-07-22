declare class JsTextChart {
    name: string;
    info: string;
    constructor();
    toString: () => void;
    convert: (str: string, mode?: 'far' | 'close') => string;
}
export default JsTextChart;
