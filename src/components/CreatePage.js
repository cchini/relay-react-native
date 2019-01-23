import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../../relayEnviroment'
import CreatePostMutation from '../mutations/CreatePostMutation'
import Button from '../stateless/Button'

const CreatePageViewerQuery = graphql`
  query CreatePageViewerQuery {
    viewer {
      id
    }
  }
`;

class CreatePage extends React.Component {

  state = {
    description: '',
    imageUrl: '',
  }

  render () {
    return (
      <QueryRenderer 
        environment={environment}
        query={CreatePageViewerQuery}
        render={({error, props}) => {
          if (error) {
            return (
              <View><Text>{error.message}</Text></View>
            )
          } else if (props) {
            return (
              <View>
                <TextInput
                  style={[stylesInput.base, stylesInput.lighter]}
                  underlineColorAndroid="transparent"
                  value={this.state.description}
                  placeholder='Description'
                  onChangeText={value => {
                    this.setState({description: value})
                  }}
                />
                <Text />
                <TextInput
                  style={[stylesInput.base, stylesInput.lighter]}
                  underlineColorAndroid="transparent"
                  value={this.state.imageUrl}
                    placeholder='Image Url'
                  onChangeText={value => {
                    this.setState({imageUrl: value})
                  }}
                />
                <Text />
                <Button
                  onPress={() => this._handlePost(props.viewer.id)}
                ><Text>submit</Text></Button>
                <Text />
              </View>
            )
          }
          return (<Text>loading</Text>)
        }}
      />
    )
  }

  _handlePost = (viewerId) => {
    const {description, imageUrl} = this.state
    CreatePostMutation(description, imageUrl, viewerId,  () => console.log('x post'))
  }

}

const stylesInput = StyleSheet.create({
  base: {
    color: 'black',
    borderRadius: 3,
    marginRight: 2,
    padding: 8,
    fontSize: 14,
  },
  lighter: {
    backgroundColor: '#F8F8F8',
  },

})

export default CreatePage