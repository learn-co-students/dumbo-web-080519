import React, { Component } from 'react'

export default class Sort extends Component {

    handleChange = (e) => {
        this.props.handleSort(e.target.value)
    }

    render() {
        // console.log("Sort props", this.props)
        return (
            <div style={{display: "inline-block"}}>
                <select onChange={this.handleChange}> 
                    <option value="All">All </option>
                    <option value="Weight"> Weight </option>
                    <option value="Name"> Name </option>
                </select>
            </div>
        )
    }
}
