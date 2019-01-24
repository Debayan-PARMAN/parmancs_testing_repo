{/*------Start Homepage Styles -------*/ }
import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default HomeStyles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    signin: {
        flex: 1,
        flexDirection: 'row',
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
        justifyContent: 'center',
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.bodyFontSize,
        fontWeight: 'bold',
        color: styleConstants.colorStyles.fontColor,
    },
    off_h: {
        width: 320,
        height: 20,
        backgroundColor: '#fff',
    },
    off_h_r: {
        width: 40,
        height: 25,
        backgroundColor: '#fff',
    },
    off_h_r_i: {
        width: 15,
        height: 15,
        marginTop: 5,
        marginLeft: 15,
    },

    off_f: {
        width: 370,
        height: 40,
        backgroundColor: '#fff',
    },
    off_txt_h: {

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
