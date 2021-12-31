import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet 
} from "react-native";

type ButtonProps = TouchableOpacityProps;

export function SkillCard({ ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                { ...rest }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
});
