import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <View style={styles.navBarRight}>
        <TouchableOpacity>
          <Icon name="videocam" size={25} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={25} style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="account-circle" size={25} style={styles.navItem} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    height: 55,
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 3,
  },
  logo: {
    width: 98,
    height: 22,
  },
  navBarRight: {
    flexDirection: 'row',
  },
  navItem: {
    color: '#5e5e5e',
    marginLeft: 25,
  },
});
