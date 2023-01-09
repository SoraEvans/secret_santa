import React, { useState } from 'react'
import { ButtonText, StartDrawButton } from "./style";
import Modal from "../modal/modal";

const DrawButton = () => {

  const participantsCount = 5; // Здесь будет подсчёт пользователей

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  if (participantsCount < 3) {

    return (

      <>
        <StartDrawButton disabled>Провести жеребьёвку</StartDrawButton>
        <ButtonText>Сейчас нельзя провести жеребьевку. Для проведения жеребьевки в коробке должно быть как минимум три
          участника</ButtonText>
      </>

    )
  }

  return (

    <>
      <StartDrawButton onClick={openModal}>Провести жеребьёвку</StartDrawButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ButtonText> Можно провести жеребьевку. Обратите внимание, что после проведения жеребьевки добавить новых
        участников будет нельзя.</ButtonText>
    </>

  )
}

export default DrawButton