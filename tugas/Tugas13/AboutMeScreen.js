import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
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
const lanuageSkill = [
  {name: 'HTML5', logoPath: './images/html5-original.png', percent: '85'},
  {name: 'CSS3', logoPath: './images/css3-original.png', percent: '80'},
  {
    name: 'Javascript',
    logoPath: './images/javascript-original.png',
    percent: '75',
  },
  {name: 'PHP7', logoPath: './images/php-original.png', percent: '75'},
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
        <TouchableOpacity style={styles.editAkun} activeOpacity={0.8}>
          <Icon name="settings" size={11} style={styles.settingIcon} />
          <Text text="Edit akun" />
        </TouchableOpacity>

        <Text text="Bahasa Pemrograman" size={14} />
        {/* <FlatList
          data={lanuageSkill}
          renderItem={data => (
            <View style={styles.skillInfo}>
              <ImageLogo file={require(data.item.logoPath)} size={28} />
              <View style={styles.skillInfoDetail}>
                <View style={styles.skillInfoTop}>
                  <Text
                    text={data.item.name}
                    weight="Regular"
                    badge={true}
                    badgeText="Advanced"
                    badgeColor="#E1306C"
                    badgeTextColor="white"
                  />
                  <Text text="85%" weight="Regular" />
                </View>
                <View style={styles.skillInfoPercent}>
                  <View style={styles.percent} />
                </View>
              </View>
            </View>
          )}
          keyExtractor={data => data.name}
        /> */}
        <View style={styles.skillInfo}>
          <ImageLogo file={require('./images/html5-original.png')} size={28} />
          <View style={styles.skillInfoDetail}>
            <View style={styles.skillInfoTop}>
              <Text
                text="HTML5"
                weight="Regular"
                badge={true}
                badgeText="Advanced"
                badgeColor="#E1306C"
                badgeTextColor="white"
              />
              <Text text="85%" weight="Regular" />
            </View>
            <View style={styles.skillInfoPercent}>
              <View style={styles.percent} />
            </View>
          </View>
        </View>
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
  editAkun: {
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'white',
    borderColor: '#424242',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 25,
  },
  settingIcon: {
    marginHorizontal: 5,
  },
  profileSkill: {
    flex: 10,
    marginHorizontal: 15,
  },
  skillInfo: {
    marginTop: 10,
    flexDirection: 'row',
  },
  skillInfoDetail: {
    flex: 1,
    marginLeft: 5,
  },
  skillInfoTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillInfoPercent: {
    height: 5,
    width: '100%',
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    marginTop: 5,
  },
  percent: {
    height: '100%',
    width: '85%',
    borderRadius: 4,
    backgroundColor: '#83CD29',
  },
});
