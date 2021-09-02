import React from "react"
import { GiVikingHelmet } from "react-icons/gi"
import "./modal.css"
import styled from "styled-components"
import "./viking.css"
const VikingHead = styled(GiVikingHelmet)`
  width: 32px;
  height: 32px;
  color: #502f2f;
`
const VikingHeads = () => {
  return (
    <>
      <div class="items">
        <ul class="item-list">
          {" "}
          <il>
            <VikingHead />
            <VikingHead />2 vikings - 99/hour
          </il>
          <il>
            <VikingHead />
            <VikingHead />
            <VikingHead /> 3 vikings - 129/hour
          </il>
          <il>
            <VikingHead />
            <VikingHead />
            <VikingHead />
            <VikingHead /> 4 vikings - 159/hour
          </il>
          <il>
            <VikingHead />
            <VikingHead />
            <VikingHead />
            <VikingHead />
            <VikingHead /> 5 vikings - 189/hour
          </il>
        </ul>
      </div>
    </>
  )
}

export default VikingHeads
