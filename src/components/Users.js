import React from 'react'
// import { Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
export default function Users() {
  const [searchparams, setsearchparams] = useSearchParams();
  const showactiveusers = searchparams.get('filter') === 'active';
  return (
    <>
      <div>
        {/* <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2> */}
        <div className="btngp">
          <button onClick={() => setsearchparams({ filter: 'active' })}>ACTIVE</button>
          <button id="res" onClick={() => setsearchparams({})}>RESET</button>
          {
            showactiveusers ? <h2>These are active users</h2> : <h2>These are all users</h2>
          }
        </div>
      </div>
      {/* <Outlet/> */}
    </>
  )
}