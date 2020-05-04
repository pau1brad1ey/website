import React from 'react'
import './preloader.css'

class Preloader extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visibility: 'visible' }
  }

  componentDidMount () {
    setTimeout(
      () => this.hidePreloader(),
      1000
    )
  }

  hidePreloader () {
    this.setState({
      visibility: 'hidden'
    })
  }

  render () {
    return (
      <div id='preloader' style={{ visibility: this.state.visibility }}>
        <div className='preloader'>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }
}

export default Preloader
