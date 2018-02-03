import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native';

export default
     class Demo06InputComponent extends Component{
        handleChange=(data)=>{
            //获取用户当前所输入的值
            console.log("当前输入框中的值是"+data);
        }

        render(){
            return <View>
                <TextInput 
                    value="123"
                    onChangeText={this.handleChange}
                    placeholder="plz input sth"/>
            </View>
        }
}