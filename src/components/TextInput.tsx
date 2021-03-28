import React from "react";
import { View } from "../styled";
import { useRecoilState } from "recoil";
import { textState } from "../atoms/TextState";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <View>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </View>
  );
};

export default TextInput;
