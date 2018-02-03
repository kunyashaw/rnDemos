import React,{Component} from 'react';
import {FlatList,View,Image,Text,TouchableOpacity} from 'react-native';

export default class MyListComponent extends Component{
    constructor(){
        super();
        this.state = {
            myList:[]
        }
    }

    componentWillMount=()=>{
        fetch('http://192.168.1.91/ajia_code/data/product/list.php')
        .then((response)=>response.json())
        .then((response)=>{
            var list = response.data;
            for(var i=0;i<list.length;i++)
            {
                list[i].key = i;
            }
            console.log(list);
            this.setState({myList:list})
        })
    }
    
    showItem=(info)=>{
        return <TouchableOpacity 
        key={info.index}
        onPress={()=>{
            alert('该商品售出了'+this.state.myList[info.index].sold_count);
        }}
        style={{flexDirection:'row',alignItems:'center'}}>
            
            <Image style={{width:80,height:80}} source={{uri:'http://192.168.1.91/ajia_code/'+info.item.pic}}/>
            <Text>{info.item.title}</Text>
            <Text>{'\n'}</Text>
        </TouchableOpacity>
    }

    render(){
        return <FlatList 
        renderItem={this.showItem}
        data={this.state.myList}/>
    }

}