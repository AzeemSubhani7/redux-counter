import React from 'react'
import { incrementAction } from '../redux/actions'
import { connect } from 'react-redux'

const buttonStyle = {
    padding: "10px",
    backgroundColor: "#31Facd",
    fontSize: "20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px"
}

const Increment = ({ increment }) => {
    return (
        <div style={{ margin: "10px" }}>
            <button 
            style={buttonStyle}
            onClick={() => increment()}
            >Increment</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementAction())
    }
}

export default connect(null, mapDispatchToProps)(Increment);