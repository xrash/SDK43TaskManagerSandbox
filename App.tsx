import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { PermissionsControls } from './PermissionsControls'
import { LocationTaskControls } from './LocationTaskControls'
import { BackgroundFetchTaskControls } from './BackgroundFetchTaskControls'
import './defineTaskLocation'
import './defineTaskBackgroundFetch'
import './printRegisteredTasks'

export default function App() {
  const [controls, setControls] = useState<'location' | 'bg-fetch'>('bg-fetch')

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <PermissionsControls />
      </View>
      <View>
        <Button
          title={controls === 'location' ? 'location; see bg-fetch' : 'bg-fetch; see location'}
          onPress={() => {
            if (controls === 'location') {
              setControls('bg-fetch')
            } else {
              setControls('location')
            }
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        {controls === 'location' && (
          <LocationTaskControls />
        )}
        {controls === 'bg-fetch' && (
          <BackgroundFetchTaskControls />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    flex: 1,
    backgroundColor: 'green',
  },
});
