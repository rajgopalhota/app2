import React from 'react'
import { useParams } from 'react-router-dom'
export default function UserDetails() {
    const param = useParams();
    const uid = param.uid;
  return (
    <div>
      <h2>User Details: {uid}</h2>
    </div>
  )
}
