import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import App from './App'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

ReactDOM.render(
    <React.StrictMode>
        <SWRConfig value={{ fetcher }}>
            <App />
        </SWRConfig>
    </React.StrictMode>,
    document.getElementById('root')
)