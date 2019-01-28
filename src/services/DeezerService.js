
import fetchJsonp from 'fetch-jsonp'

const API_ENDPOINT = 'https://api.deezer.com/search?q='

export default {
    fetchAll(search, filter) {
        return fetchJsonp(`${API_ENDPOINT}+${search}&order=${filter}&output=jsonp`)
            .then(response => response.json())
            .then(response => {
                if (response.error === 1) {

                    return Promise.reject(response)
                } else {
                    return Promise.resolve(response)
                }
            })
    }
}
