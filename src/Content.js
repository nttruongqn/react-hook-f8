import { memo } from 'react';

function Content({count}) {
    console.log('re-render');

    return (
        <>
            <h2>Hello {count} </h2>
            {/* <button onClick={handleIncrease}>Click me</button> */}
        </>
    )
}
export default memo(Content)