import React from 'react'
import Content from './Content'
import imgSkill from './../pics/code.svg'
import imgDemo from './../pics/web.svg'
import imgExperience from './../pics/experience.svg'
import imgEducation from './../pics/education.svg'

import { markdown } from './../markdown'
const contents = [
  {
    title: 'HIGHLIGHTS OF QUALIFICATIONS',
    icon: imgSkill,
    value: markdown.skill,
  },
  {
    title: 'DEMOS',
    icon: imgDemo,
    value: markdown.demos,
  },
  {
    title: 'EXPERIENCE',
    icon: imgExperience,
    value: markdown.experience,
  },
  {
    title: 'EDUCATION and CERTIFICATIONS',
    icon: imgEducation,
    value: markdown.education,
  }
]

export default () => {
  return (
    <div className="root">
      {contents.map((content, index) => <Content key={index} content={content} />)}
      <style jsx>{`
        .root{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          padding-bottom: 64px;
        }
      `}</style>
    </div>
  )
}