import connect from "../../connect";
import { Intro } from "../../components";

const mapStateToProps = (state, ownProps) => {
  return {
    msg: state.msg,
    asType: state.asType || "norton-state"
  };
};
export default connect(mapStateToProps)(Intro);
