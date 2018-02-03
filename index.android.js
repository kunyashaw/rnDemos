/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Demo01Component
from './app/components/demo01/demo01_basic'
import Demo02Component 
from './app/components/demo02/demo02_css'
import Demo03ButtonComponent 
from './app/components/demo03/demo03_button'
import Demo04StateComponent 
from './app/components/demo04/demo04_state'
import Demo05ImageComponent
from './app/components/demo05/demo05_image'
import Demo06InputComponent
from './app/components/demo06/demo06_input'
import Demo07Component
from './app/components/demo07/demo07_lianxi'
import Demo08ListComponent
from './app/components/demo08/demo08_list'
import Demo09FetchComponent
from './app/components/demo09/demo09_fetch'
import Demo10OpacityComponent
from './app/components/demo10/demo10_opacity'
import Demo11Component
from './app/components/demo11/demo11_lianxi'
import Demo12LoadingComponent from 
'./app/components/demo12/demo12_loading'
import Demo13SwitchComponent 
from './app/components/demo13/demo13_switch'
import ToDoBoxComponent
from './app/components/demo15/todobox'

import ListComponent from './app/components/demo14/list'
import DetailComponent from './app/components/demo14/detail'
import LoginComponent from './app/components/project/login'
import MainComponent from './app/components/project/main'
import ProductListComponent from './app/components/project/productList'
import UserListComponent from './app/components/project/userList'
import MyDetailComponent from './app/components/project/detail'
import {StackNavigator} from 'react-navigation'

import {MyMainComponent} from './app/components/projects/mymain';
import MyListComponent from './app/components/projects/myList'

// stackNavigator默认加载配置中的第0个元素
const myRouter = StackNavigator({
  myMain:{
    screen:MainComponent,
    navigationOptions: ({navigation}) => ({
      title:'管理页面',
      headerLeft: null,
      headerTitleStyle:{alignSelf:'center'},
    }),
  },
  myDetail:{
    screen:MyDetailComponent
  },
  myUserList:{
    screen:UserListComponent
  },
  myProductList:{
    screen:ProductListComponent
  },
  myLogin:{
    screen:LoginComponent
  }
 
});

AppRegistry.registerComponent(
  'myapp', () => myRouter);
