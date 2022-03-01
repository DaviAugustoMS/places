import { ModalOverlay, ModalContainer } from "./styles";
import { CardCompontent } from "../Card";

const ModalComponent = ({ item, setIsModal, handleEdit }: any) => {
  return (
    <>
      <ModalOverlay onClick={() => setIsModal(false)} />
      <ModalContainer>
        <CardCompontent
          item={item}
          modal
          setIsModal={setIsModal}
          handleEdit={handleEdit}
        />
      </ModalContainer>
    </>
  );
};

export { ModalComponent };
