import { memo } from "react"

function ContentCallback ({onIncrease}) {
    console.log('re-render content callback')
    return (
        <button onClick= {onIncrease} style={{marginLeft: '10px'}}> Click use callback </button> 
    )
}

export default memo(ContentCallback)