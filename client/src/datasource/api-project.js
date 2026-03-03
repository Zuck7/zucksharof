let apiURL = import.meta.env.VITE_APP_APIURL

const list = async () => {
    try {
        let response = await fetch(apiURL + '/api/projects/', {
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
        let response = await fetch(apiURL + '/api/projects/' + id, {
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

const create = async (project) => {
    try {
        let response = await fetch(apiURL + '/api/projects/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(project)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const read = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/projects/' + id, {
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

const update = async (project, id) => {
    try {
        let response = await fetch(apiURL + '/api/projects/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(project)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { list, remove, create, read, update }