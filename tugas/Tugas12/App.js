import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
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
      <View style={styles.body}>
        <Text> body </Text>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={24} />
          <Text style={styles.tabTitle}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="explore" size={24} />
          <Text style={styles.tabTitle}>Explorasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="subscriptions" size={24} />
          <Text style={styles.tabTitle}>Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="mail" size={24} />
          <Text style={styles.tabTitle}>Kotak Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="video-library" size={24} />
          <Text style={styles.tabTitle}>Koleksi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginLeft: 25,
  },

  body: {
    flex: 1,
  },
  tabBar: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#e5e5e5',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 10,
    marginTop: 2,
  },
});
