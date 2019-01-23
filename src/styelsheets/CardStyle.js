import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
    container: {
        padding:0,
    },
    mainContainer: {
        flex: 1, 
        flexDirection: 'row', 
        paddingLeft: 10, 
        paddingRight: 10, 
        marginTop: 10,
    },
    flex: {
        flex: 1,
    },
    name: {
        fontSize: 20, 
        fontWeight: 'bold',
    },
    specialization: {
        fontSize: 15, 
        textAlign: 'right',
    },
    secondContainer: {
        flex: 1, 
        flexDirection: 'row', 
        paddingLeft: 10, 
        paddingRight: 10,
    },
    slotStyle: {
        textAlign: 'right',
    },
    buttonContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        height: 30, 
        marginBottom: 10,
    },
    buttonStyle: {
        flex: 0.5, 
        backgroundColor: '#1BA529', 
        justifyContent: 'center', 
        marginLeft: 7, 
        marginRight: 7, 
        borderRadius: 5, 
        paddingLeft: 2, 
        paddingRight: 2, 
    },
    buttonText: {
        textAlign: 'center', 
        color: 'white',
    },
});