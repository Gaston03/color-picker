const ColorSquare = ({color, title}) => {
    return (
        <div 
            className="colorSquare"
            style={{backgroundColor: color}}
        >
            {title}
        </div>
    )
}

export default ColorSquare