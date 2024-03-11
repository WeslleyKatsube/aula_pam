import { View, Text, Image } from 'react-native'; 
import styles from './styles';
import logo from 'D:/TEMP/weslley/aula_pam/assets/002-1-react-native.png';

export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>
        </View>
    );
}
