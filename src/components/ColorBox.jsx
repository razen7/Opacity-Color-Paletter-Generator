export default function ColorBox({ bgColor, opacity }) {
    return (
        <div className="box" style={{ backgroundColor: bgColor, opacity: opacity }}></div>
    )
}
