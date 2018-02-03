import React,{Component} from 'react';
import {Button,View} from 'react-native';

export default class ListComponent extends Component{
    handlePress=()=>{
      //  alert('btn is clicked');
        console.log(this.props.navigation);
        this.props.navigation.navigate('myDetail')
    }
    render(){
        return <View>
<Button title="btn1" onPress={this.handlePress}></Button>

        </View>
    }
}