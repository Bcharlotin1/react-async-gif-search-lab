import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifArray:[]
    }

    componentDidMount(){
      this.fetchGifs()
    }

    fetchGifs = (userInput = "dolphin" )=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=jmQbEo0EgCWFPtAgs4rBNBG9Anxb46AP`)
        .then((response) => response.json())
        .then((data)=>{
            this.setState({
                gifArray: data.data.splice(0,3)
            })
        })
    }


    render() {
        return (
            <div >
                <GifList gifArray={this.state.gifArray}/>
                <GifSearch userInput={this.fetchGifs}/>
            </div>
        )
    }
}
