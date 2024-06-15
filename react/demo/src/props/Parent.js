import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
const name = 'my app'
const Parent = () => {
    return (
        <>
            <Child1 data={name} value={'hiii'} />
            <Child2 data={name} />
        </>
    )
}

export default Parent