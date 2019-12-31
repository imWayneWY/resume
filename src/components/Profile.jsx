import React from 'react'
import Contact from './Contact'
import imgAvator from './../pics/avator.jpeg'
import imgAddress from './../pics/address.svg'
import imgPost from './../pics/post.svg'
import imgTelephone from './../pics/telephone.svg'
import imgEmail from './../pics/email.svg'

const contactArray = [
  {
    icon: imgAddress,
    type: 'Address',
    value: '1905-3500 Varsity Dr NW, Calgary, AB'
  },
  {
    icon: imgPost,
    type: 'PostCode',
    value: 'T2L1Y3'
  },
  {
    icon: imgTelephone,
    type: 'Tel.',
    value: '587-439-8687'
  },
  {
    icon: imgEmail,
    type: 'Email',
    value: 'im.weiyan@foxmail.com'
  },
]

export default () => {
  return (
    <div className="root">
      <div className="profile">
        <img className="avator" alt="my avator" src={imgAvator}/>
        <h2>Wei Yan</h2>
        <h4>Front-end Developer</h4>
      </div>
      <div className="contact">
        {
          contactArray.map((info, index) => <Contact key={index} info={info} />)
        }
      </div>
      <style jsx>{`
        .avator{
          border: 2px solid #ccc;
          border-radius: 100%;          
        }
        .profile{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .contact{
          display: flex;
          flex-direction: column;
          justify-content: center;          
        }
        @media (min-width: 960px){
          .root{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }
          .avator{
            width: 120px;
            height: 120px;
          }
          .contact{
            align-items: center;
          }
        }
        @media (max-width: 959px){
          .root{
            display: flex;
            flex-direction: row;
          }
          .avator{
            margin-top: 8px;
            width: 60px;
            height: 60px;
          }
          .contact{
            margin-left: 18px;
          }
          .profile > h2 {
            margin-block-start: 8px;
            margin-block-end: 0;
          }
          .profile{
            margin-left: 18px;
          }
        }
      `}</style>
    </div>
  )
}
