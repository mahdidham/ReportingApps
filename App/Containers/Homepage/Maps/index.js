import React, { Component } from 'react'
import { StatusBar, ActivityIndicator, FlatList, ScrollView, Platform, Alert, SafeAreaView, StyleSheet, AsyncStorage, Keyboard, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, ImageBackground, Dimensions, Image, View } from 'react-native'
import { allLogo } from '@Assets' import { getPosting } from '@Apis'

const { width, height } = Dimensions.get('window') import { toDp } from '@percentageToDP'
import MapView, { Marker } from 'react-native-maps'

type Props = {}

export default class Maps extends Component<Props> {
    constructor(props) { super(props); this.state = {
        data: [] }
    }

    componentWillMount() { getPosting().then(respon => {
        console.log(respon)
        this.setState({data: respon.data}) }).catch(e => {
        console.log(e) })
    }
    render() { 
        if(this.state.data.length === 0) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" /> 
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <MapView
                ref={ref => { this.map = ref; }} 
                style={styles.mapView} 
                initialRegion={{
                    latitude: -2.9709095, longitude: 104.715411, 
                    latitudeDelta: 0.0922, longitudeDelta: 0.0421,
                }} 
                >
                {
                    this.state.data.map( (item, index) => {
                        return ( 
                            <Marker
                                key={index} 
                                identifier={`id${index}`} 
                                coordinate= { 
                                    {
                                        latitude: parseFloat(item.latitude),
                                        longitude: parseFloat(item.longitude) 
                                    }
                                }
                            /> 
                        )
                    }) 
                }
                </MapView>
            </View>
        ) 
    }
}
const styles = StyleSheet.create( { 
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    mapView: {
        width,
        height: '100%' 
    }
})