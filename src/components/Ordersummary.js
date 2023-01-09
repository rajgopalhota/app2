import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ordersummary() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order is Confirmed!!!</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}
