import React, { useState } from "react"
import styled from "styled-components"
import Modal from "./modal.js"
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `

const Button = styled.button`
  min-width: 100px;
  height: 18px;
  padding: 10px 25px;
  cursor: pointer;
  color: white;
  margin-top: 30px;
  margin-left: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  background-color: #04471d;

  padding-bottom: 30px;
  border-radius: 12px;
`

const Quote = () => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <Button onClick={openModal}>Quote</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default Quote
