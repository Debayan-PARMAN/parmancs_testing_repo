  import {StyleSheet} from 'react-native';

  export const LayoutStyles = StyleSheet.create({
    container:{
      flex: 1,
    },
  });

  {/*------Start Homepage Styles Hare-------*/ }

export const HomeStyles = StyleSheet.create({
  signin: {
    flex: 1, flexDirection: 'row',
    alignItems: 'center',
     justifyContent: 'center',
      marginTop: 15,
       marginBottom: 15 
  },

  
  btn: {
    width: 150,
    height: 37,
    justifyContent: 'center',
    borderWidth: 1,
    radius:10,
    borderColor: '#ccc',
    borderHeight: 1,
    },

  caro: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  offers: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
     justifyContent: 'center'
  },
  off_txt_h: {
    fontFamily: 'roboto',
     fontSize: 16, 
     fontWeight: 'bold', 
     color: '#212529', 
     marginLeft: 10,
      marginTop: 1,
  },
  off_txt_p: {
    fontFamily: 'roboto',
     fontSize: 14, 
     color: '#212529',
      marginLeft: 10, 
      marginTop: 1
  },
  ser_parent: {
    width: 166,
    height: 80,
    marginBottom: 10, 
    borderWidth: 1,
    borderColor: '#ccc', 
    backgroundColor: '#fff' 
  },
  ser_text: {
    fontSize: 15,
    fontFamily: 'roboto',
    color: '#212529',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5 
  },
  ser_icon: {
   width: 30,
   height: 30,
   color: '#ccc',
   marginLeft: 65,
   marginTop: 17,
   alignItems: 'center',
   justifyContent: 'center' 
  },
});

{/*------End Homepage Styles hare-------*/ }
  export const HeaderStyles = StyleSheet.create({
    container:{
      flex: 0.09, 
      flexDirection: 'row', 
      paddingTop: 25, 
      paddingBottom: 3,
      backgroundColor: '#e1e8ee', 
    }
  });

  export const FooterStyles = StyleSheet.create({
    container: {
      flex: 0.07,
      flexDirection: 'row',
      backgroundColor: '#AA8CC5',
      justifyContent: 'space-between',
      paddingTop: 7
    }
  });

  export const MainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export const ButtonStyles = StyleSheet.create({

  });

  export const LoginStyles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    bannerArea: {
      flex: 0.3,
      flexDirection: 'row',
      borderBottomColor: 'black',
      borderBottomWidth: 1
    },
    bannerArea_Button:{
      flex: 0.05, 
      alignContent: 'center', 
      paddingTop: 5,
      //backgroundColor:'black',
    },
    bannerArea_Text:{
      flex: 0.5, 
      paddingLeft: 100
    },
    bannerArea2_Text:{
      flex: 0.2, 
      alignItems: 'center', 
      paddingTop: 7, 
    },
    textInput:{
      flex: 0.5, 
      paddingLeft: 10, 
      paddingRight: 10, 
      paddingTop: 10, 
      paddingBottom: 1,
    },
    checkBox_Main_Container1:{
      flex: 0.3, 
      flexDirection: 'row', 
    },
    checkBox_Secondary_Container1:{
      flex: 1, 
      paddingLeft: 10, 
      paddingRight: 10, 
      flexDirection: 'row',
    },
    checkBox_Secondary_Container_Row1:{
      flex: 0.2, 
      paddingTop: 3, 
      
    },
    checkBox_Secondary_Container_Row2:{
      flex: 0.8, 
      paddingTop: 9,
      
    },
    toggleButton_Main_Container:{
      flex: 1, 
      paddingLeft: 10, 
      paddingRight: 10,
      
    },
    toggleButton_Sub_Container:{
      flex: 2, 
      paddingTop: 8, 
      paddingBottom: 10,
      paddingLeft:70,
      //flexDirection: 'row',
      
      
    },
    toggleButton_Sub_Container_Row1: {
      flex: 1, 
      backgroundColor: '#616264', 
      alignItems: 'center',
    },
    toggleButton_Sub_Container_Row2: {
      flex: 0.7, 
      backgroundColor: 'white', 
      alignItems: 'center',
    },
    button: {
      flex: 0.4,
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });

  export const SignIn = StyleSheet.create({

    button:{
      flex: 0.4, 
      justifyContent: 'center', 
      flexDirection: 'row',
    },

  });