// https://confluence.atlassian.com/adminjiracloud/advanced-use-of-the-jira-issue-collector-788726105.html

import React, { useEffect } from 'react'
import styled from 'styled-components'

export default () => {
  const DefaultButton = styled.button`
    padding: 1em 2em;
    background-color: ${props => props.bgColor
      || "rgba(0,0,0,0)"};
    color: ${props => props.color
      || "inherit"};
    border-width: 1px;
    border-radius: 5px;
    cursor: pointer;
  `

  const FixedButton = styled(DefaultButton)`
    position: fixed;
    top: 0;
    right: 20%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  `

  useEffect(() => {
    window.ATL_JQ_PAGE_PROPS =  {
      'triggerFunction': showCollectorDialog => {
        document.querySelector('#feedback-button').addEventListener('click', e => {
          e.preventDefault()
          showCollectorDialog()
        })
      }
    }
  })

  return (
    <FixedButton id="feedback-button" bgColor="#3572b0" color="white">
      Feedbacks
    </FixedButton>
  )
}
