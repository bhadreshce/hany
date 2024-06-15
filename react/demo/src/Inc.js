import React, { useState } from 'react'

const Inc = () => {
    const [count, setCount] = useState(0)

    const setIncreement = () => {
        setCount(count + 1)
    }
    const setDecreement = () => {
        setCount(count - 1)
    }
    return (
        <>

            <button onClick={() => {
                setIncreement()
            }}>Increement</button>
            <h1>{count}</h1>
            <button onClick={() => {
                setDecreement()
            }}>Decreement</button>
        </>
    )
}

export default Inc