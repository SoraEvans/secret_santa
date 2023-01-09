import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  ModalBackground,
  ModalCloseButton,
  ModalContent,
  ModalSubTitle,
  ModalTitle,
  ModalForm,
  ModalLink
} from './style'

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const closeModal = event => {
    if (modalRef.current === event.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    event => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  })

  if (showModal === true) {
    return (
      <ModalBackground onClick={closeModal} ref={modalRef}>
        <ModalForm>
          <ModalContent showModal={showModal}>
            <ModalTitle>Жеребьевка проведена!</ModalTitle>
            <ModalSubTitle>
              Проведена круговая жеребьевка, которая исключает ситуации,
              <br /> когда два участника дарят подарки друг другу.
              <br /> Теперь вы можете посмотреть{' '}
              <ModalLink to="/boxes">Кто чей Санта.</ModalLink>
              <br /> Или <ModalLink to="/boxes">сбросить</ModalLink> результаты
              жеребьевки.
            </ModalSubTitle>
            <ModalCloseButton
              src="/img/ModalCloseButton.svg"
              alt="Закрыть"
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalContent>
        </ModalForm>
      </ModalBackground>
    )
  }
  return null
}

Modal.defaultProps = {
  showModal: false
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func.isRequired
}

export default Modal
