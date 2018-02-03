import React,{Component} from 'react';
import {View,ScrollView,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

export class MyMainComponent extends Component{
    render(){
        return <ScrollView      style={{backgroundColor:'powderblue',flex:1}}>
            {/* 第一行 */}
            <View style={myStyle.myContainer}>     
                <View style={myStyle.myCol}>
                    <Text>300</Text>
                    <Text>当日PC端PV量</Text>
                </View>
                <View style={myStyle.myCol}>
                    <Text>300</Text>
                    <Text>当日PC端PV量</Text>
                </View>
            </View>    
            {/* 第二行 */}
            <View style={myStyle.myContainer}>     
                <View style={myStyle.myCol}>
                    <Text>300</Text>
                    <Text>当日PC端PV量</Text>
                </View>
                <View style={myStyle.myCol}>
                    <Text>300</Text>
                    <Text>当日PC端PV量</Text>
                </View>
            </View>    
            {/* 第三行 */}
                <View style={myStyle.myContainer}>
                    <TouchableOpacity  
                    onPress={()=>{
                        this.props.navigation.navigate('myProductList');
                    }}
                    style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80,height:80}} source={require("../../img/order.png")}/>   
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80,height:80}} source={require("../../img/order.png")}/>   
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                </View>  
            {/*第四行*/}
            <View style={myStyle.myContainer}>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80,height:80}} source={require("../../img/order.png")}/>   
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80,height:80}} source={require("../../img/order.png")}/>   
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                </View>
                        {/*第5行*/}
                        <View style={myStyle.myContainer}>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80,height:80}} source={require("../../img/order.png")}/>   
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80,height:80}} source={require("../../img/order.png")}/>   
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    }
}

const myStyle = StyleSheet.create({
    myContainer:{
        flexDirection:'row'
    },
    myCol:{
        flex:1,
        height:100,
        borderRightWidth:2,
        borderBottomWidth:2,
        borderColor:'#e6e6e6',
        alignItems:'center',
        justifyContent:'center'
    }
})

