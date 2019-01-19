import {StyleSheet} from 'react-native';
import styleConstants from '../constants/styleConstants';

export const FontStyles = StyleSheet.create({
  font: {
     fontFamily: styleConstants.fontStyles.fontFamily, 
    fontSize: styleConstants.fontStyles.bodyFontSize,
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
