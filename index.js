const BaseSchema = require('./src/schema/base');
const ObjectSchema = require('./src/schema/object');
const ArraySchema = require('./src/schema/array');
const StringSchema = require('./src/schema/string');
const NumberSchema = require('./src/schema/number');
const IntegerSchema = require('./src/schema/integer');
const BooleanSchema = require('./src/schema/boolean');
const NullSchema = require('./src/schema/null');
const OneOfSchema = require('./src/schema/one_of');

const schema = {
    /**
     * schema-object
     * @param {object} properties - 确切值
     */
    object: (properties) => new ObjectSchema(properties),

    /**
     * schema-array
     * @param {any} item - 元素结构
     */
    array: (item) => new ArraySchema(item),

    /**
     * schema-string
     * @param {string|Regex} regex 正则对象或者正则字符串
     */
    string: (pattern) => new StringSchema(pattern),

    /**
     * schema-integer
     * @param {object} min - 最小值
     * @param {object} max - 最大值
     */
    integer: (min, max) => new IntegerSchema(min, max),

    /**
     * schema-number
     * @param {object} min - 最小值
     * @param {object} max - 最大值
     */    
    number: (min, max) => new NumberSchema(min, max),

    /**
     * schema-boolean
     */
    boolean: () => new BooleanSchema(),

    /**
     * schema-null等同与schema-empty
     */
    NULL: () => new NullSchema(),

    /**
     * schema-empty
     */
    empty: () => new NullSchema(),

    /**
     * schema-oneOf
     * @param  {...any} items 如下结构之一，多个以逗号隔开
     */
    oneOf: (...items) => new OneOfSchema(...items),

    /**
     * 非法schema
     */
    invalid: () => new BaseSchema().invalid(),
};

module.exports = {
    schema,
    validator: require('./src/validator'),
    sugar: require('./src/sugar')
};
