import React, { Component } from 'react';
import axios from 'axios';




export default class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirm: false
        };

        this.toggle = this.toggle.bind(this);
        this.remove = this.remove.bind(this);
    }

    toggle() {
        this.setState({ showConfirm: !this.state.showConfirm});
    }

    remove() {
       axios.delete(`/api/articles/${this.props.id}`).then(() => {
          this.props.fetchArticles()
       })
    }


    render(){

     
        return(
            <div>
                <button onClick={ this.toggle } disabled={ this.state.showConfirm}>Delete</button>
                {
                    this.state.showConfirm
                    ?
                    <div>
                        <button onClick={this.toggle}> Cancel</button>
                        <button onClick={this.remove}> Confirm</button>
                    </div>
                    :
                        null
                }
            </div>
        )
    }
}