import connect from "../../connect";
import { Intro } from "../../components";

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading.show,
    mask: state.mask.show
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetLoading: () => {
      dispatch({
        type: 'LOADING/SHOW',
      })
    },
    doLoading: () => {
      dispatch({
        type: 'LOADING/HIDE',
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Intro);
