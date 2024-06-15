import React, { useState } from 'react'

const T = () => {

    const [name, setName] = useState('heny')
    // let name = 'heny'
    const changeName = () => {
        // name = 'bbb'
        setName('bbb')
    }


    return (
        <>
            <h1>{name}</h1>
            <button onClick={changeName}>change name</button>
        </>

    )
}

export default T