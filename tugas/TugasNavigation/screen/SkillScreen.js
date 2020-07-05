import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  // FlatList,
} from 'react-native';
import Text from '../components/Text';
import ProjectPost from '../components/ProjectPost';
import SkillTagList from '../components/SkillTagList';

import postData from '../data/post-data.json';
import {FlatList} from 'react-native-gesture-handler';

export default function SkillScreen() {
  const DEVICE = Dimensions.get('window');
  return (
    <FlatList
      data={postData}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <ImageBackground
            style={styles.top}
            source={require('../images/bg-gradient.png')}>
            <Text
              text="Selamat pagi,"
              weight="reqular"
              size={24}
              color="white"
            />
            <Text text="Yuanda Hanif" size={36} color="white" lineBreak={1} />
          </ImageBackground>
          <View style={styles.articleContainer}>
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
                  <SkillTagList
                    tagList={[
                      'Javascript',
                      'HTML',
                      'NodeJs',
                      'Chromium',
                      'Desktop',
                      'CSS',
                    ]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.article}>
              <Text text="Tongkrongan Programmer" size={24} />
            </View>
          </View>
        </View>
      )}
      ListHeaderComponentStyle={{height: DEVICE.height * 0.43}}
      ListFooterComponent={() => <View />}
      ListFooterComponentStyle={styles.listFooter}
      renderItem={data => <ProjectPost data={data.item} />}
      keyExtractor={data => data._id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1.1,
    resizeMode: 'center',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  articleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  recomendProjectContainer: {
    marginTop: -40,
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
    marginTop: 10,
    // marginBottom: 16,
  },
  recomendProjectDesc: {
    flex: 1,
  },
  article: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 15,
  },
  listFooter: {
    marginTop: 70,
  },
});
