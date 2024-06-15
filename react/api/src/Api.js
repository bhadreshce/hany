import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Api = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products').then((res) => {
        //     return res.json()
        // }).then((result) => {
        //     console.log(result);
        //     setProducts(result)
        // })
        axios.get('https://fakestoreapi.com/products').then((result) => {
            // console.log(result.data);
            setProducts(result.data)
        })
    }, [])
    return (
        <>
            <div className='container d-flex flex-wrap'>
                {products.map((result) => {
                    return (
                        <>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={result.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{result.title}</h5>
                                    <p class="card-text">{result.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default Api