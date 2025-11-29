let apiURL = import.meta.env.VITE_APP_APIURL
import { getToken } from "../components/auth/auth-helper"

const list = async () => {
    try {
        let response = await fetch(apiURL + '/api/services/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/services/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const create = async (service) => {
    try {
        let response = await fetch(apiURL + '/api/services/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(service)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const read = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/services/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (service, id) => {
    try {
        let response = await fetch(apiURL + '/api/services/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(service)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { list, remove, create, read, update }