
import {PropTypes}  from 'prop-types'


export default function CounterButton({value,increaseParentMethod,decreaseParentMethod}){
    
    return(
        <div className="counter">
            
            <div className="Button">
                <button className="counter_btn" onClick={()=>increaseParentMethod(value)}>+{value}</button>
                <button className="counter_btn" onClick={()=>decreaseParentMethod(value)}>-{value}</button>
            </div>
        </div>
    
      
    )
}
CounterButton.propTypes = {
    value : PropTypes.number
}

CounterButton.defaultProps = {
    value : 1
}