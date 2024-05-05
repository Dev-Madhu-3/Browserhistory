import {Component} from 'react'
import './index.css'

class ListItem extends Component {
  delete = event => {
    const {eachItem, onDelete} = this.props
    const {id} = eachItem
    onDelete(id)
  }

  render() {
    const {eachItem} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = eachItem
    return (
      <li className="container">
        <div className="sub-con">
          <p className="time">{timeAccessed}</p>
          <img className="item-logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <a className="Url" href={domainUrl} target="_blank" rel="noreferrer">
            <p>{domainUrl}</p>
          </a>
        </div>
        <button className="btn" onClick={this.delete} data-testid="delete">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default ListItem
