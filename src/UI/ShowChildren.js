import React from "react";
import { View, Dimensions } from 'react-native'
import action_type from "./action_type"


const ShowChildren = (props) => {
  const { show, children } = props
  if (show === action_type.SHOW_CHILDREN && children) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: Dimensions.get('window').width - 32 }}>
        {children}
      </View>
    )
  }
  return <></>
}

export default ShowChildren