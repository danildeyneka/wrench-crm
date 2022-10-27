import React from 'react'
import './App.scss'

import {FC} from 'react'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import {NewsPage} from './components/NewsPage/NewsPage'
import {SearchPage} from './components/SearchPage/SearchPage'

export const App: FC = () => {

    return <>
        <Header/>
        <Navbar/>
        <main className='main-content'>
            <Routes>
                <Route path="/" element={<NewsPage/>}/>
                <Route path="address" element={<SearchPage/>}/>
            </Routes>
        </main>
    </>
}

export default App
