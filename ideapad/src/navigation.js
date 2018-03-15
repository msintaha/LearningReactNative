import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginForm from './components/login-form';
import IdeaList from './components/idea-list';
import AddIdea from './components/add-idea';
import EditIdea from './components/edit-idea';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements';

const AuthStack = StackNavigator({ 
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login'
    }
  } 
 });
 
const AppStack = StackNavigator({ 
  Ideas: {
    screen: IdeaList,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Your IdeaPad',
        headerRight: (
          <Icon
            type="evilicon"
            onPress={() => navigation.navigate('AddIdea')}
            name="plus"
            size={30}
            iconStyle={{paddingRight: 10}}
          />
        ),
        headerLeft: null
      };
    }
  }, 
  AddIdea: {
    screen: AddIdea,
    navigationOptions: {
      headerTitle: 'Add to IdeaPad'
    }
  },
  EditIdea: {
    screen: EditIdea,
    navigationOptions: {
      headerTitle: 'Edit IdeaPad'
    }
  }  
});

export default SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
