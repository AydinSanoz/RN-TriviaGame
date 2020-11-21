import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {topicModalStyles} from './styles';

const topics = ['friends', 'family', 'buddies', 'loves', 'code&Code'];

export const TopicSelectModal = (props) => {
  return (
    <Modal
      isVisible={props.modalFlag}
      onBackdropPress={props.onClose}
      onSwipeComplete={props.onclose}
      swipeDirection="down"
      style={topicModalStyles.modal}>
      <View style={topicModalStyles.container}>
        {topics.map((topic, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={topicModalStyles.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}>
              <Text style={topicModalStyles.topicItemText}>#{topic}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};
