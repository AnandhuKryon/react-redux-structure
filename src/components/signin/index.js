import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, reduceCount } from '../../store/reducers/home/homeReducer';

const Signin = ({ props }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button onClick={() => dispatch(addCount())}>Add Count</button>
                <button onClick={() => dispatch(reduceCount())}>Reduce Count</button>
            </div>
        </>
    )
};

export default Signin;