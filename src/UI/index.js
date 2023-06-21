import React from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import ShowChildren from './ShowChildren';

let self = {};
class UI extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      show: '',
      children: null,
    }
    self = this;
  }

  componentDidUpdate(prevProps, prevState) {
    Keyboard.dismiss()
  }

  static hideUI = () => {
    self.setState({
      show: '', children: null,
    })
  }

  static showChildren = (children) => {
    self.setState({ show: action_type.SHOW_CHILDREN, children })
  }


  render() {
    const { show } = this.state
    let backgroundColor = 'rgba(19, 69, 135,.2)'
    if (!show) return <></>
    return <View style={[{ backgroundColor }, styles.container]}>
      <ShowChildren {...this.state} hideUI={UI.hideUI} />
    </View>
  }
}

let styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', height: '100%', width: '100%', zIndex: 9999 }
})

export default UI;