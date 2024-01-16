import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from '../../constants/todo';

const Filter = ({ todosFilter, setTodosFilter }) => {
  const handleChange = (e) => {
    setTodosFilter(e.target.value);
  };

  return (
    <FormControl sx={{margin: '1rem',
  }}>
      <InputLabel id='status-label'>Status</InputLabel>
      <Select
        labelId='status-label'
        value={todosFilter}
        label='Filter'
        onChange={handleChange}
      >
        <MenuItem value={TODOS_FILTER_ALL}>All</MenuItem>
        <MenuItem value={TODOS_FILTER_PROGRESS}>In progress</MenuItem>
        <MenuItem value={TODOS_FILTER_COMPLETED}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
