import React from 'react'

interface TitleProps {
  title: string
}

const Title = (props: TitleProps) => {
  const { title } = props
  return <h1>{title}</h1>
}

export default Title
