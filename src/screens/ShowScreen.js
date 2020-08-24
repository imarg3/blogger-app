import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: route.params.id })}
        >
          <EvilIcons name="pencil" style={styles.pencilicon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pencilicon: {
    paddingHorizontal: 10,
    fontSize: 35,
  },
});

export default ShowScreen;
