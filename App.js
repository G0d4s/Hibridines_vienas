import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [boxColors, setBoxColors] = useState([
    { primary: 'yellow', secondary: 'orange' },
    { primary: 'green', secondary: 'blue' },
    { primary: 'red', secondary: 'purple' },
    { primary: 'gray', secondary: 'pink' },
  ]);
  const [buttonPressed, setButtonPressed] = useState(false);

  const toggleBoxColor = (index) => {
    const changeColors = () => {
      const updatedColors = [...boxColors];
      const { primary, secondary } = updatedColors[index];
      updatedColors[index] = { primary: secondary, secondary: primary };
      setBoxColors(updatedColors);
    };

    
    //for (let i = 0; i < 1; i++) {i *
      setTimeout(changeColors,  50); 
    //}
  };

  return (
    <View style={styles.container}>
      <Text>Press the boxes to change their colors:</Text>
      <View style={styles.boxContainer}>
        {boxColors.map((colors, index) => (
          <TouchableOpacity
            key={index}
            style={{ ...styles.box, backgroundColor: colors.primary }}
            onPress={() => toggleBoxColor(index)}
          >
            <Text style={styles.boxText}>Box {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
