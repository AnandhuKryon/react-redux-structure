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
                Count is {count}
            </div>
        </>
    )
};

export default SignUp;