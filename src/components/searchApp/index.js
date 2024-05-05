import {Component} from 'react'
import './index.css'
import ListItem from '../historyListItem'

class SearchApplication extends Component {
  state = {initialHistoryList: this.props.initialHistoryList}

  onSearch = event => {
    const {initialHistoryList} = this.props
    const searchresult = initialHistoryList.filter(eachItem =>
      eachItem.title.toUpperCase().includes(event.target.value.toUpperCase()),
    )
    this.setState({initialHistoryList: searchresult})
  }

  onDelete = val => {
    const {initialHistoryList} = this.state
    const result = initialHistoryList.filter(eachItem => eachItem.id !== val)
    this.setState({initialHistoryList: result})
  }

  render() {
    const {initialHistoryList} = this.state
    return (
      <div>
        <div className="header">
          <img
            className="heading"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar-container">
            <label htmlFor="search-bar" className="search-logo">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </label>
            <input
              id="search-bar"
              type="search"
              placeholder="search history"
              onChange={this.onSearch}
            />
          </div>
        </div>
        <div className="content">
          {initialHistoryList.length === 0 ? (
            <p>There is no history to show</p>
          ) : (
            <ul className="card">
              {initialHistoryList.map(eachItem => (
                <ListItem
                  onDelete={this.onDelete}
                  eachItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default SearchApplication
