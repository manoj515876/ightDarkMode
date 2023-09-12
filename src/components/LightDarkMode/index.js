import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  onChangeMode = () => {
    this.setState(preState => ({
      isDark: !preState.isDark,
    }))
  }

  render() {
    const {isDark} = this.state

    let headingClassName
    let cardClassName
    let text

    if (isDark) {
      headingClassName = 'heading-dark'
      cardClassName = 'card-dark'
      text = 'Light Mode'
    } else {
      headingClassName = 'heading-light'
      cardClassName = 'card-light'
      text = 'Dark Mode'
    }

    return (
      <div className="container">
        <div className={cardClassName}>
          <h1 className={headingClassName}>Click to Change Mode</h1>
          <div>
            <button className="btn" type="button" onClick={this.onChangeMode}>
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
