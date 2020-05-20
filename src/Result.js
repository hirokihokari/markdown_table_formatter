import React from 'react'
import styled from 'styled-components'

const ResultArea = styled.div`
  height: 500px;
  border: 1px silver solid;
`

export default props => {
  const { text } = props

  return (
    <ResultArea>
      <pre>{text}</pre>
    </ResultArea>
  )
}
