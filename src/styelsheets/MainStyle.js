  import {StyleSheet} from 'react-native';

  export const LayoutStyles = StyleSheet.create({
    container:{
      flex: 1,
    },
  });

  export const HeaderStyles = StyleSheet.create({

  });

  export const FooterStyles = StyleSheet.create({

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