const isFunction = func => typeof func === 'function';
const nativeToString = Object.prototype.toString;
const isObject = obj => nativeToString.call(obj) === '[object Object]'
export {
    isFunction,
    isObject,
}