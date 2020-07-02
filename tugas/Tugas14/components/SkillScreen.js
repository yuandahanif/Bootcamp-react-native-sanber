import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import Text from './Text';
import TabBar from './TabBar';
import Badge from './Badge';

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.top}
        source={require('../images/bg-gradient.png')}>
        <Text text="Selamat pagi," weight="reqular" size={24} color="white" />
        <Text text="Yuanda Hanif" size={36} color="white" lineBreak={1} />
      </ImageBackground>
      <View style={styles.article}>
        <View style={styles.recomendProjectContainer}>
          <Text
            text="Rekomendasi Project untuk mu"
            weight="Regular"
            size={18}
          />
          <View style={styles.recomendProject}>
            <Image
              source={require('../images/electron-original.png')}
              style={styles.recomendProjectImage}
            />
            <View style={styles.recomendProjectDesc}>
              <Text
                text="Simple desktop screen recorder"
                weight="Regular"
                size={14}
              />
              <View style={styles.projectTag}>
                <Badge text="Javascript" color="#D5D90C" textColor="white" />
                <Badge text="HTML" color="#FFC806" textColor="white" />
              </View>
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
  top: {
    flex: 3,
    resizeMode: 'center',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  article: {
    flex: 11,
    alignItems: 'center',
  },
  recomendProjectContainer: {
    transform: [{translateY: -40}],
    marginHorizontal: 'auto',
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 4,
  },
  recomendProject: {
    flexDirection: 'row',
    marginTop: 15,
  },
  projectTag: {
    flexDirection: 'row',
  },
});
