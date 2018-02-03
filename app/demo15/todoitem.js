import React,{Component} from "react";
import {View,Text,Button,StyleSheet} from "react-native";

export default class ToDoItemComponent extends Component{
    handlePress=()=>{
        this.props.delete(this.props.index)
    }
    render(){
        console.log("to do item");
        return     <View>
            <Text style={style.myfont}>{this.props.val}</Text>
            <Button title="delete" onPress={this.handlePress}> </Button>
        </View>
    }
}
const style=StyleSheet.create({
   myfont:{
       fontSize:20,
       fontWeight:"bold"
   }
})