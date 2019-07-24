import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Visualizer from './components/visualizer'

import {
  bubbleSort,
  insertionSort,
  quickSort,
  shellSort
} from './components/algorithms'

import './App.css'

let amount = 100
let randomNumbers = [...Array(amount).keys()].map(x => Math.random())

const algorithms = [
  {
    name: 'Shell sort',
    path: '/shell',
    algorithm: shellSort,
    data: shellSort(randomNumbers),
    prev: '/bubble',
    next: '/quick',
    speed: 10
  },
  {
    name: 'Quick sort',
    path: '/quick',
    algorithm: quickSort,
    data: quickSort(randomNumbers),
    prev: '/shell',
    next: '/insertion',
    speed: 10
  },
  {
    name: 'Insertion Sort',
    path: '/insertion',
    algorithm: insertionSort,
    data: insertionSort(randomNumbers),
    prev: '/quick',
    next: '/bubble'
    // speed: 0.2
  },
  {
    name: 'Bubble sort',
    path: '/bubble',
    algorithm: bubbleSort,
    data: bubbleSort(randomNumbers),
    prev: '/insertion',
    next: '/shell',
    speed: 1
  }
]

export default function App () {
  return (
    <Router>
      <Route path='/' exact render={() => <Redirect to='/shell' />} />

      {algorithms.map((item, index) => (
        <Route
          key={index}
          exact
          path={item.path}
          render={() => (
            // <Layout
            //   length={item.data.length}
            //   content={
                <Visualizer
                  algorithm={item.algorithm}
                  name={item.name}
                  next={item.next}
                  speed={item.speed}
              //   />
              // }
            />
          )}
        />
      ))}
    </Router>
  )
}
