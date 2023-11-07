import { useState } from "react"
import ColorInput from "./ColorInput"
import ColorSquare from "./ColorSquare"

const Content = () => {
    const [color, setColor] = useState('')

    return (
        <div className="content">
            <ColorSquare 
                title = {color || 'Empty value'}
                color={color}
            />
            <ColorInput 
                color = {color}
                setColor = {setColor}
            />
        </div>
    )
}

export default Content