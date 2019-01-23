import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from '../stateless/Button'
import CreatePage from './CreatePage'
import Post from './Post'

class ListPage extends React.Component {

  state={
    create :false,
  }

  create = () => <CreatePage />
  
  show = (props) => (
      <View>
          <View>
            {props.viewer.allPosts.edges.map(({node}) =>
              <Post key={node.id} post={node} viewer={props.viewer} />
            )}
          </View>
      </View>
    )

  render () {
    const { create } = this.state
    const showComponent = create ? this.create() : this.show(this.props)

    return (
      <View>
        { showComponent } 
        <Button onPress={() => {this.setState({create : true})}} ><Text>Create Post</Text></Button>
        <Text />
        <Button onPress={() => {this.setState({create : false})}} ><Text>Test</Text></Button>
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


