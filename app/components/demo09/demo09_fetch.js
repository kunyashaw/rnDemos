import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';

export default class
 Demo09FetchComponent extends Component{
    
    handlePress(){
        //按钮点按时的处理函数
        fetch("http://172.163.0.155/framework_codes/test.php")
        .then((response)=>{return response.json()})
        .then((response)=>{
            console.log("服务器端返回的数据为:",response);
        })
    }

    render(){
        return <View>
                <Button onPress={this.handlePress} 
                title="获取数据"></Button>
            </View>
    }

}