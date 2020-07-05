import React, {useState, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  AbouteMeScreen,
  AddProjectScreen,
  LoginScreen,
  SkillScreen,
  ProjectScreen,
  SearchScreen,
} from './screen/index';
import TabBar from './components/TabBar';
import {AuthContext} from './context';

// * screen
const SkillStack = createStackNavigator();
const SkillStackScreen = () => (
  <SkillStack.Navigator headerMode="none">
    <SkillStack.Screen name="Home" component={SkillScreen} />
  </SkillStack.Navigator>
);

const AboutMeStack = createStackNavigator();
const AboutMeStackScreen = () => (
  <AboutMeStack.Navigator headerMode="none">
    <AboutMeStack.Screen name="AbouteMe" component={AbouteMeScreen} />
  </AboutMeStack.Navigator>
);

const AddProjectStack = createStackNavigator();
const AddProjectStackScreen = () => (
  <AddProjectStack.Navigator headerMode="none">
    <AddProjectStack.Screen name="Add" component={AddProjectScreen} />
  </AddProjectStack.Navigator>
);

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator headerMode="none">
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const ProjectStack = createStackNavigator();
const ProjectStackScreen = () => (
  <ProjectStack.Navigator headerMode="none">
    <ProjectStack.Screen name="Project" component={ProjectScreen} />
  </ProjectStack.Navigator>
);
const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator headerMode="none">
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);

// * Tab
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    headerMode="none"
    tabBar={props => <TabBar {...props} />}>
    <Tabs.Screen
      name="Home"
      component={SkillStackScreen}
      options={{icon: 'home'}}
    />
    <Tabs.Screen
      name="Search"
      component={SearchStackScreen}
      options={{icon: 'search'}}
    />
    <Tabs.Screen
      name="add"
      component={AddProjectStackScreen}
      options={{isAddButton: true}}
    />
    <Tabs.Screen
      name="Notification"
      component={ProjectStackScreen}
      options={{icon: 'bell'}}
    />
    <Tabs.Screen
      name="AbouteMe"
      component={AboutMeStackScreen}
      options={{icon: 'user'}}
    />
  </Tabs.Navigator>
);

const DrawerStack = createDrawerNavigator();
const DrawerScreen = () => (
  <DrawerStack.Navigator>
    <DrawerStack.Screen name="Home" component={TabsScreen} />
    <DrawerStack.Screen name="AbouteMe" component={AboutMeStackScreen} />
  </DrawerStack.Navigator>
);

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [authToken, setAuth] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authContext = useMemo(
    () => ({
      signIn: () => setAuth('asdasd'),
      signOut: () => setAuth(null),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {authToken ? <DrawerScreen /> : <LoginStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
