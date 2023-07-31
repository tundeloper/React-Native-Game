import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Subtitle({children}) {
  return (
      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    subtitle: {
        textAlign: 'center',
        color: '#e2ba97',
        fontSize: 18,
        fontWeight: 'bold',
        // margin: 6,
        // borderBottomColor: 'white',
        // borderBottomWidth: 2,
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2ba97',
        borderBottomWidth: 2,
    }
})