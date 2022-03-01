import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import {
  CardContainer,
  CardContentTop,
  CardContentBottom,
  CardFlag,
  CardFlagImage,
  CardName,
  CardButtons,
  CardButton,
  CardText,
  CardTextEdit,
  CardInput,
  CardInputData,
} from "./styles";

const CardCompontent = ({
  item,
  handleDelete,
  handleModal,
  modal,
  setIsModal,
  handleEdit,
}: any) => {
  const [isEditing, setIsEditing] = useState({
    local: item.local,
    meta: item.meta,
  });

  return (
    <CardContainer>
      <CardContentTop>
        <CardFlag>
          <CardFlagImage src={item.flag} alt={item.name} />
          <CardName>{item.name}</CardName>
        </CardFlag>
        <CardButtons>
          {!modal ? (
            <CardButton onClick={() => handleModal(item)}>
              <EditIcon style={{ color: "#868686", fontSize: 20 }} />
            </CardButton>
          ) : (
            <CardButton
              onClick={() =>
                handleEdit({
                  ...item,
                  local: isEditing.local,
                  meta: isEditing.meta,
                })
              }
            >
              <CheckIcon style={{ color: "#4f9419", fontSize: 20 }} />
            </CardButton>
          )}
          <CardButton
            onClick={() => (!modal ? handleDelete(item.id) : setIsModal(false))}
          >
            <CloseIcon style={{ color: "#868686", fontSize: 22 }} />
          </CardButton>
        </CardButtons>
      </CardContentTop>
      {modal && <CardTextEdit>Editar Local e Meta</CardTextEdit>}
      <CardContentBottom>
        <CardText>
          Local:{" "}
          {!modal ? (
            item.local
          ) : (
            <CardInput
              value={isEditing.local}
              onChange={(text) =>
                setIsEditing({ ...isEditing, local: text.target.value })
              }
            />
          )}
        </CardText>
        <CardText>
          Meta:{" "}
          {!modal ? (
            item.meta
          ) : (
            <CardInputData
              placeholder="mês/ano"
              mask="99/9999"
              value={isEditing.meta}
              onChange={(text) =>
                setIsEditing({ ...isEditing, meta: text.target.value })
              }
            />
          )}
        </CardText>
      </CardContentBottom>
    </CardContainer>
  );
};

export { CardCompontent };
