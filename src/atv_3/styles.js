import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20
    },

    container1: {
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
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
    },

    botao1: {
        //width: '35%',
        padding: 10,
        paddingHorizontal: 20,
        margin: 5,
        alignItems: 'center',
        borderWidth: 1,
        //borderRadius: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
    },

    txtBotao: {
        fontSize: 25,
        color: '#fafafa'
    },

});

export default styles;