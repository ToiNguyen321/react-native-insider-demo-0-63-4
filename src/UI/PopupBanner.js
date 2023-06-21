import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import UI from '.';
import MColors from './MColors'


const BANNER_W = 327
const BANNER_H = 160
const resizeHeightBanner = (width) => width * (BANNER_H / BANNER_W)
const screenWidth = Dimensions.get('window').width

const PopupBanner = (props) => {
  const {
    title, content, btnLeftText, btnLeftAction, btnRightText, btnRightAction, isClose, banner, confirmStyleTitle = {}
  } =
    props;

  const onPressLeft = () => {
    UI.hideUI();
    btnLeftAction && btnLeftAction();
  };

  const onPressRight = () => {
    UI.hideUI();
    btnRightAction && btnRightAction();
  };

  return (
    <View style={styles.container}>
      {/* {
        isClose ? <Base_Button
          onPress={() => { UI.hideUI() }}
          hitSlop={{ top: 8, right: 8, left: 8, bottom: 8 }}
          style={styles.btnClose}>
          X
        </Base_Button> : <></>
      } */}
      {
        isClose ? <TouchableOpacity onPress={UI.hideUI} style={[styles.btnClose]}>
          <Text size='buttonLabel'>
            X
          </Text>
        </TouchableOpacity> : <></>
      }
      <Image
        source={banner}
        style={{
          width: screenWidth - 32,
          height: resizeHeightBanner(screenWidth - 32),
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        resizeMode='cover'
      />
      <View style={styles.contentWrap}>
        <Text style={{ marginBottom: 16, color: MColors.primary.violet14_065, fontSize: 24, fontWeight: 'bold' }} >
          {title ? title.toUpperCase() : 'alert'.toUpperCase()}
        </Text>
        <Text style={{ marginBottom: 16, color: MColors.primary.violet14_065, textAlign: 'justify' }} >
          {content ?? ''}
        </Text>
        <View style={styles.wrapBtn}>
          <TouchableOpacity onPress={onPressLeft} style={[styles.btn, { backgroundColor: 'white', borderWidth: 1, borderColor: MColors.gray.gray4 }]}>
            <Text size='buttonLabel' color={MColors.primary.violet14_065} style={{ paddingHorizontal: 24, ...confirmStyleTitle }} >
              {btnLeftText ? btnLeftText : "Confirm"}
            </Text>
          </TouchableOpacity>
          <View style={{ width: 16 }} />
          <TouchableOpacity onPress={onPressRight} style={styles.btn}>
            <Text size='buttonLabel' color={MColors.primary.violet14_065} style={{ paddingHorizontal: 24, ...confirmStyleTitle }} >
              {btnRightText ? btnRightText : 'Cancel'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MColors.gray.gray1,
    borderRadius: 16,
    width: screenWidth - 32,
  },
  contentWrap: {
    padding: 24
  },
  wrapBtn: {
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'center',
    height: 36,
    flexDirection: 'row',
  },
  btnClose: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    borderWidth: 1,
    borderColor: MColors.gray.gray4,
    justifyContent: 'center',
    alignItems: 'center',
    right: 8,
    top: 8,
    zIndex: 1,
    backgroundColor: MColors.gray.gray1,
  },
  btn: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    borderRadius: 36 / 2
  }
});

export default PopupBanner;
