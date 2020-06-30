import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function VideoItem(props) {
  const video = props.video;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: video.snippet.thumbnails.medium.url}}
        style={styles.videoImage}
      />
      <View style={styles.videoDetail}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/82.jpg'}}
          style={styles.videoChannelImage}
        />
        <View style={styles.videoDetailDesc}>
          <Text lineBreakMode={2} style={styles.videoTitle}>
            {video.snippet.title}
          </Text>
          <Text style={styles.videoStatus}>
            {video.snippet.channelTitle} {' · '}
            {nFormatter(video.statistics.viewCount, 1)} {' · '}{' '}
            {randomMinutes() + ' menit yang lalu'}
          </Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={20} color="#5e5e5e" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

let randomMinutes = () => Math.floor(Math.random() * 60);

function nFormatter(num, digits) {
  var si = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'k'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  videoImage: {
    height: 200,
  },
  videoDetail: {
    padding: 12,
    flexDirection: 'row',
  },
  videoChannelImage: {
    height: 42,
    width: 42,
    borderRadius: 25,
  },
  videoDetailDesc: {
    flex: 1,
    paddingHorizontal: 10,
  },
  videoTitle: {
    fontWeight: 'bold',
  },
  videoStatus: {
    marginTop: 5,
    fontSize: 11,
    color: '#3c3c3c',
  },
});
