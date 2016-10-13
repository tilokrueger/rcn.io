import 'styles/bootstrap.scss'
import 'app.scss'

//to use generators
import 'regenerator-runtime/runtime'
// import 'core-js/library/es6/promise' //required for IE11
import 'isomorphic-fetch' //required for IE11 and Safary

// import React from 'react'
// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React, { exclude: /.+Calendar|Connect|TopNavbar|/ })
//   // whyDidYouUpdate(React, { exclude: /.+Calendar|Connect|TopNavbar|Week|Row|Col|/ })
// }

import 'utils/polyfills'
import { render } from 'react-dom'
import Grid from 'client/styles/grid.js'
import { getConfiguredWithStoreRouter } from 'client/widgets/get-router.js'


let prevContainerWidth

let renderApp = function() {
  const browserWidth = window.document.body.offsetWidth
  const containerWidth = Grid.getContainerWidth(browserWidth)

  if (containerWidth === prevContainerWidth) {
    return
  }

  prevContainerWidth = containerWidth

  render(getConfiguredWithStoreRouter(containerWidth), document.getElementById('root'))
}

window.addEventListener('resize', renderApp)

//first time render
renderApp()
