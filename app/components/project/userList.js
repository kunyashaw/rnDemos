import React,{Component} from 'react';
import {FlatList,Image,Text,TouchableOpacity} from 'react-native';

export  default class UserListComponent extends Component{

    constructor(){
        super();
        this.state = {
            list:[]
        }
    }

    componentWillMount(){
        console.log('准备获取数据');
        fetch('http://192.168.1.12/admin/data/user_list.php')
        .then((response)=>response.json())
        .then((result)=>{
            
            //result.data加key
            var nowList = result.data;
            console.log(nowList);
            for(var i=0;i<nowList.length;i++){
                nowList[i].key = i;
            }
            this.setState({list:nowList},()=>{
                console.log(this.state.list)
            })
        })
    }

    showItem=(info)=>{
        return <TouchableOpacity style={{height:100,flexDirection:'row'}}>
            <Image  style={{width:30,height:30,borderRadius:15}} source={require('../../img/order.png')}></Image>
            <Text>{info.item.user_name}</Text>
        </TouchableOpacity> 
    }

    render(){
        return <FlatList
        renderItem={this.showItem}
        extrdData={this.state} data={this.state.list}></FlatList>
    }
}