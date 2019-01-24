import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default UserProfileStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ccc',
        height:80
    },
    welcomeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.fontStyles.headerGroup.headerColor,
        fontSize: 18,
        padding:30,
        textAlign: 'center',
        justifyContent: 'center',
    },
    ToServe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ccc',
        height: 40
    },
    ToServeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: 14,
        //fontSize: styleConstants.fontStyles.bodyFontSize,
        color: styleConstants.colorStyles.fontColor,
        fontWeight:'bold',
        padding: 10,
        // textAlign: 'center',
        justifyContent: 'center',
    },
    EmailAgeBloodWeight: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        marginTop:5,
        height: 65,
        backgroundColor: '#fff',
    },
    EmailText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: 16,
        //fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        color: styleConstants.colorStyles.fontColor,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
        marginTop:5
    },
    EmailTextInput: {
        height: 30, 
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 3,

    },
    
    AgeBloodWeight: {
        height: 60,
        marginTop: 20,
        flexDirection: 'row',
    },
    AgeBloodWeightHorizontalAlignment: {
        width: 110,
        height: 60,
        marginLeft: 5
    },
    AgeBloodWeightTextInput: {
        height: 45,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },

    AgeText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        marginTop: 2,

    },
    GenderIama: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 20,
        marginLeft:10

    },
    Gender: {
        flex: 1,
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    GenderButton: {
        width: 90,
        height: 30,
        backgroundColor: '#ccc',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 3

    },
    hoverButton: {
        backgroundColor: '#972493',
    },
    GenderText: {
        textAlign: 'center', 
        alignItems: 'center', 
        color: '#fff', 
        justifyContent: 'center',
         marginTop: 3

    },
    Next: {
        flex: 1,
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    Nextbutton: {
        width: 120,
         height: 40,
        backgroundColor: '#972493',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius:5

    },
    NextText: {
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
        

    },
     
    
});
