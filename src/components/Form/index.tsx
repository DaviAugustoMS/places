import { FormContainer, FormContent } from "./styles";

import { SelectComponent, InputComponent, ButtonComponent } from "../common";

interface IFormProps {
  countries: any;
  state: any;
  handleSubmit: any;
}

const Form = ({ countries, state, handleSubmit }: IFormProps) => {
  return (
    <FormContainer>
      <FormContent>
        <SelectComponent
          data={countries}
          setValue={state.action}
          value={state.value.country}
          state={state.value}
          label="Pais"
        />
        <InputComponent
          label="Local"
          placeholder="Digite o local que deseja conhecer"
          value={state.value.local}
          textLabel="local"
          state={state.value}
          setValue={state.action}
        />
        <InputComponent
          label="Meta"
          placeholder="mês/ano"
          value={state.value.meta}
          textLabel="meta"
          state={state.value}
          setValue={state.action}
        />
        <ButtonComponent onClick={handleSubmit} />
      </FormContent>
    </FormContainer>
  );
};

export { Form };
