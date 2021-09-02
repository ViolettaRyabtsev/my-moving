import React from "react"
import styled from "styled-components"
import { MdClose, MdCall } from "react-icons/md"
import VikingHeads from "./viking"
import "./modal.css"

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0, 0);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWraper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;

  grid-column: 1 / 1;
  grid-row: 1 / span 4;

  z-index: 10;

  position: fixed;
`
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWraper showModal={showModal} class="modal">
            {/* <ModalImg src={require("./modal.jpg")} /> */}
            <CloseModalButton
              class="close-button"
              onClick={() => setShowModal(prev => !prev)}
            />
            <h3 class="head-Of-modal"> READY TO GET MOVING?</h3>
            <VikingHeads class="vikings" />
            <h3 class="exeptions">
              LOW, 3 HOUR MINIMUM! Unlike most other moving services that charge
              3 and 4 hour minimums, Viking has a reasonable, 3 hour minimum for
              our services. <br></br>* No surcharge for credit cards! Our price
              is the same if you choose to put your charges on your credit card,
              and Viking accepts all major credit cards.
            </h3>

            <h3>Call us : 818 845 4647</h3>
          </ModalWraper>
        </Background>
      ) : null}
    </>
  ) //return
} //const
export default Modal
