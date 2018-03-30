import React, { Component } from 'react'
import Card from './Card'
import { graphql } from 'react-apollo'
import {CARD_LIST_QUERY} from '../GraphqlQueries'

class CardList extends Component {

  render() {
    // const cardsToRender = [
    //   {
    //     id: '1',
    //     name: 'Carrefour😎 😎',
    //     number: 123456,
    //   },
    //   {
    //     id: '2',
    //     name: 'Auchan',
    //     number: '789456',
    //   }
    // ]

    // return (
    //   <div>{cardsToRender.map(card => <Card key={card.id} card={card} />)}</div>
    // )

      // 1
  if (this.props.cardsQuery && this.props.cardsQuery.loading) {
    return <div>Loading</div>
  }

  // 2
  if (this.props.cardsQuery && this.props.cardsQuery.error) {
    return <div>Error</div>
  }

  // 3
  const cardsToRender = this.props.cardsQuery.allCards

  return (
    <div>{cardsToRender.map(card => <Card key={card.id} card={card} />)}</div>
  )
  }
}

//export default CardList
export default graphql(CARD_LIST_QUERY, { name: 'cardsQuery' }) (CardList)