import {FC, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.style.scss'
import {
    CalendarSVG, ExitSVG, FinancesSVG,
    HouseSVG,
    MapsSVG, OpenedSettingsSVG, ProfileSVG,
    SearchSVG,
    SettingsSVG,
    TablesSVG,
    WidgetsSVG
} from '../../assets/svgsInJs/svgsInJs'

export const Navbar: FC = () => {
    const [openedSettings, setOpenedSettings] = useState<boolean>(false)

    return <aside className="nav">
        <span className="nav__title">Меню</span>
        <nav className="nav__menu">
            <ul>
                <li>
                    <HouseSVG className="nav__icon"/>
                    <NavLink className="nav__link" to="/" end>Главная</NavLink>
                    <span className="nav__active"/>
                </li>
                <li>
                    <SearchSVG className="nav__icon"/>
                    <NavLink className="nav__link" to="address">Поиск адресов</NavLink>
                    <span className="nav__active"/>
                </li>
                <li>
                    <TablesSVG className="nav__icon"/>
                    <a className="nav__link" href="/">Таблицы</a>
                </li>
                <li>
                    <CalendarSVG className="nav__icon"/>
                    <a className="nav__link" href="/">Календарь</a>
                </li>
                <li>
                    <MapsSVG className="nav__icon"/>
                    <a className="nav__link" href="/">Карты</a>
                </li>
                <li>
                    <WidgetsSVG className="nav__icon"/>
                    <a className="nav__link" href="/">Виджеты</a>
                </li>

                {/*dropdown menu starts*/}

                <li>
                    <SettingsSVG className="nav__icon"/>
                    <span className="nav__link settings-link"
                          onClick={() => setOpenedSettings(prevState => !prevState)}>Настройки</span>
                    <OpenedSettingsSVG
                        className={`nav__settings-icon ${!openedSettings ? 'reverse-settings-icon' : ''}`}/>
                </li>
                <li className={`nav__dropdown ${openedSettings ? 'active-settings' : ''}`}>
                    <ProfileSVG className="nav__icon"/>
                    <a className="nav__link nav__dropdown-text" href="/">Настройки профиля</a>
                </li>
                <li className={`nav__dropdown last-dropdown ${openedSettings ? 'active-settings' : ''}`}>
                    <FinancesSVG className="nav__icon"/>
                    <a className="nav__link nav__dropdown-text" href="/">Управление финансами</a>
                </li>

                <li>
                    <ExitSVG className="nav__icon"/>
                    <a className="nav__link" href="/">Выход</a>
                </li>
            </ul>
        </nav>
    </aside>
}