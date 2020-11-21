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
    backgroundColor: '#283593',
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
    color: '#283593',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    borderBottomWidth : 2,
    borderColor : 'gray',
    justifyContent : 'space-between',
  },
  iconContainer:{
    flexDirection : 'row',
    // width : 90,
    justifyContent : 'space-between'

  },
  textContainer: {
    //  flex: 1
  },  
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#666ad1'
  },  
});

export const post_input = StyleSheet.create({
  container: {
     width: Dimensions.get('window').width * 0.9,
     alignSelf: 'center',
     bottom: 10,
     position: 'absolute',
     backgroundColor: '#e0e0e0',
     borderRadius: 5,
     padding: 5,
     flexDirection: 'row',
     borderWidth: 1,
     borderColor: "#b0bec5"
  },  
  inputContainer: {
     flex: 1,
  },
  button: {

  }
});

export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#666ad1',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  bodyContainer: {
     padding: 5,
     backgroundColor : "#757575",
     
  },
  time: {
    color: 'white',
    fontStyle: 'italic'
  }
});

export const topicModalStyles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10
  },  
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  topicItemContainer: {
     padding: 10,
  },  
  topicItemText: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#78909c'
  },  
});
