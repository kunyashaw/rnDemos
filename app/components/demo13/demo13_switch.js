import React,{Component} from 'react';
import {Switch,View} from 'react-native';
import Demo12LoadingComponent
 from '../demo12/demo12_loading';
// reactNative是如何来实现组件间的嵌套的呢？？
//答：只需要在render方法中 调用要嵌套的组件就行了

export default 
    class Demo13SwitchComponent extends Component{
        constructor(){
            super();
            this.state = {isSwitchOn:true};
        }

        render=()=>{
            return <View>
                 <Switch onValueChange={(status)=>{
                    this.setState({isSwitchOn:status})
                }}
              value={this.state.isSwitchOn}/>
              <Demo12LoadingComponent/>    
              </View>
        }

}