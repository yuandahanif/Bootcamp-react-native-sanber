import React from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TabBar() {
  return (
    <ImageBackground
      source={require('../images/tabBar.png')}
      style={styles.tabBar}>
      <TouchableOpacity>
        <Icon name="home" color="#05B58A" size={28} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="search" color="#05B58A" size={28} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" color="white" size={40} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bell" color="#05B58A" size={28} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" color="#05B58A" size={28} />
      </TouchableOpacity>
    </ImageBackground>
  );
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
