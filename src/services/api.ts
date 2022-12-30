const apiBaseUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
const apiToken = '8a04e1bf5d30db1d7a15de1b186f93c05dfc8dda '

export const fetchQuery = async (query: string) => {
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

    return await fetch(apiBaseUrl, options)
        .then(async res => JSON.parse(await res.text()))
        .then(res => res.suggestions)
        .catch(e => console.error(e))
}