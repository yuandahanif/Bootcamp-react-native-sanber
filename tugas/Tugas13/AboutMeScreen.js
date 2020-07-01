import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TabBar from './components/TabBar';
import Text from './components/Text';
import ImageLogo from './components/ImageLogo';

const dataSociall = [
  {iName: 'instagram', color: '#E1306C', account: '@yuanda.yuu'},
  {iName: 'facebook', color: '#4267B2', account: '@yuanda.yuu'},
  {iName: 'github', color: '#211F1F', account: '@yuandaHanif'},
  {iName: 'gitlab', color: '#FC6D27', account: '@yuandaHanif'},
  {iName: 'linkedin', color: '#006192', account: 'Yuanda Hanif Hisyam'},
];

export default function AbouteMeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text
          lineBreak={1}
          text="Yuanda Hanif"
          size={24}
          color="white"
          badge={true}
        />
        <Text
          text="Bergabung sejak Juni 15, 2020"
          color="white"
          size={11}
          weight="Light"
        />
      </View>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileInfoImage}
          source={require('./images/profile.png')}
        />
        <View style={styles.profileInfoSocial}>
          <Text text="Terhubung" size={11} weight="Light" />
          <View style={styles.listSocial}>
            <TouchableOpacity
              onPressIn={() => {
                alert('@yuanda.yuu');
              }}>
              <Icon name="instagram" size={24} color="#E1306C" />
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => {
                alert('@yuanda.yuu');
              }}>
              <Icon name="facebook" size={24} color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => {
                alert('@yuandaHanif');
              }}>
              <Icon name="github" size={24} color="#211F1F" />
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => {
                alert('@yuandaHanif');
              }}>
              <Icon name="gitlab" size={24} color="#FC6D27" />
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => {
                alert('@Yuanda Hanif Hisyam');
              }}>
              <Icon name="linkedin" size={24} color="#006192" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileSkill}>
        <Text>skilled</Text>
      </View>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bar: {
    paddingHorizontal: 15,
    paddingLeft: 110,
    backgroundColor: '#6782F0',
    flex: 3,
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  profileInfoImage: {
    height: 80,
    width: 80,
    marginTop: -40,
  },
  profileInfoSocial: {
    marginLeft: 15,
    marginTop: 5,
    flex: 1,
  },
  listSocial: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 25,
    justifyContent: 'space-evenly',
  },
  profileSkill: {
    flex: 10,
    // backgroundColor: 'cyan',
  },
});
