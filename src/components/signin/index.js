import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, reduceCount } from '../../store/reducers/home/homeReducer';

const Signin = ({ props }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button onClick={() => dispatch(addCount())} style={{ cursor: "pointer" }}>Add Count</button>
                <button onClick={() => dispatch(reduceCount())} style={{ cursor: "pointer" }}>Reduce Count</button>
            </div>
        </>
    )
};

export default Signin;