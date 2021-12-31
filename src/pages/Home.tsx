import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from "react-native";
import { Button } from "./components/Button";
import { SkillCard } from "./components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour: number = new Date().getHours as unknown as number;
    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Evening');
    }
  }, [gretting]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome blablabla</Text>

      <Text style={styles.greetings}>
        {gretting}
      </Text>

      <TextInput style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill} />

      <Button onPress={handleAddNewSkill}></Button>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name}></SkillCard>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 20,
    padding: Platform.OS === 'ios' ? 15 : 0,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#fff'
  },
});