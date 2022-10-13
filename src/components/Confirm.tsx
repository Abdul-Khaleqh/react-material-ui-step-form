import React from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import DropzoneBox from './DropzoneBox'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const DragandDrop = styled(Box)`
  border: 1px dashed black;
  background-color: #cacfcf;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    background-color: #076e28;
  }
`

export default function Confirm() {
  return (
    <>
      <Container>
        <h1>Space Photos</h1>
        <p>Add atleast 4 Photos that represent the information you have included in the description</p>
        <DragandDrop>
          <h2>Drag and Drop files here</h2>
          <DropzoneBox />

          <p>or</p>
          <Button variant='contained' component='label'>
            Upload File
            <input type='file' hidden />
          </Button>
        </DragandDrop>
      </Container>
    </>
  )
}
