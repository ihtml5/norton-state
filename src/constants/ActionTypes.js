
const ActionTypes = {
    INIT:
      '@@redux/INIT' +
      Math.random()
        .toString(36)
        .substring(7)
        .split('')
        .join('.'),
    REPLACE:
      '@@redux/REPLACE' +
      Math.random()
        .toString(36)
        .substring(7)
        .split('')
        .join('.')
  }
  
  export default ActionTypes
  