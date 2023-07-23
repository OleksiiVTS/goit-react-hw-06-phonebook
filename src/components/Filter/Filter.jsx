import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label>
        <input onChange={evt => dispatch(setStatusFilter(evt.target.value))} />
      </label>
    </>
  );
};

export default Filter;
