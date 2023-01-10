import React, { useState } from 'react'
import { ButtonBlock, ButtonText, StartDrawButton } from "./style";
import Modal from "../modal/modal";
import DB from "../../constants/db";

const DrawButton = () => {

  const participantsCount = DB.users.length; // Здесь будет подсчёт пользователей

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  if (participantsCount < 3) {

    return (

      <ButtonBlock>
        <StartDrawButton disabled>Провести жеребьёвку</StartDrawButton>
        <ButtonText>Сейчас нельзя провести жеребьевку. Для проведения жеребьевки в коробке должно быть как минимум три
          участника</ButtonText>
      </ButtonBlock>

    )
  }

  return (

    <ButtonBlock>
      <StartDrawButton onClick={openModal}>Провести жеребьёвку</StartDrawButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ButtonText> Можно провести жеребьевку. Обратите внимание, что после проведения жеребьевки добавить новых
        участников будет нельзя.</ButtonText>
    </ButtonBlock>

  )
}

export default DrawButton