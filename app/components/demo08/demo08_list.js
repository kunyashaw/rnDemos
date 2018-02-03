import React,{Component} from 'react';
import {FlatList,Text} from 'react-native';

export default 
    class Demo08ListComponent extends Component{

        componentWillMount(){
            console.log('组件准备挂载');
            this.list = 
            ['zhangsan','goudai','michael'];
        }

        showListItem(info){
            console.log(info);
            return <Text>{info.item}</Text>
        }

        render(){
            return <FlatList 
            renderItem={this.showListItem} 
            data={this.list}/>
        }
}

