import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import DeletePostMutation from '../mutations/DeletePostMutation';

class Post extends React.Component {

  render () {
    return (
      <View>
        <Text>Este es un texto</Text>
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

export default FragmentContainer