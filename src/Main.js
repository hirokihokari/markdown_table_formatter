import React, { useState } from 'react'
import styled from 'styled-components'

import Input from './Input'
import Result from './Result'
import Formatter from './Formatter'

const FormatArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 500px;
`

const Left = styled.div`
  width: 500px;
  flex-grow: 2;
`
const Right = styled.div`
  width: 500px;
  flex-grow: 2;
`

const Center = styled.div`
  width: 50px;
  flex-grow: 1;
  text-align: center;
  line-height: 500px;
`

const Button = styled.button`
`

export default () => {
  const [ inputText, setInputText ] = useState('ee')
  const [ resultText, setResultText ] = useState('ee')

  const aioClick = () => {
    navigator.clipboard.readText().then(text => {
      navigator.clipboard.writeText(format(text))
    })
  }

  const onInputChange = (value) => {
    setInputText(value)
    setResultText(format(value))
  }

  const format = (value) => {
    const formatter = new Formatter(value)

    return formatter.formatted
  }

  return (
    <>
      <Button onClick={() => aioClick() }>AIO Click</Button>
      <FormatArea>
        <Left>
          <Input text={inputText} onInputChange={onInputChange}/>
        </Left>
        <Center>=></Center>
        <Right>
          <Result text={resultText}/>
        </Right>
      </FormatArea>
    </>
  )
}
