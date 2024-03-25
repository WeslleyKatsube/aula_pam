import { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";

import styles from "./styles";

export default function Exemplo_3 () {

    //let numero = 0;

    const [numero, setNumero] = useState (0);

    function mensagem () {
        alert('Aula de React-Native');
    }

    function incrementar () {
        setNumero (numero + 1);
        console.log(numero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <TouchableOpacity style={styles.botao} onPress={() => mensagem()}>
                <Text style={styles.txtBotao}>Botão</Text>
            </TouchableOpacity>
            <text style={styles.titulo}>{numero}</text>
            <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>Incrementar n°</Text>
            </TouchableOpacity>
        </View>

    );
}