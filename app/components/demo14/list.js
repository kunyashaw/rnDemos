import React,{Component} from 'react';
import {FlatList,Text,TouchableOpacity} 
from 'react-native';

export default class ListComponent extends Component{
    constructor(){
        super();
        this.state = {
            list:[
                {name:'zhangsan',age:20,key:0},
                {name:'goudai',age:21,key:1},
                {name:'erleng',age:22,key:2},
            ]
        };
    }

    jumpToDetail= ()=>{
        console.log(this.props.navigation);
        this.props.navigation.navigate('myDetail');
    }

    //info这个对象包含两个属性：item/index 
    showListItem=(info)=>{
        return <TouchableOpacity
                key={info.index}
             onPress={this.jumpToDetail}>
            <Text>{info.item.name}</Text>
        </TouchableOpacity>
    }

    render=()=>{
        return <FlatList 
            renderItem={this.showListItem}
            data={this.state.list}/>
    }
}