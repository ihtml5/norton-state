export const MASKSHOW = 'MASK/SHOW';
export const MASKHIDE = 'MASK/HIDE';

const setMASK = (
  state = {
    show: false,
  },
  action,
) => {
  const { type } = action;
  console.log('');
  switch (type) {
    case MASKHIDE:
      return {
        ...state,
        show: false,
      };
    case MASKSHOW:
      return {
        ...state,
        show: true,
      };
    default:
      return state;
  }
};
export default setMASK;
