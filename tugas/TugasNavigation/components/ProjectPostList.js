import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import SkillTagList from './SkillTagList';

export default function ProjectPostList(props) {
  const {data} = props;
  return (
    <FlatList
      data={data}
      keyExtractor={data => data.id}
      renderItem={
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
              <SkillTagList
                tagList={[
                  'Javascript',
                  'HTML',
                  'NodeJs',
                  'Chromium',
                  'Desktop',
                  'CSS',
                  'CSS',
                  'CSS',
                  'CSS',
                ]}
                itemLimit={10}
              />

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
      }
    />
  );
}

const styles = StyleSheet.create({
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
