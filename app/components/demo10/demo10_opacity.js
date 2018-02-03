import React,{Component} from 'react';
import {TouchableOpacity,Text} from 'react-native';

export default class 
    Demo10OpacityComponent extends Component{
        render(){
            return <TouchableOpacity>
                <Text>it is a text</Text>
                <Text>it is a text 2</Text>
            </TouchableOpacity>
        }
}