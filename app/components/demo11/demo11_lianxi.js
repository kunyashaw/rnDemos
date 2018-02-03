import React,{Component} from 'react';
import {FlatList,TouchableOpacity,Text} from 'react-native';

export default class Demo11Component extends Component{
    
    constructor(){
        super();
        //初始化一个状态
        this.state = {
            myList:[]
        };
    }

    componentDidMount(){
        //获取数据 并 保存在状态中
        fetch("http://172.163.0.155/framework_codes/test.php")
        .then((response)=>{return response.json()})
        .then((response)=>{
            //response就是服务器端所返回的对象数组
            //设置状态
            this.setState({myList:response});
        })
    }

    handlePress=(index)=>{
        alert('item is clicked'+index);
    }

    showListItem=(info)=>{
        return <TouchableOpacity 
            onPress={()=>{
                this.handlePress(info.index)
            }}
             key={info.index}>
                <Text>{info.item.name}</Text>
            </TouchableOpacity>
    }

    render(){
        return <FlatList 
        renderItem={this.showListItem}
        data={this.state.myList} />
    }
}