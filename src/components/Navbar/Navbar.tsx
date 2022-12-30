import {FC, useState} from 'react'
import './Navbar.style.scss'
import {ExitSVG, FinancesSVG, OpenedSettingsSVG, ProfileSVG,
    SettingsSVG,
} from '../../assets/svgsInJs/svgsInJs'
import { navMenu } from '../common/navMenu'

export const Navbar: FC = () => {
    const [openedSettings, setOpenedSettings] = useState<boolean>(false)

    return <aside className="nav">
        <span className="nav__title">Меню</span>
        <nav className="nav__menu">
            <ul>

                {navMenu.map((i, key) => <li key={key}>
                    {i.svg}
                    {i.component ? i.component : <a className='nav__link' href='/'>{i.name}</a>}
                </li>)}

                {/*dropdown menu starts*/}

                <li>
                    <SettingsSVG/>
                    <span className="nav__link settings-link"
                          onClick={() => setOpenedSettings(prevState => !prevState)}>Настройки</span>
                    <OpenedSettingsSVG
                        className={`nav__settings-icon ${!openedSettings ? 'reverse-settings-icon' : ''}`}/>
                </li>
                <li className={`nav__dropdown ${openedSettings ? 'active-settings' : ''}`}>
                    <ProfileSVG/>
                    <a className="nav__link nav__dropdown-text" href="/">Настройки профиля</a>
                </li>
                <li className={`nav__dropdown last-dropdown ${openedSettings ? 'active-settings' : ''}`}>
                    <FinancesSVG/>
                    <a className="nav__link nav__dropdown-text" href="/">Управление финансами</a>
                </li>

                <li>
                    <ExitSVG/>
                    <a className="nav__link" href="/">Выход</a>
                </li>
            </ul>
        </nav>
    </aside>
}