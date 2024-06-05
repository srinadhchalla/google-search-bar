import './index.css'

const SuggestionItem = props => {
  const {details, onArrowClick} = props
  const {suggestion} = details
  onchange = () => {
    onArrowClick(suggestion)
  }
  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onchange}
      />
    </li>
  )
}

export default SuggestionItem
