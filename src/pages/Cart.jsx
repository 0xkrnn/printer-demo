import React, { useContext, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../contexts/StoreContext';

function Cart() {

    const { actions, dispatch, newState } = useContext(Context)

    console.log(newState);

    return (
        <div>
            <h1>cart</h1>

            <Container>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/cart"> Cart </NavLink>
            </Container>

            {
                newState.map(item => {
                    return (
                        <h1>{item.title}</h1>
                    )
                })
            }


        </div>
    );
}

export default Cart;

const Container = styled.div`
    display: flex;
    gap: 40px;
    a{
        text-decoration: none;
    }
`