import {ChangeEvent, FC, useState} from 'react'
import './SearchPage.style.scss'
import {queryType} from '../../types/searchTypes'
import {MainSearchSVG} from '../../assets/svgsInJs/svgsInJs'
import {fetchQuery} from '../../services/api'

export const SearchPage: FC = () => {
    const [query, setQuery] = useState<string>('')
    const [result, setResult] = useState<Array<queryType> | []>([])

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSearch = async () => {
        if (query.length <= 3) return alert('Введите запрос более 3-х символов')
        const res: Array<queryType> = await fetchQuery(query)
        setResult(res)
    }

    const mappedResult = result?.map((item, id) => (<p className="search__data" key={id}
    >{item.data.region_type_full} {item.data.region} {item.data.street_type_full ?? item.data.settlement_type} {item.data.street ?? item.data.settlement}</p>))

    return <div className="search">
        <h1 className="search__title">Поиск адресов</h1>
        <h2 className="search__desc">Введите интересующий вас адрес</h2>
        <input className="search__input" type="text" value={query} onChange={onSearchChange}
               placeholder="Введите интересующий вас адрес"/>
        <button className="search__button" type="button" onClick={handleSearch}>
            <MainSearchSVG/>
            <span>Поиск</span>
        </button>
        <div className="search__results">
            <h3 className="search__addresses">Адреса</h3>
            {mappedResult}
        </div>
    </div>
}