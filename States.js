import React, { Component } from 'react'

export default class States extends Component {
    constructor(props){
        super(props)
         
        this.State = {
            name:"sriya"
        }
    }
    render() {

        setTimeout(() => {
            this.setState({name:"sriya kolluri"})
        }, 3000);
        return (
            <div>
                <h1>
                    {this.State.name}
                </h1>
            </div>
        )
    }
}
