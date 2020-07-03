import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from '../components/Text';
import TabBar from '../components/TabBar';
import Badge from '../components/Badge';
import Icon from 'react-native-vector-icons/Feather';

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.top}
        source={require('../images/bg-gradient.png')}>
        <Text text="Selamat pagi," weight="reqular" size={24} color="white" />
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
              <View style={styles.projectTag}>
                <Badge
                  style={styles.tag}
                  text="Javascript"
                  color="#D5D90C"
                  textColor="white"
                />
                <Badge
                  style={styles.tag}
                  text="HTML"
                  color="#FFC806"
                  textColor="white"
                />
                <Badge
                  style={styles.tag}
                  text="NodeJs"
                  color="#03A500"
                  textColor="white"
                />
                <Badge
                  style={styles.tag}
                  text="Chromium"
                  color="#A8A8A8"
                  textColor="white"
                />
                <Badge
                  style={styles.tag}
                  text="Desktop"
                  color="#55FF46"
                  textColor="white"
                />
                <Badge
                  style={styles.tag}
                  text="CSS"
                  color="#4F9FFD"
                  textColor="white"
                />
                <Badge
                  style={styles.tag}
                  text="Lainnya"
                  color="#393939"
                  textColor="white"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.article}>
          <Text text="Tongkrongan Programmer" size={24} />

          <View style={styles.post}>
            <View style={styles.author}>
              <Image
                style={styles.avatar}
                source={require('../images/Arkgnits-main.jpg')}
              />
              <Text text="Tongkrongan.programmer" size={14} />
              <TouchableOpacity style={styles.moreIcon}>
                <Icon name="more-horizontal" size={20} color="#424242" />
              </TouchableOpacity>
            </View>
            <Image
              style={styles.postImage}
              source={require('../images/project-photo.png')}
            />
            <View style={styles.postDescription}>
              <View style={styles.leftDescription}>
                <Text
                  text="website pemantauan data COVID-19 & web portofolio"
                  size={16}
                />
                <View style={styles.projectTag}>
                  <Badge
                    style={styles.tag}
                    text="Javascript"
                    color="#D5D90C"
                    textColor="white"
                  />
                  <Badge
                    style={styles.tag}
                    text="HTML"
                    color="#FFC806"
                    textColor="white"
                  />
                  <Badge
                    style={styles.tag}
                    text="NodeJs"
                    color="#03A500"
                    textColor="white"
                  />
                  <Badge
                    style={styles.tag}
                    text="Chromium"
                    color="#A8A8A8"
                    textColor="white"
                  />
                  <Badge
                    style={styles.tag}
                    text="Desktop"
                    color="#55FF46"
                    textColor="white"
                  />
                  <Badge
                    style={styles.tag}
                    text="CSS"
                    color="#4F9FFD"
                    textColor="white"
                  />
                  <Badge
                    style={styles.tag}
                    text="Lainnya"
                    color="#393939"
                    textColor="white"
                  />
                </View>

                <Text
                  style={styles.time}
                  text="1 hari yang lalu"
                  weight="Regular"
                  size={8}
                />
              </View>
              <TouchableOpacity style={styles.shareButton}>
                <Icon name="share-2" size={24} color="#424242" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* <TabBar /> */}
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
  articleContainer: {
    flex: 11,
    alignItems: 'center',
  },
  recomendProjectContainer: {
    marginTop: -40,
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
    marginTop: 10,
    // marginBottom: 16,
  },
  recomendProjectDesc: {
    flex: 1,
  },
  projectTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginTop: 5,
  },
  article: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 15,
  },
  post: {
    // flex: 1,
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: '#898989',
    borderWidth: 0.5,
  },
  author: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginRight: 10,
  },
  moreIcon: {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 15,
  },
  postImage: {
    width: '100%',
    resizeMode: 'contain',
  },
  postDescription: {
    flexDirection: 'row',
    padding: 15,
  },
  leftDescription: {
    width: '90%',
  },
  shareButton: {
    marginLeft: 'auto',
  },
  time: {
    marginLeft: 5,
  },
});
