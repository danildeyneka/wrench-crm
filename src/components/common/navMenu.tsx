import {
    CalendarSVG,
    HouseSVG,
    MapsSVG,
    SearchSVG,
    TablesSVG,
    WidgetsSVG
} from '../../assets/svgsInJs/svgsInJs'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const navMenu = [
    {
        svg: <HouseSVG/>,
        component: <>
            <NavLink className="nav__link" to="/" end>Главная</NavLink>
            <span className="nav__active"/>
        </>
    },
    {
        svg: <SearchSVG/>,
        component: <>
            <NavLink className="nav__link" to="address">Поиск адресов</NavLink>
            <span className="nav__active"/>
        </>
    },
    {
        svg: <TablesSVG/>,
        name: 'Таблицы'
    },
    {
        svg: <CalendarSVG/>,
        name: 'Календарь'
    },
    {
        svg: <MapsSVG/>,
        name: 'Карты'
    },
    {
        svg: <WidgetsSVG/>,
        name: 'Виджеты'
    }
]