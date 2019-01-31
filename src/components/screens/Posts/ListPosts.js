import React from 'react'
import { Image, ScrollView, View, Text } from 'react-native'
import styles from './Posts.styles'

class ListPosts extends React.Component {
  render () {
    const { viewer } = this.props
    return (
      <ScrollView
        scrollEnabled
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator
      >
        {viewer.allPosts.edges.map(({node}) =>
        <View
          key={node.id}
          style={styles.item}
        >
            <Image
              source={{uri: node.imageUrl}}
              style={styles.image}
            />
            <Text>Test</Text>
        </View>
        )}
      </ScrollView>
    )
  }
}

export default ListPosts