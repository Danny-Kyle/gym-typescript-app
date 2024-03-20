import { ClassType } from '@/shared/types'
import React from 'react'

type Props = {
    name: string,
    description?: string,
    image: string,
    item:  ClassType
}

const Class = ({item, name, description, image}: Props) => {
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>Class</li>
  )
}

export default Class