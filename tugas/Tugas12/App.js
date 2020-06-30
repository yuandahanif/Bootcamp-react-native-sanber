import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import VideoItem from './components/VideoItem';
import TabBar from './components/TabBar';
import NavBar from './components/NavBar';

import data from './data.json';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <FlatList
          data={data.items}
          renderItem={video => <VideoItem video={video.item} />}
          keyExtractor={video => video.id}
        />
      </View>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});
