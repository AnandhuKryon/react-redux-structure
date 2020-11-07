import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Signin from '../signin/index';

const SignUp = ({ props }) => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.homeReducer.count);

    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <>
            <div className="container">
                <Signin />
                Count  <p style={{ color: count > 6 ? 'green' : count >= 3 ? 'violet' : count < 3 && count > 0 ? 'red' : null }}> {count}</p>
            </div>
        </>
    )
};

export default SignUp;