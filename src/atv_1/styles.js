import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 18,        
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#e3f2fd',
        borderRadius: 20,
        justifyContent: 'center'
    },  
    titulo: {
        margin: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565c0' 
    },
    imagem: {
        width: '80%',
        resizeMode: 'center'


    }
});

export default styles;