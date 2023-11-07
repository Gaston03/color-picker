const ColorInput = ({ color, setColor}) => {
    return (
        <form className="inputForm" onSubmit={e => e.preventDefault()}>        
            <label htmlFor="color">Apply</label>
            <input 
                id='color'
                type="text"
                placeholder="Add color name"
                value={color}
                onChange={e => setColor(e.target.value)}
            />
        </form>
    )
}

export default ColorInput