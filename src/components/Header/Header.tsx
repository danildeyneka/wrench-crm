import {FC} from 'react'
import './Header.style.scss'
import {LoggedPersonSVG, WrenchLogoSVG} from '../../assets/svgsInJs/svgsInJs'

export const Header: FC = () => {

    return <header className="header">
        <div className="header__block">
            <WrenchLogoSVG className="header__img"/>
            <span className="header__title">Wrench CRM</span>
        </div>
        <div className="header__block">
            <LoggedPersonSVG className="header__img"/>
            <span className="header__title last-title">Имя Фамилия</span>
        </div>
    </header>
}