import {
  SelectContainer,
  SelectLabel,
  SelectContent,
  Select,
  SelectOption,
} from "./styles";

interface SelectProps {
  label: string;
  data: any;
  setValue: any;
  value: string;
  state: any;
}

const SelectComponent = ({
  label,
  data,
  setValue,
  value,
  state,
}: SelectProps) => {
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <SelectContent>
        <Select
          color={value === "Selecione..." ? "gray" : "black"}
          value={value}
          onChange={(e) => setValue({ ...state, country: e.target.value })}
        >
          <SelectOption defaultValue="Selecione..." disabled>
            Selecione...
          </SelectOption>
          {data &&
            data.map((item: any) => (
              <SelectOption key={item.alpha2Code} value={item.alpha2Code}>
                {item.name}
              </SelectOption>
            ))}
        </Select>
      </SelectContent>
    </SelectContainer>
  );
};

export { SelectComponent };
