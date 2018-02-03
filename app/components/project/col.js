import React,{Component} from 'react';
import {View} from 'react-native';

export default class Col extends Component{
    render(){
        return <View style={{flex:1}}>
            {
                React.Children.map(this.props.children,(child)=>{
                    return child
                })
            }
        </View>
    }
}