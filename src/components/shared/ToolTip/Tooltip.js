
import './ToolTip.css';
export default function ToolTip(props) {

    return (
        <>
            <div className='tooltip'>{props.text}</div>
        </>
    )
}