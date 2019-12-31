import React from 'react'

export default ({title, icon}) => {
  return (
    <div className="root">
      <img className="icon" src={icon} alt="icon"/>
      <div className="title">
        <h3>{title}</h3>
        <div className="segment"></div>
      </div>
      <style jsx>{`
        .root{
          margin-top: 24px;
          margin-bottom: 18px;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .title{
          margin-left: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .segment{
          width: 100%;
          height: 2px;
          background: black;
        }
        .icon{
          width: 30px;
          height: 30px;
        }
      `}</style>
    </div>
  )
}