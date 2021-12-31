import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet 
} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ ...rest } : ButtonProps) {
    return (<TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        { ...rest }>
        <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});