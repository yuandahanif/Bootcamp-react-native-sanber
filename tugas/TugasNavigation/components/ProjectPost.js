import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Text from './Text';
import SkillTagList from './SkillTagList';

export default function ProjectPostList(props) {
  const {data} = props;
  return (
    <View style={styles.post} key={data._id}>
      <View style={styles.author}>
        <Image style={styles.avatar} source={{uri: data.profilePicture}} />
        <Text text={data.profileName} size={14} />
        <TouchableOpacity style={styles.moreIcon}>
          <Icon name="more-horizontal" size={20} color="#424242" />
        </TouchableOpacity>
      </View>
      <Image style={styles.postImage} source={{uri: data.postImage}} />
      <View style={styles.postDescription}>
        <View style={styles.leftDescription}>
          <Text text={data.postTitle} size={16} />
          <SkillTagList tagList={data.skillTag} itemLimit={10} />

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
  );
}

const styles = StyleSheet.create({
  post: {
    // flex: 1,
    marginHorizontal: 30,
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
    height: 200,
    resizeMode: 'cover',
  },
  postDescription: {
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 5,
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
