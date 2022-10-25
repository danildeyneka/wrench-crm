import {FC} from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: FC = () => {

    return <nav>
nav
        <NavLink to='/' end>news</NavLink>
        <NavLink to='address'>search</NavLink>
    </nav>
}