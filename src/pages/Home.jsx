import React, { useContext, useEffect, useReducer, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../contexts/StoreContext';

function Home() {

    const [store, setStore] = useState([])


    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products")
        const result = await data.json()
        setStore(result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { products } = store

    const { actions, dispatch } = useContext(Context)
    

    return (
        <Container>
            <h1>Home</h1>
            <div>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/cart"> Cart </NavLink>
            </div>

            <div className='products'>

                {!products
                    ? <h1> No data to show </h1>
                    : products.map(item => {
                        return (
                            <div key={item.id} className='card'>

                                <h3> {item.title} </h3>
                                <p>  {item.description.slice(0, 40)}</p>
                                <button onClick={() => dispatch(
                                    {
                                        type: actions.add,
                                        payload: item
                                    }
                                )}> Add to Cart </button>

                            </div>
                        )
                    })
                }
            </div>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    gap: 40px;
    flex-direction: column;

    div{
        display: flex;
        gap: 40px;
    }

    .products{
        display: grid;
        grid-template-columns: repeat(3,1fr);


        .card{
            display: flex;
            flex-direction: column;
            border: 1px solid black;
            border-radius: 10px;
            gap: 10px;
            padding: 20px;

            button{
                height: 40px;
                width: 200px;
                cursor: pointer;
                background-color: #1ca21c;
                border: none;
                outline: none;
                border-radius: 5px  ;
            }

        }

    }

    `
