import React from 'react'

import './Map.css'

export default function Map() {
    const map = new window.google.maps.Map()
  return (
      <div className={`map ${props.className}`}
      style={props.style}
      >
    </div>
  )
}
