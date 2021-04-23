import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from '../components/Button';


export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😆
        </Text>

        <Text style={styles.title}>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </Text>
      </View>

      <View style={styles.footer}>
        <Button />
      </View>
    </SafeAreaView>
  )
}