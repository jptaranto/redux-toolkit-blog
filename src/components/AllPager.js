import { useDispatch } from "react-redux";
import { updateAllCurrentPage } from "../store/actions";

const AllPager = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(updateAllCurrentPage())}>
      Next page(s)
    </button>
  );
};

export default AllPager;
