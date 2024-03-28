import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20
    },

    container1: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        //width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container3: {
        backgroundColor: 'grey',
        borderRadius: 20,
        alignItems: 'center',
        height: 300,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 20,
    },

    numero: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
    },

    botao: {
        //width: '35%',
        padding: 10,
        paddingHorizontal: 40,
        margin: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white'
    },

    botao1: {
        width: 50,
        height: 50,
        padding: 11,
        margin: 5,
        alignItems: 'center',
        borderWidth: 1,
        //borderRadius: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white'
    },

    txtBotao: {
        fontSize: 25,
        color: '#fafafa'
    },

});

export default styles;