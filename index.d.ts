declare interface JsTextChart {
  name: string;
  info: string;
  /**
   * Get description of JsTextChart
   */
  toString(): string;
  /**
   * Convert a string to text chart
   * @param str the text you want to convert to text chart
   * @param mode the blanks of letters
   */
  convert(str: string, mode?: 'far'|'close'): string;
}

declare const jstexchart: JsTextChart;
export default jstexchart;