import { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";

import styles from "./styles";

export default function Atividade_3 () {

    //let numero = 0;

    const [numero, setNumero] = useState (0);

    function limpar () {
        setNumero (numero * 0);
    }

    function adicao () {
        setNumero (numero + 1);
        console.log(numero);
    }

    function subtracao () {
        setNumero (numero - 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.container3}>
            <Text style={styles.titulo}>Atividade 3</Text>
                <View style={styles.container1}>
                <TouchableOpacity style={styles.botao1} onPress={() => subtracao()}>
                <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>

                <text style={styles.numero}>{numero}</text>
                
                <TouchableOpacity style={styles.botao1} onPress={() => adicao()}>
                <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
            <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
}