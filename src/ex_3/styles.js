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
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botao: {
        //width: '35%',
        padding: 10,
        paddingHorizontal: 40,
        margin: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    txtBotao: {
        fontSize: 25,
        color: '#fafafa'
    },

});

export default styles;