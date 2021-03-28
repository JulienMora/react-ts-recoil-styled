import React from "react";
import { View } from "../styled";
import { useRecoilValue } from "recoil";
import { charCountState } from "../selectors/CharCountState";
import TextInput from "./TextInput";

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

const CharacterCounter = () => {
  return (
    <View>
      <TextInput />
      <CharacterCount />
    </View>
  );
};

export default CharacterCounter;
