import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default UpdateUserProfileStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1, 
    },
   
    health: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ccc',
        height: 25
    },
    healthText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        color: styleConstants.fontStyles.headerGroup.headerColor,
        padding: 30,
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
        //fontSize: styleConstants.fontStyles.bodyFontSize,
        color: styleConstants.colorStyles.fontColor,
        fontWeight: styleConstants.fontStyles.fontWeight,
        padding: 10,
        // textAlign: 'center',
        justifyContent: 'center',
    },
    NameAgeSex: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        marginTop: 5,
        backgroundColor: '#fff',
    },
    NameText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.colorStyles.fontColor,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
    },
    AgeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.colorStyles.fontColor,
        marginTop: 20,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
    },
    dobtextinput: {
        height: 25,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 0 
    },
    bloodheightweight: {
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        marginTop: 10, 
        
    },
    tabText:{
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#fff',
        textAlign: "center",
        justifyContent: 'center',
        marginTop: 2   },

    userProfileTabs:{
        flex: 1,
        marginTop: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' 
    },

    bloodgroup: {
        width: 100,
        height: 40,
        marginTop:4
         },
    bloodgrouptext: {
        width: 100,
        height: 20,
    },
    userdetailsText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        marginTop: 4

    },
    userdetailsText:{
        fontFamily: 'Roboto',
        fontSize: 15,
        marginTop: 4

    },
    textInput:{
        height: 35,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    address: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    addaddress: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1
    },
    addaddresslogoContainer: {
        width: 40, 
        height: 40,
    },
    addaddresslogo: {
        width: 25,
        height: 25,
        margin: 10
    },
    buttons: {
        flex: 1,
        height: 40,
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    updateprofilebutton: {
        width: 120, 
        height: 30,
        backgroundColor: '#972493',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5

    },

    updateprofilebuttonText: {
        textAlign: 'center', 
        alignItems: 'center',
         color: '#fff',
        justifyContent: 'center',
        marginTop: 3

    },
    nextpagebutton: {
        width: 120,
        height: 30,
        backgroundColor: '#fff',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5

    },

    nextpagebuttonText: {
        textAlign: 'center',
        alignItems: 'center',
        color: '#000',
        justifyContent: 'center',
        marginTop: 3

    },
});
