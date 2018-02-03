import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Row from './row'
import Col from './col'
export default class MainComponent extends Component {
    jump(desPath) {
        this.props.navigation.navigate(desPath);
    }
    render() {
        return <ScrollView style={{ backgroundColor: 'powderblue', flex: 1 }}>

            {/* 第一行 */}
            <Row>
                <Col >
                    <View style={[myStyle.myCol, myStyle.myBorder]}>
                        <Text>300</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                </Col>
                <Col >
                    <View style={[myStyle.myCol, myStyle.myBorder]}>
                        <Text>300</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                </Col>

                <Col >
                    <View style={[myStyle.myCol, myStyle.myBorder]}>
                        <Text>300</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                </Col>
            </Row>
            {/* 第二行 */}
            <Row>
                <Col >
                    <View style={[myStyle.myCol, myStyle.myBorder]}>
                        <Text>300</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                </Col>

                <Col >
                    <View style={[myStyle.myCol, myStyle.myBorder]}>
                        <Text>300</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                </Col>
            </Row>
            {/* 第三行 */}
            <Row>
                <Col>
                    <TouchableOpacity style={myStyle.myCol}>
                        <Image style={myStyle.myImg} source={require("../../img/order.png")} />
                        <Text>订单管理</Text>
                    </TouchableOpacity>
                </Col>

                <Col>
                    <TouchableOpacity onPress={() => { this.jump('myUserList') }} style={myStyle.myCol}>
                        <Image style={myStyle.myImg} source={require("../../img/user.png")} />
                        <Text>用户管理</Text>
                    </TouchableOpacity>
                </Col>

            </Row>
            {/*第四行*/}
            <Row>
                <Col>
                    <TouchableOpacity style={myStyle.myCol} onPress={() => { this.jump('myProductList') }}>
                        <Image style={myStyle.myImg} source={require("../../img/product.png")} />
                        <Text>商品管理</Text>
                    </TouchableOpacity>
                </Col>
                <Col>
                    <TouchableOpacity style={myStyle.myCol}>
                        <Image style={myStyle.myImg} source={require("../../img/setting.png")} />
                        <Text>设置</Text>
                    </TouchableOpacity>
                </Col>
            </Row>


        </ScrollView>
    }
}

const myStyle = StyleSheet.create({
    myContainer: {
        flexDirection: 'row'
    },
    myCol: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    myBorder: {
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#e6e6e6'
    },
    myImg: {
        width: 80, height: 80
    }
})

