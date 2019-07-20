import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class TopLoadingBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
        loadingBarProgress: 0
    }
  }



  componentDidMount() {
    // console.log(this.props.length)
    // Find a way to calculate how many state each algorithm has

    setInterval(()=> {
      this.setState({
        loadingBarProgress: this.state.loadingBarProgress + Math.floor(this.state.loadingBarProgress/this.props.length)
      })
    }, 2)
  }

  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    })
  }

  complete = () => {
    this.setState({ loadingBarProgress: 100 })
  }

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 })
  }

  render () {
    return (
      <div>
        <LoadingBar
          progress={this.state.loadingBarProgress}
          height={1}
          color='tomato'
          // onLoaderFinished={() => this.onLoaderFinished()}
        />
        {/* <button onClick={() => this.add(10)}>Add 10</button>
        <button onClick={() => this.add(30)}>Add 30</button>
        <button onClick={() => this.complete()}>Complete</button> */}
      </div>
    )
  }
}
