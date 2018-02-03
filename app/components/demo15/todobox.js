import React,{Component} from 'react';
import {View} from 'react-native';
import ToDoListComponent from './todolist'
import ToDoInputComponent from './todoinput'

export default class ToDoBoxComponent extends Component{

    constructor(){
        super();
        this.state = {
            myList:[]
        }
    }

    addToList=(content)=>{
        //将content保存在todobox中
        var nowList = this.state.myList;
        nowList.push(content);
        this.setState({myList:nowList},()=>{
            console.log(
                "点击完todoinput中 添加按钮之后，todobox中状态是",
                this.state.myList);
        });
    }

    deleteFromList=(index)=>{
        var nowList = this.state.myList;
        nowList.splice(index,1);
          this.setState({myList:nowList},()=>{
            console.log(
                "点击完todoitem中 删除按钮之后，todobox中状态是",
                this.state.myList);
        });
    }

    render=()=>{
        return <View>
        <ToDoInputComponent funcAdd={this.addToList}></ToDoInputComponent>
        <ToDoListComponent funcDel={this.deleteFromList} list={this.state.myList} ></ToDoListComponent>
        </View>
    }
}