function ColorBox(props) {
    return (
        <div className="box" style={{ backgroundColor: props.bgColor, opacity: props.opacity }}></div>
    )
}

export default ColorBox;