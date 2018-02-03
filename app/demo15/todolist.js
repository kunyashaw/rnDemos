import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ToDoItemComponent from "./todoitem";

export default class ToDoListComponent extends Component {
    constructor() {
        super();
        this.state = { rcvList: [] }
    }
    componentWillReceiveProps = () => {
        this.setState({ rcvList: this.props.list });
        console.log(this.state.rcvList);
    }

    showListItem = (info) => {
        console.log("show list item");
        return <ToDoItemComponent val={info.item} index={info.index} delete={this.props.delItem} />
    }
    render() {
        /*      //<FlatList data={this.props.list} renderItem={this.showListItem}/>
            //直接将属性的值赋值给data,当属性的值变化时,视图是不会更新的
            //此方法需要用到componentWillReceiveProps(),属于Update生命周期函数的一个方法,当属性发生改变时,自动调用
          return   <View>
                {
                    this.props.list.map((content,index)=>{
                        return <ToDoItemComponent val={content} index={index} delete={this.props.delItem}/>
                    })
                }
              </View>
        */
        return <View style={myStyles.container}>
            <View style={{ flex: 1}}>
                <View style={{ width: 100, height: 100, backgroundColor: 'powderblue',alignItems:'center' }} >
                <Text>水平居中</Text>
                </View>
                
                <View style={{ width: 100, height: 100, backgroundColor: 'skyblue',justifyContent:'center' }} >
                <Text>垂直居中</Text>
                </View>
                <View style={{ width: 100, height: 100, backgroundColor: 'steelblue',justifyContent:'center',alignItems:'center' }} >
                <Text>水平垂直居中</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FlatList style={myStyles.myList} extraData={this.state} data={this.state.rcvList} renderItem={this.showListItem} />
            </View>
        </View>
    }
}


const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },

    myList: {
        width: 80,
        backgroundColor: '#ff0000'
    }

})