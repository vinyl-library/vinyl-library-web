import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from 'compfest-silicon'
import React from 'react'
import { ConfirmationModalProps } from './interface'

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isModalOpen,
  setCloseModal,
}) => {
  return (
    <Modal isDisplayed={isModalOpen} onClose={setCloseModal} variant="md">
      <ModalOverlay />
      <ModalContent className="bg-[#FFFFFF]">
        <ModalCloseButton color="#FFFFFF" />

        <ModalHeader className="text-2xl text-[#28293D] dark:text-white">
          Are you sure?
        </ModalHeader>
        <ModalFooter className="flex flex-col gap-2">
          <button
            className="w-full flex items-center justify-center bg-[#F5F8FF] text-bean"
            onClick={setCloseModal}
            type="button"
          >
            No
          </button>
          <button
            className="flex items-center justify-center w-full"
            type="submit"
          >
            Yes
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
