import React,{Component} from 'react';
import {View,TextInput} from 'react-native';

export default 
    class Demo07Component extends Component{
        
        constructor(){
            super();
            this.state = {myValue:'zhangsan'};
        }

        handleChange=(data)=>{
            this.setState({myValue:data});
        }

        render(){
            return <View>
                <TextInput 
                onChangeText={this.handleChange}
                value={this.state.myValue}/>
            </View>
        }


}