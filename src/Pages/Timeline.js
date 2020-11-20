import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import {Header, PostInput, PostItem} from '../components';
import {timelineStyles} from './styles';
import auth from '@react-native-firebase/auth';
import {TopicSelectModal} from '../components/TopicSelectModal';
import database from '@react-native-firebase/database';
import moment from 'moment';

const user = auth().currentUser;

export const Timeline = (props) => {
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [postList, setPostList] = useState('');
  user == null && props.navigation.navigate('Login');

  function selectingTopic(val) {
    database().ref(`/${selectedTopic}/`).off("value")
    setPostList("")
    setModalFlag(false);
    setSelectedTopic(val);
    database()
      .ref(val)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map((key) => ({...data[key]}));
        formattedData.sort( (b, a) =>{
          return( new Date(b.time) -  new Date(a.time) )
        })
        setPostList(formattedData)
      });
  }

  function sendingPost(value) {
    const postObject = {
      userEmail: user.email,
      postText: value,
      time: moment().toISOString(),
    };
    database().ref(`${selectedTopic}/`).push(postObject);
  }
  function renderPostItem({item}) {
    return <PostItem post={item} />;
  }

  return (
    <SafeAreaView style={timelineStyles.container}>
      <View style={timelineStyles.container}>
        <Header
          signOut={() =>
            auth()
              .signOut()
              .then(() => props.navigation.navigate('Login'))
          }
          onChannelSelect={() => setModalFlag(true)}
          header={selectedTopic}
        />
      </View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={postList}
        renderItem={renderPostItem}
      />
      <PostInput value = " " onSendPost={sendingPost} />
      <TopicSelectModal
        modalFlag={modalFlag}
        onClose={() => setModalFlag(false)}
        onTopicSelect={selectingTopic}
      />
    </SafeAreaView>
  );
};
