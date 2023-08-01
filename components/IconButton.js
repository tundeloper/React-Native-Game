import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function IconButton({onPress, icon, color}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}> 
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
})