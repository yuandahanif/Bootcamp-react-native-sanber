import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TabBar() {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="home" size={24} color="#ff081c" />
        <Text style={[styles.tabTitle, {color: '#ff081c'}]}>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="explore" size={24} color="#5e5e5e" />
        <Text style={styles.tabTitle}>Explorasi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="subscriptions" size={24} color="#5e5e5e" />
        <Text style={styles.tabTitle}>Subscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="mail" size={24} color="#5e5e5e" />
        <Text style={styles.tabTitle}>Kotak Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="video-library" size={24} color="#5e5e5e" />
        <Text style={styles.tabTitle}>Koleksi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#e5e5e5',
  },
  tabItem: {
    color: '#5e5e5e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 10.6,
    marginTop: 2,
  },
});
