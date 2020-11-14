import {Dimensions, StyleSheet} from 'react-native';

export const inputStyles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  text: {
    //null
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    margin: 15,
    backgroundColor: '#9c4dcc',
    padding: 15,
    width: Dimensions.get('window').width * 0.60,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const buttonOutlineStyles = StyleSheet.create({
  button: {
    margin: 8,
    padding: 15,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: '#9c4dcc',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const header = StyleSheet.create({
  container: {
     flexDirection: 'row',
     padding: 5,
     alignItems: 'center',
     borderBottomWidth: 1,
     borderColor: '#90a4ae'
  },  
  textContainer: {
     flex: 1
  },  
  text: {
     fontSize: 30,
     fontWeight: 'bold',
     color: '#78909c'
  },  
});
