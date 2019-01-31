import React from 'react'
import { Text } from 'react-native'
import {QueryRenderer} from 'react-relay'
import Layout from '../Layout/Layout'
import ListPost from '../Posts/ListPosts'
import {HomeViewerQuery} from './Home.query'
import enviroment from '../../../enviroment/graphRelay'

class Home extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={enviroment}
        query={HomeViewerQuery}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>{error.message}</Text>
          } else if (props) {
            return <ListPost viewer={props.viewer} />
          }
          return <Text>Loading</Text>
        }}
      />
    )
  }
}

export default Layout(Home)
