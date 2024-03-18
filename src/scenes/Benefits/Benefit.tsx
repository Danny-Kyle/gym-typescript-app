import React from 'react'
import { SelectedPage } from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element,
    description: string| undefined,
    title: string,
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({icon, description, title, setSelectedPage}: Props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center '>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
            </div>
        </div>
    </div>
  )
}

export default Benefit