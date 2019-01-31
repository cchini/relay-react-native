import React from 'react'
import { View, StatusBar } from 'react-native'
import stylesTabBarTop from './TabBarTop.styles'

const BarTop = (Theme) => (Component) =>
  class ScreenReturn extends React.Component {

    static defaultProps = {
      Theme : 'dark',
    }

    static navigationOptions = {
      headerStyle: {
        backgroundColor: Theme === 'dark' ? 'black' : 'white',
        height: 1,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        borderBottomWidth: 0,
      },
      headerLeft: <View />,
    }

    render() {
      const theme = Theme === 'dark' ? 'light-content' : 'dark-content'
      return (
        <View style={stylesTabBarTop.container}>
          <StatusBar barStyle={theme} />
          <Component {...this.props} />
        </View>
      )
    }
  }

export default BarTop
