import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Header } from '../components/Header';
import { PlantProps } from '../libs/storage';

import waterdrop from '../assets/waterdrop.png';

import colors from '../styles/colors';

export function MyPlants() {
  const [] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterded] = useState<string>()

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotLight}>
        <Image 
          source={waterdrop} 
          style={styles.spotLightImage}
        />

        <Text style={styles.spotLightText}>
          asdasd
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  }
})