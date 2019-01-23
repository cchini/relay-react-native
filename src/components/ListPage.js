import React from 'react'
import Post from './Post'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { View, Text } from 'react-native'

class ListPage extends React.Component {

  render () {
    console.log('ListPage - render - environment', this.props.relay.environment)
    return (
      <View>
        <Text>Este es un texto</Text>
      </View>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    ...Post_viewer
    allPosts(last: 100, orderBy: createdAt_DESC) @connection(key: "ListPage_allPosts", filters: []) {
      edges {
        node {
          id
          description
          imageUrl
          ...Post_post
        }
      }
    }
  }
`)