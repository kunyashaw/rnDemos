
import React,{Component} from 'react';
import {Button,Text,View} from 'react-native';

export default class ToDoItemComponent extends Component{

    handlePress=()=>{
        this.props.deleteFunc(this.props.myIndex);
    }

    render(){
        return <View>
            <Button title="删除" onPress={this.handlePress}/>
            <Text>{this.props.myValue}</Text>
        </View>
    }

}