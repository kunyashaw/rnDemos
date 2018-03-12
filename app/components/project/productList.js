import React, { Component } from 'react';
import { View, FlatList, Image, ActivityIndicator,StyleSheet,TouchableOpacity, Text }
    from 'react-native';

export default class
    ProductListComponent extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            pno:0,
            pageCount:0,
            showLoading:false
        }
    }

    componentWillMount = () => {
        this.loadData();
    }

    loadMore=()=>{
        var nowPno = this.state.pno;
        nowPno++;
        if(nowPno > this.state.pageCount)
        {
            return;
        }
        this.setState({pno:nowPno,showLoading:true},
        ()=>{
            console.log(nowPno);
            this.loadData();  
        })
    }

    loadData = () => {
        console.log('ready to load data');
        var url = "http://172.163.0.90/data_vue_admin/product/list.php?pno="+this.state.pno;
        console.log(url);
        setTimeout(()=>{
            console.log('准备发起请求！');
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
                
                console.log(response);
                let list = response.data;
                this.setState({
                    pageCount:response.pageCount
                })
                var nowList = this.state.list;
                nowList = nowList.concat(list);
                for(var i=0;i<nowList.length;i++)
                {
                    nowList[i].key = i;
                }
                
                // console.log(nowList);
                this.setState({ list: nowList ,showLoading:false});

            })
        },1500)
 
    }

    handlePress(index){
        //alert(this.state.list[index].sold_count);
        this.props.navigation.navigate('myDetail',{id:this.state.list[index].lid})
    }
 /*   <View style={{flex:1,flexDirection:'column'}}>
    {
         this.state.list.map((content, index) => {
            let imgUrl = "http://192.168.137.1/"+content.pic;
            // console.log(imgUrl);
            return <TouchableOpacity onPress={()=>{this.handlePress(index)}} key={index} style={myStyles.container}>

                    <Image source={{ uri: imgUrl}} 
                        style={{ width: 80, height: 80, borderRadius: 40 }} />
                    <Text style={myStyles.colInfo}>
                            {content.title}
                    </Text>
                </TouchableOpacity>
            
        })
    }

</View>*/

    showListItem=(info)=>{
        let imgUrl = "http://172.163.0.90/"+info.item.pic;
        return  <View style={{flex:1,flexDirection:'column'}}>
                
                
                 <TouchableOpacity onPress={()=>{this.handlePress(info.index)}} key={info.index} style={myStyles.container}>
    
                        <Image source={{ uri: imgUrl}} 
                            style={{ width: 80, height: 80, borderRadius: 40 }} />
                        <Text style={myStyles.colInfo}>
                                {info.item.title}
                        </Text>
                </TouchableOpacity>
                </View>
    }
    renderFooter=()=>{
        if(!this.state.showLoading && this.state.pageCount == this.state.pno){
            return null;
        }
        return <View>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    }
    showEmpty=()=>{
        return <View style={{alignItems:'center'}}>
            <Text>加载数据中...</Text>
        </View>
    }
    render() {
        return <FlatList
        ListEmptyComponent={this.showEmpty}
        ListFooterComponent={this.renderFooter}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.5}
         data={this.state.list} renderItem={this.showListItem}/>
    }
}    



const myStyles = StyleSheet.create({
    container: {
        flex:1,flexDirection:'row'

    },
    colInfo: {
        flex: 1,
        height: 100,
        fontSize:15,
        alignItems:'center'
    },
});