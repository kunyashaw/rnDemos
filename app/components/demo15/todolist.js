
import React,{Component} from 'react';
import {View,FlatList} from 'react-native';
import ToDoItemComponent from './todoitem'

// this.props.list.map((content,index)=>{
//                      return <ToDoItemComponent
//                       myIndex={index}
//                       deleteFunc={this.props.funcDel} 
//                       myValue={content}>
//                       </ToDoItemComponent>
//                  })
export default class ToDoListComponent extends Component{
    constructor(){
        super();
        this.state = {
            rcvList:[]
        }
    }

    // 是React组件中 和更新相关的处理函数，检测到属性值的变化
    componentWillReceiveProps(){
        //只要检测到 通过props所传来的todobox中状态变化，修改本地的状态
        this.setState({rcvList:this.props.list});        
    }

    showListItem=(info)=>{
        return <ToDoItemComponent
                       myIndex={info.index}
                       deleteFunc={this.props.funcDel} 
                       myValue={info.item}>
                       </ToDoItemComponent>
    }

    render(){
        return <View>
             <FlatList 
              extraData={this.state}
              data={this.state.rcvList}
              renderItem={this.showListItem}></FlatList>
            </View>
    }    
}