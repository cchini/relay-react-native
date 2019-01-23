import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import stylesButton from './Button.styles'

const Button = props => {
  const { children } = props
  return (
    <TouchableOpacity
      {...props}
      style={[stylesButton.base, stylesButton.accent]}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button
