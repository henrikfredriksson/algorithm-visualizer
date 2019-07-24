import React, { Component } from 'react'
import Dock from 'react-dock'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

import './navbar.css'


export default class NavBar extends Component {
  constructor () {
    super()

    this.state = {
      isVisible: true,
      isLeavingPage: false
    }
  }

  componentDidMount () {
    this.setState({
      isVisible: false
    })

    this.listener = window.addEventListener('keydown', e => {
      if (e.key === 'F1' || e.key === ' ') {
        this.setState({
          isVisible: !this.state.isVisible
        })
      }
    })
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.listener)
  }

  render () {
    return (
      <div>
        <Dock
          fluid
          position='top'
          size={0.1}
          isVisible={this.state.isVisible}
          dockStyle={this.style}
          dim='transparent'
        >
          <div
            id='menuContent'
            onMouseLeave={() => {
              if (!this.state.isLeavingPage) {
                this.setState({
                  isVisible: false
                })
              }
            }}
          >
            <ul>
              <li>
                <Link
                  onClick={() => {
                    this.setState({
                      isLeavingPage: true
                    })
                  }}
                  to='/insertion'
                >
                  Insertion sort
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.setState({
                      isLeavingPage: true
                    })
                  }}
                  to='/bubble'
                >
                  Bubble Sort
                </Link>
              </li>
            </ul>
          </div>
        </Dock>
      </div>
    )
  }
}
