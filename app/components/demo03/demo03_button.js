import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class 
    Demo03ButtonComponent extends Component{

        handlePress(){
            alert('btn is pressed');
        }

        render(){
            return <View>
                <Button onPress={this.handlePress}
                 title="clickMe"></Button>
            </View>
        }

}