import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { brickUrl } from './utilities.js'

export default class Bricks extends Component {
  render() {
    const imageUrl = brickUrl(this.props);
    return (
      <div className='brick'>
        <img width='300px' alt='masonary brick' src={imageUrl}/>
      </div>
    )
  }
}

Bricks.propTypes = {
  farm_id: PropTypes.number.isRequired,
  server: PropTypes.string.isRequired,
  photo_id: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired
};
