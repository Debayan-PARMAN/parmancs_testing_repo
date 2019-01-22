import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default AddAddressStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },

    AddAddress: {
        flex: 1,
        
        // backgroundColor: '#ccc',
        height: 35
    },
   AddAddressText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.headerGroup.headerColor,
       margin:10,
       fontSize: 16, 
       fontWeight: 'bold'
        
    },
    AddressType: {
        flex: 1,

        // backgroundColor: '#ccc',
        height: 35
    },
   AddressTypeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.headerGroup.headerColor,
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
       marginLeft:15

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
        fontSize: styleConstants.fontStyles.bodyFontSize,
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
        fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.colorStyles.fontColor,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
    },
    AgeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.colorStyles.fontColor,
        marginTop: 20,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
    },
});
