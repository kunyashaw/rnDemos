import React, { Component } from "react";
import { FlatList, View, Text, TextInput, StyleSheet } from "react-native";
import ToDoInputComponent from "./todoinput";
import ToDoListComponent from "./todolist";

export default class ToDoBoxComponent extends Component {

    constructor() {
        super();
        this.state = { myList: [] }
    }
    rcvMsg = (data) => {
        var nowList = this.state.myList;
        nowList.push(data)
        this.setState({ myList: nowList })
        console.log(this.state.myList)
    }
    getIndex = (index) => {
        var nowList = this.state.myList;
        nowList.splice(index, 1);
        this.setState({ myList: nowList })
    }
    render() {
        return <View style={myStyles.container}>
            {/* <View style={{ height: 100, backgroundColor: '#eeeeee', alignItems: 'center' }}>
                <Text>水平居中</Text>
                <View style={{ backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15 }} />
               
            </View>

            {/* justify-content属性定义了项目在主轴上的对齐方式。 
            Justify Content
            在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
            子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
            对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
            *

            <View style={{ height: 100, backgroundColor: '#e6e6e6', justifyContent: 'center' }}>
                <Text>垂直居中</Text>
                <View style={{ backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15 }} />
           
            </View>


            <View style={{ height: 100, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center' }}>
                <Text>水平垂直居中</Text>
                <View style={{ backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15 }} />
           
            </View> */}
            <ToDoInputComponent style={myStyles.verticalCenter} callback={this.rcvMsg} />
            <ToDoListComponent style={myStyles.horizontalCenter} list={this.state.myList} delItem={this.getIndex} />
        </View>
    }
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        
    },

    horizontalCenter: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff0000'
    },

    verticalCenter: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00ff00'
    }

})