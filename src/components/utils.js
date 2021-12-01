import { type, empty } from '@luchao/base-utils'

export function ternaryOperator(condition, value, defaultValue) {
  const c = type(condition) === 'array' ? condition : [condition];
  // 默认值首先使用传入的值，否则根据value值去判断
  const d =
    2 in arguments
      ? defaultValue
      : {
        boolean: true,
        number: 0,
        string: '',
        function: empty,
        array: [],
        date: new Date(),
        regexp: /^/,
        object: {},
        error: new Error(),
        undefined,
        null: null,
      }[type(value)];

  return c.every((v) => !!v) ? value : d;
}