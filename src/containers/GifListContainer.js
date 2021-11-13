import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifArray:[]
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then((response) => response.json())
        .then((data)=>{
            this.setState({
                gifArray: data.data.splice(0,3)
            })
        })
    }

    handleSubmit = (event, query)=>{
        event.preventDefault()
        debugger
        
    }

    render() {
        return (
            <div >
                <GifList gifArray={this.state.gifArray}/>
                <GifSearch  submitHandler={this.handleSubmit}/>
            </div>
        )
    }
}
