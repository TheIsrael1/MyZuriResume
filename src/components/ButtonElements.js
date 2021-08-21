import styled from "styled-components"

import {Link} from 'react-scroll'

export const Button = styled(Link)`
 border-radius: 50px;
 background: #722655;
 wite-space: no-wrap;
 padding: 6px 10px;
 color: #fff;
 font-size: 20px;
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;
 
 &:hover{
    color: #010606;
  transition: all 0.2s ease-in-out;
  background: #bf86c2;
 }
`