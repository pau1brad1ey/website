import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './scrollToTop.css'



class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {opacity: 0}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      opacity: window.scrollY > 100 ? 1 : 0
    })
  }



  scrollToTop () {
    const element = document.documentElement || document.body
    const duration = 500
    const start = element.scrollTop
    let change = 0-start
    let currentTime = 0
    let increment = 20

    const animateScroll = function () {
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
      }

      const val = easeInOutQuad(currentTime, start, change, duration)

      currentTime += increment
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }

  // t = current time
  // b = start value
  // c = change in value
  // d = duration



  render() {
    return (
      <div id='back-to-top' onClick={this.scrollToTop} style={{opacity: this.state.opacity}} />
    )
  }
}

export default ScrollToTop
