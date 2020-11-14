import {Dimensions, StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex :1,
    margin :5,
  },
  logo:{
    height: Dimensions.get('window').height * 0.25,
    resizeMode: 'contain',
    alignSelf : 'center',
    margin : 40,
  },

});
