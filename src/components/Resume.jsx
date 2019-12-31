import React from 'react'
import Profile from './Profile'
import Main from './Main'

function Resume() {
  return(
    <div className="root">
      <div className="profile">
        <Profile />
      </div>
      <div className="main">
        <Main />
      </div>
        <style jsx>{`
          .profile{
            background: #35485c;
            color: white;
          }
          .main{
            background: #eee;
          }
          @media (min-width: 960px) {
            .root{
              display: flex;
              flex-direction: row;
              height: 100%;
            }
            .profile{
              width: 25%;
              height: 100%;
            }
            .main{
              flex: 1;
              height: 100%;
              overflow: auto;
            }
          }
          @media (max-width: 959px) {
            .profile{
              width: 100%;
            }
            .main{
              width:100%
            }
          }
        `}</style>
    </div>
  )
}

export default Resume