import React, { forwardRef } from 'react'

const Child = (prop, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(Child)