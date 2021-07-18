import React from 'react'

import { decrementAction } from '../redux/actions'
import { connect } from 'react-redux'

const buttonStyle = {
    padding: "10px",
    backgroundColor: "#4aaccd",
    fontSize: "20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px"
}
const Decrement = ({ decrement }) => {
    return (
        <div style={{ margin: "10px" }}>
            <button 
            style={buttonStyle}
            onClick={decrement}
            >Decrement</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => dispatch(decrementAction())
    } 
}

export default connect(null, mapDispatchToProps)(Decrement);