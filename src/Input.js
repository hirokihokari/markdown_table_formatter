import React from 'react'
import styled from 'styled-components'

const InputArea = styled.div`
  width: 100%;
  height: 100%;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: monospace;
`

export default props => {
  const { text, onInputChange } = props

  return (
    <InputArea>
      <Textarea
        value={text}
        onChange={ev => onInputChange(ev.target.value)}/>
    </InputArea>
  )
}
