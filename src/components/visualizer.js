import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Bar from './bar'

export default class Visualizer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      history: [],
      numbers: [],
      active: [],
      size: 0,
      scalingFactor: Math.floor(window.innerHeight) * 0.8,
      paused: false,
      finised: false,
      redirect: false,

    }

    this.speed = this.props.speed || 2
    this.index = 0
    this.algorithm = this.props.algorithm
  }

  init () {}

  componentDidMount () {
    this.listener = window.addEventListener('keydown', e => {
      if (e.key === 'f') {
        this.stop()
        this.setState({
          nextUrl: this.props.next
        })
      } else if (e.key === 'b') {
        this.stop()
        this.setState({
          nextUrl: this.props.prev
        })
      }
    })

    let amount = 100

    let randomNumbers = [...Array(amount).keys()].map(x => Math.random())

    window.addEventListener('resize', () => {
      this.setState({
        size: window.innerWidth / amount,
        scalingFactor: Math.floor(window.innerHeight) * 0.8
      })
    })

    window.addEventListener('orientationchange', () => {
      this.setState({
        size: window.innerWidth / amount,
        scalingFactor: Math.floor(window.innerHeight) * 0.8
      })
    })

    this.setState({
      size: this.props.size || window.innerWidth / amount
    })

    this.setState({
      history: this.algorithm(randomNumbers)
    })

    this.interval = setInterval(() => {
      if (!this.state.paused) {
        this.index++ >= this.state.history.length
          ? this.stop()
          : this.setState(this.state.history[this.index])
      }
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
    window.removeEventListener('keydown', this.listener)
  }

  start () {}

  stop () {
    clearInterval(this.interval)
    this.setState({
      redirect: true
    })
  }

  render () {
    // const {redirect, size, active} = this.state


    if (this.state.redirect) {
      return <Redirect to={this.props.next} />
    }

    return (
      <div
        className='App'
        style={{
          margin: '0 auto',
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <div style={{ position: 'relative', margin: '0 auto' }}>
          <svg width={`${window.innerWidth}px`} height={`100vh`}>
            {this.state.numbers.map((x, index) => {
              let width = this.state.size

              const data = {
                index,
                width,
                value: x * this.state.scalingFactor,
                fill: this.state.active.includes(index) ? '#FE6A6A' : '#72D7D1'
              }

              return <Bar key={index} data={data} />
            })}
          </svg>
        </div>
      </div>
    )
  }
}
