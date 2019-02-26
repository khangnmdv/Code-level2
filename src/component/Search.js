import React, {Component} from "react";

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <div className="search input">
                <input
                    value={this.state.term}
                    onChange={(event) => this.props.onSearchData(event.target.value)}
                    />
            </div>
        )
    }
}