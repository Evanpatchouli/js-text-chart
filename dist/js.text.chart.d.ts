import JsTextChartPure from "./js.text.chart.pure";
declare class JsTextChart extends JsTextChartPure {
    private static _default;
    static get default(): JsTextChartPure;
    /** evchart will be romoved since v1.1.0
     * @deprecated
     */
    private _evchart;
    /** evchart will be romoved since v1.1.0
     * @deprecated
     */
    get evchart(): JsTextChartPure;
    /** exchart will be romoved since v1.1.0
     * @deprecated
     */
    private _exchart;
    /** exchart will be romoved since v1.1.0
     * @deprecated
     */
    get exchart(): JsTextChartPure;
}
export default JsTextChart;
