import {useDispatch, useSelector} from 'react-redux';

import {selectFilters} from '../store/filters/filters-selectors';
import {removeFilter, clearFilters} from '../store/filters/filters-actions';

import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  if (filters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map(filter => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilters)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};