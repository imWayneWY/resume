import React from 'react'

export default ({ info }) => {
  return (
    <div className="root">
      <img className="icon" src={info.icon} alt="icon"/>
      <div className="info">
        <p style={{fontWeight: 'bolder'}}>{info.type} :</p>
        {
          info.type === 'Email' 
          ? <a href={`mailto:${info.value}`}>{info.value}</a>
          : info.type === 'Tel.'
            ? <a href={`tel:${info.value}`}>{info.value}</a>
            : <p>{info.value}</p>
        }
      </div>
      <style jsx>{`
        @media (min-width: 960px){
          .root{
            display: flex;
            flex-direction: row;
            width: 90%;
            align-items: center;
            margin-top: 10px;
          }
          .icon{
            width: 32px;
            height: 32px;
          }
          .info{
            margin-left: 20px;
            flex: 1;
            font-size: 14px;
          }
        }
        @media (max-width: 959px){
          .icon{
            display: none;
          }
          .info{
            text-align: left;
          }
          .info > p {
            margin-block-start: 0;
            margin-block-end: 0;
          }
        }
      `}</style>
    </div>
  )
}
