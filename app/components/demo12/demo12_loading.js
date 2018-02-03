import React,{Component} from 'react';
import {View,Button,ActivityIndicator} from 'react-native';

export default class 
    Demo12LoadingComponent extends Component{
        constructor(){
            super();
            this.state = {isLoading:false};
        }

        handlePress=()=>{
            //显示一个loading
            this.setState({isLoading:true})
        }

        render(){
            return <View>
                <Button onPress={this.handlePress}
                 title="登录"></Button>
                 {
                    this.state.isLoading &&  <ActivityIndicator/>
                 }
                 
                </View>
        }

}