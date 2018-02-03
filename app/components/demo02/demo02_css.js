import React,{Component} from 'react';

import {Text,View,StyleSheet} from 'react-native';

export default class Demo02Component extends Component{
    render(){
        return <View>
                <Text style={{color:'red',fontSize:20}}>
                    hello
                </Text>
                <Text style={myStyles.myText}>style sheet</Text>
            </View>
    }
}

const myStyles = StyleSheet.create({
    myText:{
        color:'red',
        fontSize:30
    }
});