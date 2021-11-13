import React, { Component } from 'react'

export default class GifList extends Component {
    renderListformate = () =>{
        this.props.gifArray.map((gif)=>{
            return(
               <li>gif</li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderListformate()}
                </ul>
            </div>
        )
    }
}
