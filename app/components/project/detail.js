import React, { Component } from 'react';
import { View, Image, Text, Button, ScrollView } from 'react-native';

export default class MyDetailComponent extends Component {

    constructor() {
        super();
        this.state = {
            detail: {},
            picIndex:0,
            myTimer:null
        }
    }

    componentWillMount() {
        var id = this.props.navigation.state.params.id;
        fetch('http://172.163.0.90/admin/data/product/details.php?id=' + id).then((response) => response.json()).then((result) => {
            console.log(result);
            var detail = result.details;
            this.setState({ detail: detail })

            this.setState({myTimer:setInterval(()=>{
                var nowIndex = this.state.picIndex;
                nowIndex++;
                if(nowIndex>2){
                    nowIndex = 0;
                }
                this.setState({picIndex:nowIndex})
            },2000)});
            
        });
    }

    componentWillUnmount(){
        var timer = this.state.myTimer;
        if(timer){
            clearInterval(timer);
        }
        this.setState({myTimer:null});
        
    }

    handlePress = () => {

    }

    composeViews() {
        var detail = this.state.detail;
        return <View style={{ flex: 1 }}>
            <ScrollView >
                {
                    detail.picList && <Image style={{ resizeMode: 'stretch', height: 300, width: 340 }} source={{ uri: "http://172.163.0.90/admin/" + detail.picList[this.state.picIndex].md }}></Image>
                }
                <Text style={{ fontSize: 15 }}>{detail.title}</Text>
                <Text>{detail.subtitle}</Text>


            </ScrollView>


            <Button color="red" onPress={this.handlePress} title="编辑产品"></Button>
        </View>
    }

    render() {
        return this.composeViews()
    }
}