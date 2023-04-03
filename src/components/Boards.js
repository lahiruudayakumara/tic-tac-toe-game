import React from 'react'

import {Box} from "./Box"
import "./board.css"


export const Boards = ({ board, onClick }) => {
  return (
    <div className='board'>
        {board.map((value, idx) => {
            return <Box value={value} onClick={() => value === null && onClick(idx)}/>
        })}
    </div> 
  )
}

