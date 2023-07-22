"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_text_chart_pure_1 = require("./js.text.chart.pure");
class JsTextChart extends js_text_chart_pure_1.default {
    constructor() {
        super(...arguments);
        /** evchart will be romoved since v1.1.0
         * @deprecated
         */
        this._evchart = new js_text_chart_pure_1.default();
        /** exchart will be romoved since v1.1.0
         * @deprecated
         */
        this._exchart = new js_text_chart_pure_1.default();
    }
    static get default() {
        if (!this._default) {
            new js_text_chart_pure_1.default();
        }
        return JsTextChart._default;
    }
    /** evchart will be romoved since v1.1.0
     * @deprecated
     */
    get evchart() {
        if (!this._evchart) {
            this._evchart = new js_text_chart_pure_1.default();
            ;
        }
        return this._evchart;
    }
    /** exchart will be romoved since v1.1.0
     * @deprecated
     */
    get exchart() {
        if (!this._evchart) {
            this._exchart = new js_text_chart_pure_1.default();
            ;
        }
        return this._exchart;
    }
}
exports.default = JsTextChart;
