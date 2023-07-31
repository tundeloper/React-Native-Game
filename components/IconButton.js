import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function IconButton(onPress) {
  return (
      <Pressable onPress={onPress}>
          <Ionicons name="star" size={24} color='white' />
    </Pressable>
  )
}
