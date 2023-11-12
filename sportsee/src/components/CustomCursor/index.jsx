import { Rectangle } from 'recharts'

const CustomCursor = (props) => {
    const { points, width, height } = props
    const { x, y } = points[0]

    return (
        <Rectangle
            fill="rgba(0,0,0,0.1)"
            stroke="rgba(0,0,0,0.1)"
            x={x}
            y={y}
            width={width}
            height={height}
        />
    )
}
export default CustomCursor
