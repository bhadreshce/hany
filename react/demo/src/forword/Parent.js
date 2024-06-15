import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {

    const input = useRef('')

    const getData = () => {
        input.current.value = 5
        input.current.focus()
    }
    return (
        <>
            <Child ref={input} />
            <button onClick={() => {
                getData()
            }}>Click</button>
        </>
    )
}

export default Parent