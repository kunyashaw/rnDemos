import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default 
    class Demo04StateComponent extends Component{
        constructor(){
            super();
            //初始化状态
            this.state={count:0};
        }

        handlePress=()=>{
            //按钮点按时 要执行的处理函数
            var nowCount = this.state.count;
            nowCount++;
            this.setState({count:nowCount});
        }

        render(){
            return <View>
                <Text>{this.state.count}</Text>
                <Button onPress={this.handlePress}
                 title="clickMe"></Button>
            </View>
        }
}