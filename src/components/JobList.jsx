import {useSelector, useDispatch} from 'react-redux';

import {JobPosition} from './JobPosition';

import {selectVisiblePositions} from '../store/positions/position-selectors';
import {selectFilters} from '../store/filters/filters-selectors';
import {addFilter} from '../store/filters/filters-actions';

const JobList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const positions = useSelector(state => selectVisiblePositions(state, filters));

  const handleFilterClick = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleFilterClick={handleFilterClick} {...item} />
      ))}
    </div>
  )
}

export {JobList};