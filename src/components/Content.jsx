import React from 'react'
import Title from './Title'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true
})

export default ({ content }) => {
  const html = md.render(content.value)
  return (
    <div className="root">
      <Title title={content.title} icon={content.icon}/>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <style jsx>{`
        .root{
          width: 100%;
        }
      `}</style>
    </div>
  )
}