import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.card.name} : {this.props.card.number}
        </div>
      </div>
    )
  }

}

export default Card