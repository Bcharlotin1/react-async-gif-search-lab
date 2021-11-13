import React, { Component } from 'react'

export default class GifList extends Component {
    renderListformate = () =>{
        console.log(this.props.gifArray)
        return this.props.gifArray.map((gif)=>{
            return(
               <li>
                   <img alt={gif.url} src={gif.url} />
               </li>
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
