import React, { Component } from 'react'
import Sort from './Sort'
import Filter from './Filter'


export default class FilterBar extends Component {

    render() {
        // console.log("FilterBar props", this.props)
        
        return (
            <div style={{marginBottom: "10vh"}}>
                <Sort handleSort={this.props.handleSort} />
                <Filter handleFilter={this.props.handleFilter}/>
            </div>
        )
    }
}
