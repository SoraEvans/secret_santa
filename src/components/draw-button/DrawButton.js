<<<<<<< HEAD
import React, { useState } from 'react'
import { ButtonBlock, ButtonText, StartDrawButton } from "./style";
import Modal from "../modal/modal";
import DB from "../../constants/db";

const DrawButton = () => {
=======
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBlock, ButtonText, StartDrawButton } from './style'
import DB from '../../constants/db'
>>>>>>> a35b45f4c33c2a954e7e256b634259d1bd35cf41

const DrawButton = ({ onClick }) => {
  const participantsCount = DB.users.length; // Здесь будет подсчёт пользователей

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
      <StartDrawButton onClick={onClick}>Провести жеребьёвку</StartDrawButton>
      <ButtonText> Можно провести жеребьевку. Обратите внимание, что после проведения жеребьевки добавить новых
        участников будет нельзя.</ButtonText>
    </ButtonBlock>
  )
}

DrawButton.defaultProps = {
  onClick: () => {}
}

DrawButton.propTypes = {
  onClick: PropTypes.func,
}

export default DrawButton