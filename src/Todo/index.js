import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import { addJob, deleteJob, setJob } from './actions';
import logger from './logger';

//useReducer
// 1. init state
// 2. actions
// 3. reducer
// 4. dispatch


function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state
  const inputRef = useRef()

  const handleAddJob = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h3> To do </h3>
        <input type="text" placeholder='enter todo' value={job} onChange={(e) => dispatch(setJob(e.target.value))} ref={inputRef} />
        <button onClick={handleAddJob}>add</button>

        <ul>
          {jobs.map((job, index) =>
            <li key={index}>{job}  <span style={{marginLeft: '4px'}} onClick={() => dispatch(deleteJob(index))}>x</span></li> 
          )}
        </ul>

      </div>

    </>
  );
}

export default Todo;
