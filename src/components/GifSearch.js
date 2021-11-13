import React, { Component } from 'react'

export default class GifSearch extends Component {
    state ={
        input: ""
    }

    saveTextInput = (event) =>{
        this.setState({
            input: event.target.value
        })
    }
    
    handleSubmit= (event)=>{
        event.preventDefault()
        this.props.userInput(this.state.input)
    }

   
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="header-search">
                        <span>Search Gif Database</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search" 
                        onChange={this.saveTextInput}
                    />
                    <button type="submit" onClick={this.handleSubmit}>Search</button>
                </form>
                
            </div>
        )
    }
}
