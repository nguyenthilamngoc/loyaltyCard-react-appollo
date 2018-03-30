import React, { Component } from 'react'
import { CARD_CREATION_QUERY } from '../GraphqlQueries'
import { graphql } from 'react-apollo'

class CreateCard extends Component {
    state = {
        name: '',
        number: ''
    }
    render() {
        return (<div className="flex flex-column mt3">
            <input
                className="mb2"
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                placeholder="Card name"
            />

            <input
                className="mb2"
                value={this.state.number}
                type="text"
                onChange={e => this.setState({ number: e.target.value })}
                placeholder="Card number"
            />
            <button onClick={e => this.addCard()}>Submit</button>
        </div>)
    }
    addCard = async () => {
        const { name, number } = this.state;
        alert(`name = ${name}  ; number= ${number}`)
        await this.props.cardCreation(
            {
                variables: {
                    name,
                    number
                }
            });
        this.props.history.push('/')
    }
}

export default graphql(CARD_CREATION_QUERY, { name: 'cardCreation' })(CreateCard)