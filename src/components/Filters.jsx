import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilters } from "../store/filters/filter-selectors";
import { setFilter } from "../store/filters/filter-actions";


export const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilters);
  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))} style={{ color: activeFilter === 'all' ? 'red' : 'black' }}>all</button>
      <button onClick={() => dispatch(setFilter('active'))} style={{ color: activeFilter === 'all' ? 'red' : 'black' }}>active</button>
      <button onClick={() => dispatch(setFilter('completed'))} style={{ color: activeFilter === 'all' ? 'red' : 'black' }}>completed</button>
    </div >
  )
}
