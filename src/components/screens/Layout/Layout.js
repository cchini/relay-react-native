import React from 'react'
import { View, Text } from 'react-native'
import { QueryRenderer } from 'react-relay'
import styles from './Layout.styles'
import Icon from '../../stateless/Icon/Icon'
import Button from '../../stateless/Button/Button'
import CreatePostMutation from '../../../mutations/CreatePostMutation'
import environment from '../../../enviroment/graphRelay'
import {LayoutViewerQuery} from './Layout.query'

const Layout  = (Component) =>
  class ScreenReturn extends React.Component {

    state = {
      description: 'otro freddie',
      imageUrl: 'https://i.pinimg.com/originals/28/49/f2/2849f2fa0f8f7c6c360077e4b1206f58.jpg',
    }

    _handlePost = (viewerId) => {
      const {description, imageUrl} = this.state
      const post = {
        description,
        imageUrl,
        callback: () => console.log('x post'),
        viewerId,
      }
      CreatePostMutation(post)
    }

    render() {
      return (
        <QueryRenderer
        environment={environment}
        variables={{}}
        query={LayoutViewerQuery}
        render={({error, props}) => {
          if (error) {
            return (
              <View><Text>{error.message}</Text></View>
            )
          } else if (props) {
            return (
              <View style={styles.container}>
                <View style={styles.content} >
                  <View style={styles.containerLogo} >
                    <Icon />
                  </View>
                  <View style={styles.contentImages} >
                    <Component {...this.props} />
                  </View>
                  <View style={styles.contentFooter} >
                    <Button
                      onPress={() => this._handlePost(props.viewer.id)}
                    >
                      <Text>add</Text>
                    </Button>
                  </View>
                </View>
              </View>
            )
          }
          return (<Text>loading</Text>)
        }}
      />

      )
    }
  }

export default Layout