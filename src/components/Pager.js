import { useDispatch } from "react-redux";
import { useSliceActions, useSliceSelector } from "./SliceProvider";

const Pager = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSliceSelector();
  const { updateCurrentPage } = useSliceActions();
  return (
    <div>
      {currentPage}
      <button onClick={() => dispatch(updateCurrentPage(currentPage + 1))}>
        Next page
      </button>
    </div>
  );
};

export default Pager;
