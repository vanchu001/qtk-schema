const BaseSchema = require('../base');
const {array: semanticSchema} = require('../../semantic-schema').schema;

module.exports = class ArraySchema extends BaseSchema {
    constructor(item) {
        super();
        this._semanticSchema = semanticSchema();
        if (item !== undefined) this.item(item);
    }

    /**
     * 描述数组元素个数最大值
     * @param {integer} num - 最大值
     */
    maxItems(num) {
        this._semanticSchema.maxItems(num);
        return this;
    }

    /**
     * 描述数组元素个数最小值
     * @param {integer} num - 最小值
     */
    minItems(num) {
        this._semanticSchema.minItems(num);
        return this;
    }

    /**
     * 描述数组元素个数,相当于同时设置minItems,maxItems为同一个值
     * @param {integer} num - 确切值
     */
    length(num) {
        this.maxItems(num).minItems(num);
        return this;
    }

    /**
     * 描述数组元素结构
     * @param {any} schemaOrSugar - 元素结构
     */
    item(schemaOrSugar) {
        this._semanticSchema.item(require('../../sugar').resolve(schemaOrSugar).normalize());
        return this;
    }

};
