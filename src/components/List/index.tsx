import { ListContainer, ListContent } from "./styles";
import { CardCompontent } from "../../components/common";

const List = ({ list, handleDelete, handleModal }: any) => {
  return (
    <ListContainer>
      <ListContent>
        {list &&
          list.map((item: any) => (
            <CardCompontent
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleModal={handleModal}
            />
          ))}
      </ListContent>
    </ListContainer>
  );
};

export { List };
