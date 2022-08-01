import { useDispatch } from "react-redux";
import { useSliceActions } from "./SliceProvider";

const Reset = () => {
  const dispatch = useDispatch();
  const { reset } = useSliceActions();
  return <button onClick={() => dispatch(reset())}>Reset</button>;
};

export default Reset;
