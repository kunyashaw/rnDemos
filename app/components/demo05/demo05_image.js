import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default 
    class Demo05ImageComponent extends Component{
        
        render(){
            return <View>
                <Image style={{width:50,height:50}} 
                source={require('../../img/1.jpg')}/>
            </View>
        }
}