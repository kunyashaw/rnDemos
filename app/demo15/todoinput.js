import React,{Component} from "react";
import {FlatList,View,Text,TextInput,Button,StyleSheet} from "react-native";

export default class ToDoInputComponent extends Component{
    constructor(){
        super();
        this.state={myInput:""}
    }
    handleChange=(data)=>{
        this.setState({myInput:data})
    }
    handlePress=()=>{
        this.props.callback(this.state.myInput);
        this.setState({myInput:""})
        //console.log(this.state.myInput);
    }
    render(){
        return <View>
                <TextInput value={this.state.myInput} placeholder="请输入...." onChangeText={this.handleChange} style={style.myinput}/>
                <Button title="ADD" onPress={this.handlePress}></Button>
            </View>
    }
}
const style=StyleSheet.create({
    myinput:{
        width:300,
        height:50
    }
})