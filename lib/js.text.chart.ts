import JsTextChartPure from "./js.text.chart.pure";

class JsTextChart extends JsTextChartPure {
  private static _default: JsTextChartPure;
  public static get default(): JsTextChartPure {
    if (!this._default) {
      new JsTextChartPure();
    }
    return JsTextChart._default;
  }
  /** evchart will be romoved since v1.1.0
   * @deprecated
   */
  private _evchart: JsTextChartPure = new JsTextChartPure();
  /** evchart will be romoved since v1.1.0
   * @deprecated
   */
  public get evchart(): JsTextChartPure {
    if (!this._evchart) {
      this._evchart = new JsTextChartPure();;
    }
    return this._evchart;
  }
  /** exchart will be romoved since v1.1.0
   * @deprecated
   */
  private _exchart: JsTextChartPure = new JsTextChartPure();
  /** exchart will be romoved since v1.1.0
   * @deprecated
   */
  public get exchart(): JsTextChartPure {
    if (!this._evchart) {
      this._exchart = new JsTextChartPure();;
    }
    return this._exchart;
  }
}

export default JsTextChart;