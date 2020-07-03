import React from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../images/tabBar.png')}
      style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isAddButton = options.isAddButton ? options.isAddButton : false;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return isAddButton ? (
          <TouchableOpacity
            style={styles.addButton}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={label}>
            <Icon name="plus" color="white" size={40} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={label}>
            <Icon
              name={options.icon}
              color={isFocused ? '#80FEE0' : '#05B58A'}
              size={28}
            />
          </TouchableOpacity>
        );
        // <TouchableOpacity
        //   accessibilityRole="button"
        //   accessibilityStates={isFocused ? ['selected'] : []}
        //   accessibilityLabel={options.tabBarAccessibilityLabel}
        //   testID={options.tabBarTestID}
        //   onPress={onPress}
        //   onLongPress={onLongPress}
        //   style={{flex: 1}}>
        //   <Icon name="home" color="#05B58A" size={28} />
        //   {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
        // </TouchableOpacity>;
      })}
    </ImageBackground>
  );

  // return (
  //   <ImageBackground
  //     source={require('../images/tabBar.png')}
  //     style={styles.tabBar}>
  //     <TouchableOpacity>
  //       <Icon name="home" color="#05B58A" size={28} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //       <Icon name="search" color="#05B58A" size={28} />
  //     </TouchableOpacity>
  //     <TouchableOpacity style={styles.addButton}>
  //       <Icon name="plus" color="white" size={40} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //       <Icon name="bell" color="#05B58A" size={28} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //       <Icon name="user" color="#05B58A" size={28} />
  //     </TouchableOpacity>
  //   </ImageBackground>
  // );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 56,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#A8FFEA',
    width: 62,
    height: 62,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -49,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,

    elevation: 3,
  },
});
