import {ChangeEvent, FC, useState} from 'react'
import './SearchPage.style.scss'
import {apiBaseUrl, apiToken} from '../../api/api'
import {queryType} from '../../types/searchTypes'

export const SearchPage: FC = () => {
    const [query, setQuery] = useState<string>('')
    const [result, setResult] = useState<Array<queryType> | []>([])

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const fetchQuery = (query: string) => {
        const options = {
            method: 'POST',
            mode: 'cors' as RequestMode,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + apiToken
            },
            body: JSON.stringify({query: query, count: 12})
        }
        fetch(apiBaseUrl, options)
            .then(async res => JSON.parse(await res.text()))
            .then(result => setResult(result.suggestions))
            .catch(e => console.error(e))
    }

    const handleSearch = async () => {
        if (query.length <= 3) return alert('Введите запрос более 3-х символов')
        await fetchQuery(query)
    }

    const mappedResult = result?.map((item, id) => (<p className="search__data" key={id}
    >{item.data.region_type_full} {item.data.region} {item.data.street_type_full ?? item.data.settlement_type} {item.data.street ?? item.data.settlement}</p>))

    return <div className="search">
        <h1 className="search__title">Поиск адресов</h1>
        <h2 className="search__desc">Введите интересующий вас адрес</h2>
        <input className="search__input" type="text" value={query} onChange={onSearchChange}
               placeholder="Введите интересующий вас адрес"/>
        <button className="search__button" type="button" onClick={handleSearch}>
            <svg className="search__icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M31.9039 29.6999L21.5159 19.3119C23.1279 17.2279 23.9999 14.6799 23.9999 11.9999C23.9999 8.79196 22.7479 5.78397 20.4839 3.51598C18.2199 1.24799 15.2039 0 11.9999 0C8.79596 0 5.77997 1.25199 3.51598 3.51598C1.24799 5.77997 0 8.79196 0 11.9999C0 15.2039 1.25199 18.2199 3.51598 20.4839C5.77997 22.7519 8.79196 23.9999 11.9999 23.9999C14.6799 23.9999 17.2239 23.1279 19.3079 21.5199L29.6959 31.9039C29.7263 31.9343 29.7625 31.9585 29.8023 31.975C29.8421 31.9915 29.8848 32 29.9279 32C29.971 32 30.0136 31.9915 30.0534 31.975C30.0932 31.9585 30.1294 31.9343 30.1599 31.9039L31.9039 30.1639C31.9343 30.1334 31.9585 30.0972 31.975 30.0574C31.9915 30.0176 32 29.975 32 29.9319C32 29.8888 31.9915 29.8461 31.975 29.8063C31.9585 29.7665 31.9343 29.7303 31.9039 29.6999ZM18.3359 18.3359C16.6399 20.0279 14.3919 20.9599 11.9999 20.9599C9.60796 20.9599 7.35997 20.0279 5.66398 18.3359C3.97198 16.6399 3.03999 14.3919 3.03999 11.9999C3.03999 9.60796 3.97198 7.35597 5.66398 5.66398C7.35997 3.97198 9.60796 3.03999 11.9999 3.03999C14.3919 3.03999 16.6439 3.96798 18.3359 5.66398C20.0279 7.35997 20.9599 9.60796 20.9599 11.9999C20.9599 14.3919 20.0279 16.6439 18.3359 18.3359Z"
                    fill="white"/>
            </svg>
            <span>Поиск</span>
        </button>
        <div className="search__results">
            <h3 className="search__addresses">Адреса</h3>
            {mappedResult}
        </div>
    </div>
}