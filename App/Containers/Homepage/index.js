import React, { Component } from 'react'
import { StatusBar, Text, ScrollView, Platform, Alert, SafeAreaView, StyleSheet, AsyncStorage, Keyboard, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, Dimensions, Image, View } from 'react-native'
import { allLogo } from '@Assets'
const { width, height } = Dimensions.get('window')
import { toDp } from '@percentageToDP'

import Home from './Home'
import Profile from './Profile'
import Maps from './Maps'

//type Props = {}
export default class Root extends Component/*<Props>*/ {

  constructor(props) {
    super(props);
    this.state = {
      nav: this.props.navigation.getParam('nav', 'home'),
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text allowFontScaling={false} style={styles.textTitle}>{'Nama Aplikasi'}</Text>
          </View>

          <View style={styles.content}>
            {
              this.state.nav === 'home' ? <Home navigation={this.props.navigation} /> :
              this.state.nav === 'maps' ? <View /> :
              //kok beda??
              <Profile navigation={this.props.navigation} />
              // <View />
            }
            <View />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => this.setState({nav: 'home'})} style={styles.touchFooter}>
              <Image source={allLogo.icHome} style={[styles.icMenuFooter, {tintColor: this.state.nav === 'home' ? '#2F5596' : '#424242' }]} />
              <Text allowFontScaling={false} style={[styles.textFooter, {color: this.state.nav === 'home' ? '#2F5596' : '#212121'}]}>{'Home'}</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => this.setState({nav: 'inbox'})} style={styles.touchFooter}>
              <Image source={allLogo.icMaps} style={[styles.icMenuFooter, {tintColor: this.state.nav === 'inbox' ? '#2F5596' : '#424242' }]} />
              <Text allowFontScaling={false} style={[styles.textFooter, {color: this.state.nav === 'inbox' ? '#2F5596' : '#212121'}]}>{'Maps'}</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => this.setState({nav: 'account'})} style={styles.touchFooter}>
              <Image source={allLogo.icProfile} style={[styles.icMenuFooter, {tintColor: this.state.nav === 'account' ? '#2F5596' : '#424242' }]} />
              <Text allowFontScaling={false} style={[styles.textFooter, {color: this.state.nav === 'account' ? '#2F5596' : '#212121'}]}>{'Profile'}</Text>
            </TouchableOpacity>
          </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F5596'
  },
  textTitle: {
    fontFamily: 'HelveticaNeue-Bold',
    color: '#FFFFFF',
    fontSize: toDp(20),
    fontWeight: '500',
  },
  content: {
    width,
    flex: 8,
    backgroundColor: 'white'
  },
  footer: {
    width,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ECECED',
    backgroundColor: '#F7F7F7'
  },
  touchFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icMenuFooter: {
    width: toDp(32),
    height: toDp(32),
    resizeMode: 'contain',
  },
  textFooter: {
    fontSize: toDp(12),
    fontFamily: 'HelveticaNeue-Light',
    fontWeight: '300'
  },
})