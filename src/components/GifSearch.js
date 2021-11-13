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
                    <button type="submit" value={this.state.input} onClick={this.props.submitHandler}>Search</button>
                </form>
                
            </div>
        )
    }
}
