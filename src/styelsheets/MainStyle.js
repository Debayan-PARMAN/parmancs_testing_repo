  import {StyleSheet} from 'react-native';
  import styleConstants from '../constants';

export const FontStyles = StyleSheet.create({
  font: {
      fontFamily: 'Roboto', 
      fontSize: 14,
  },
  });

  export const LayoutStyles = StyleSheet.create({
    container:{
      flex: 1,
    },
  });

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
      paddingTop: 7,
    },
    icons:{
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 2,
    },
    wrapper:{
      alignItems:'center',
      justifyContent:'center',
    },
    imageStyles :{
      alignItems: 'center',
      width: 20, 
      height: 20,
    },
    textStyles:{
      alignItems: 'center',
      fontSize: 10,
      color: 'white',
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
      paddingLeft: 100,
      justifyContent:'center',
    },
    bannerArea2_Text:{
      flex: 0.2, 
      alignItems: 'center', 
      paddingTop: 7, 
      justifyContent:'center',
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
      //backgroundColor: '#616264', 
      alignItems: 'center',
      justifyContent:'center',
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
    textInput_pass_email: {
      height: 25,
      borderBottomColor: 'black', 
      borderBottomWidth: 1,
    },
    forget_pass_view: {
      paddingTop: 15, 
      alignItems: 'center',
    },
    text_underline: {
      textDecorationLine: 'underline',
    },
  });

  export const Button_fb_google = StyleSheet.create({

    first_container: {
      flex: 1, 
      alignItems: 'center', 
      paddingTop: 3, height: 45,
    },
    second_container: {
      width: 250, 
      height: 40, 
      backgroundColor: '#AA8CC5', 
      flexDirection: 'row', 
      paddingLeft: 10, 
      paddingRight: 10, 
      paddingTop: 2, 
      paddingBottom: 2,
    },
    third_container: {
      flex: 0.5, 
      alignItems: 'center', 
      justifyContent: 'center',
    },

  });

  export const SignIn = StyleSheet.create({

    button:{
      flex: 0.4, 
      justifyContent: 'center', 
      flexDirection: 'row',
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


  signinbtn: {
    width: 150,
    height: 40,
    backgroundColor: '#972493',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  },

  signinbtnText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 7.5,
    fontSize: 16,
  },
  createaccountbtn: {
    width: 150,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  },

  createaccountbtnText: {
    color: '#212429',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 7.5,
    fontSize: 16,
  },

  caro: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,

  },

  offers: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  off_h: {
    width: 320,
    height: 20,
    backgroundColor: '#fff'
  },
  off_h_r: {
    width: 40,
    height: 25,
    backgroundColor: '#fff'
  },
  off_h_r_i: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginLeft: 15
  },

  off_f: {
    width: 370,
    height: 40,
    backgroundColor: '#fff'
  },
  off_txt_h: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212529',
    marginLeft: 10,
    marginTop: 1,
  },
  off_txt_p: {
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
    color: '#212529',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  ser_icon: {
    width: 30,
    height: 30,
    //color: '#ccc',
    marginLeft: 65,
    marginTop: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

{/*------End Homepage Styles hare-------*/ }
