import React, { useRef } from 'react'

const UseRef = () => {
    const input = useRef('')
    const getData = () => {
        // let input = document.getElementById('inpt').value
        // console.log(input);
        console.log(input.current.value);
        input.current.focus()
    }
    return (
        <>
            <input type="text" id='inpt' ref={input} />
            <button onClick={() => {
                getData()
            }}>Add</button>
        </>
    )
}

export default UseRef