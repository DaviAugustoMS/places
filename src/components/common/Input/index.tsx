import InputMask from "react-input-mask";
import { InputContainer, InputLabel, Input, MaskInput } from "./styles";

interface InputProps {
  label: string;
  width?: string;
  placeholder?: string;
  res?: any;
  value: string;
  setValue: any;
  textLabel: any;
  state: any;
}

const InputComponent = ({
  label,
  width,
  placeholder,
  value,
  setValue,
  textLabel,
  state,
}: InputProps) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      {textLabel === "local" ? (
        <Input
          placeholder={placeholder}
          onChange={(text) =>
            setValue({ ...state, [textLabel]: text.target.value })
          }
          width={width}
          value={value}
        />
      ) : (
        <MaskInput
          placeholder={placeholder}
          mask="99/9999"
          value={value}
          onChange={(text) =>
            setValue({ ...state, [textLabel]: text.target.value })
          }
        />
      )}
    </InputContainer>
  );
};

export { InputComponent };
