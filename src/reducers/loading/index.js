export const LOADINGSHOW = 'LOADING/SHOW';
export const LOADINGHIDE = 'LOADING/HIDE';

const setLoading = (
  state = {
    show: false,
  },
  action,
) => {
  const { type } = action;
  console.log('');
  switch (type) {
    case LOADINGHIDE:
      return {
        ...state,
        show: false,
      };
    case LOADINGSHOW:
      return {
        ...state,
        show: true,
      };
    default:
      return state;
  }
};
export default setLoading;
