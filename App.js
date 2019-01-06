import React, { Component } from 'react';
import Home from "./src/components/Home/Home";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import ArticleList from "./src/components/Article/ArticleList";
import Icon from 'react-native-vector-icons/Ionicons';
import IconWithBadge from "./src/utils/IconWithBadge";
import Header from "./src/components/Header";

const MainTabNavigator = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home",
                tabBarIcon: ({focused, tintColor}) => {
                    const iconName = `ios-home${focused ? '' : '-outline'}`;
                    return <IconWithBadge name={iconName} size={25} color={tintColor} badgeCount={3} />
                },
            },
        },
        Articles: {
            screen: ArticleList,
            navigationOptions: {
                title: "Articles",
                tabBarIcon: ({focused, tintColor}) => {
                    const iconName = `ios-list${focused ? '' : '-outline'}`;
                    return <Icon name={iconName} size={25} color={tintColor}/>;
                },
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const AppNavigator = createStackNavigator({
        Tabs: MainTabNavigator,
        Home
    }, {
        navigationOptions: () => {
            return ({
                header: <Header/>
            });
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
    render() {
        return <AppContainer/>;
    }
}

export default App