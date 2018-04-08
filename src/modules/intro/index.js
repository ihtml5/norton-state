import connect from "../../connect";
import { Intro } from "../../components";

const mapStateToProps = (state, ownProps) => {
  return {
    msg: state.msg,
    asType: state.asType || "norton-state",
    changeValue: state.changeValue,
    tbkt: state.tbkt,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetLoading: () => {
      alert('LOADING/SHOW');
      dispatch({
        type: 'LOADING/SHOW',
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Intro);
