import React from "react";
import { View, Title } from "./styled";
import CharacterCounter from "./components/CharacterCounter";

const App = () => {
  return (
    <View>
      <Title>Hello World!</Title>
      <CharacterCounter />
    </View>
  );
};

export default App;
