import gql from 'graphql-tag'

export const CARD_LIST_QUERY = gql`
  query{
  allCards{
    name,
    number
}
}
`

export const CARD_CREATION_QUERY = gql`
  mutation CardMutation($name: String!, $number: String!) {
  createCard(name:$name, number:$number){
    id
    name
    number
    image
  }
}
`
