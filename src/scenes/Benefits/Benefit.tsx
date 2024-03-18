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
    <div>Benefit</div>
  )
}

export default Benefit