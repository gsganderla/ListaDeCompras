import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    container: {
      backgroundColor: '#131016', 
      flex: 1,
      padding: 7
    },
  
    groupName: {
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 48
    },
  
    groupDate: {color: '#6b6b6b', 
    fontSize: 16},

    input: {
      backgroundColor: '#1f1e25',
      height: 56,
      color: '#fff',
      fontSize: 18,
      borderRadius: 5,
      flex: 1,
      marginRight: 10
    },
  
    button: {
      height: 56,
      backgroundColor: '#31cf67',
      fontSize: 12,
      borderRadius: 5,
      marginRight: 10

    },

    textButton: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10  
    },
    form: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 10,
      marginBottom: 10
    },
    listEmpty: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10
    }

  })