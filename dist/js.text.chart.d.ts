declare class JsTextChart {
    name: string;
    info: string;
    constructor();
    toString(): void;
    convert(str: string, mode?: 'far' | 'close'): string;
}
declare const _default: JsTextChart;
export default _default;
