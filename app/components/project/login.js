import React, { Component } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { setInterval, setTimeout } from 'core-js/library/web/timers';



export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            uName: '',
            uPwd: '',
            isLoadingShow: false,
            count: 3
        }
    }
    doLogin = () => {
        //alert("用户名是"+this.state.uName+" pwd is "+this.state.uPwd);
        console.log("用户名是" + this.state.uName + " pwd is " + this.state.uPwd);
        console.log(this.props.navigation);


        this.setState({ isLoadingShow: true });
        let myInterval = setInterval(() => {
            let nowCount = this.state.count;
            nowCount--;
            this.setState({ count: nowCount }, () => { console.log(this.state.count) });
            if (this.state.count == 0) {
                this.setState({ isLoadingShow: false, count: 3 });
                this.props.navigation.navigate('myMain');
                clearInterval(myInterval);
            }
        }, 1000);
    }

    componentWillMount(){
        setTimeout(()=>{
            console.log('----');
        },3000);
    }

    render = () => {
        return <View style={styles.container}>
            <View style={styles.content} > 
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image  source={require('../../img/order.png')}
                     style={{borderColor:'#ff0000',borderWidth:1, width: 100, height: 100, borderRadius: 50 }} />
                </View>
                <TextInput onChangeText={(text) => {
                    this.setState({ uName: text })
                }} placeholder="请输入用户名" />
                <TextInput keyboardType="numeric" secureTextEntry={true} onChange={(event) => { this.setState({ uPwd: event.nativeEvent.text }) }} placeholder="请输入密码" />
                <Button title="登录" onPress={this.doLogin}></Button>

            </View>
            {this.state.isLoadingShow &&
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                    />
                    <Text>{"登录倒计时:" + this.state.count}</Text>
                </View>}


        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    content: {
        flex: 1
    },
    loading: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.2)"
    }
}); 

// import React, { Component } from 'react';
// import { View, Button, StyleSheet, Image, TextInput } from 'react-native';

// export default class
//     LoginComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             uName: '',
//             uPwd: ''
//         };
//     }

//     handlePress = () => {
//         this.props.navigation.navigate('myMain')
//         console.log(this.refs.refuName);
//         console.log(this.refs.refuName._lastNativeText);
//         //跳转到main页面
//         // console.log(this.props.navigation);
//         // 
//         //alert("uname is "+this.state.uName+" upwd is "+this.state.uPwd);
//         //向服务器端 发送数据 user/login.php   
//         fetch("http://172.163.0.155/Framework_codes/React/data_rn/user/login.php?uname="
//             + this.state.uName + "&upwd=" + this.state.uPwd)
//             .then((response) => { return response.json() })
//             .then((response) => {

//                 //根据服务器端返回的code 来判断是否登录成功
//                 if (response.code == 200) {
//                     this.props.navigation.navigate('myMain')
//                 }
//                 else {
//                     // alert('登录失败!');
//                 }
//             })
//     }

//     handleChangeUName = (data) => {
//         //保存
//         this.setState({ uName: data });
//     }

//     handleChangeUPwd = (data) => {
//         this.setState({ uPwd: data });
//     }

//     render = () => {
//         return <View >
//             <View style={{ alignSelf: 'center' }}>
//                 <Image resizeMode="cover" style={myStyle.myImage}

//                     source={require('../../img/1.jpg')} />
//             </View>
//             <View>
//                 <TextInput ref="refuName"
//                     onChangeText={this.handleChangeUName}
//                     placeholder="请输入用户名" />
//                 <TextInput
//                     secureTextEntry={true}
//                     onChangeText={this.handleChangeUPwd}
//                     placeholder="请输入你的密码" />
//                 <Button
//                     title="登录"
//                     onPress={this.handlePress} />
//             </View>

//         </View>
//     }
// }

// const myStyle = StyleSheet.create({
//     myImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         borderColor: '#00eeee', borderWidth: 1
//     }
// })