//googlesuggestions/index.js

import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {input: '', placeholder: ''}

  onchange = event => {
    this.setState({input: event.target.value})
  }

  onArrowClick = suggestion => {
    this.setState({input: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {input, placeholder} = this.state
    const SearchResults = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="card">
          <div className="searchBar">
            <img
              className="image1"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Google Search"
              className="input"
              onChange={this.onchange}
              value={input}
            />
          </div>
          <ul>
            {SearchResults.map(item => (
              <SuggestionItem
                details={item}
                key={item.id}
                onArrowClick={this.onArrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
