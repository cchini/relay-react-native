import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import { View, Text } from 'react-native'
import environment from '../../relayEnviroment'
import ListPage from './ListPage'

const HomeAllPostQuery = graphql`
  query HomeAllPostQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`

class Home extends Component {
  render() {
    return (
      <View>
        <QueryRenderer
          environment={environment}
          query={HomeAllPostQuery}
          render={({error, props}) => {
            if (error) {
              return <Text>{error.message}</Text>
            } else if (props) {
              return <ListPage viewer={props.viewer} />
            }
            return <Text>Loading</Text>
          }}
        />
      </View>
    )
  }
}

export default Home
