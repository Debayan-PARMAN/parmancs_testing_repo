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
});
