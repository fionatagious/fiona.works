import React from 'react';
import { Paper, Button } from '@mui/material'

export default function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img
        src={props.item.image.src}
        alt={props.item.image.alt}
        height={props.item.image.height}
      />
    </Paper>
  )
}