import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import DeletePostMutation from '../mutations/DeletePostMutation';
import { View, Text, Image, StyleSheet } from 'react-native'

class Post extends React.Component {

  render () {
    return (
      <View >
        <Image 
          source={{uri: this.props.post.imageUrl}}
          style={styles.image} />
      </View>
    )
  }

  _handleDelete = () => {
    DeletePostMutation(this.props.post.id, this.props.viewer.id)
  }
}

const FragmentContainer =  createFragmentContainer(Post, graphql`
  fragment Post_viewer on Viewer {
    id
  }
  fragment Post_post on Post {
    id
    description
    imageUrl
  }
`)

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
  }
})
export default FragmentContainer