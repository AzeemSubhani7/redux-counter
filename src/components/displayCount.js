import React from 'react'
import {connect} from 'react-redux'

const Count = (props) => {
    return (
        <div style={{ margin: "10px", fontSize: "20px"}}>
            Counter: {props.count}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}


export default connect(mapStateToProps)(Count);