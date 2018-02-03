import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button} from 'react-native'

export default class ToDoInputComponent extends Component{

    constructor(){
        super();
        this.state = {
            myValue:''
        }
    }

    handlePress=()=>{
            //调用父组件传来的带有参数的方法
            this.props.funcAdd(this.state.myValue);
    }

    handleChange=(data)=>{
        this.setState({myValue:data})
    }

    render(){
        return <View>
                <Text>待做事项列表</Text>
                <TextInput onChangeText={this.handleChange} placeholder="请输入待做事项"/>
                <Button onPress={this.handlePress} title="添加"/>
            </View>
    }

}