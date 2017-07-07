class HttpService {

    // static urlBase = 'https://api.github.com/';

    // _handleErrors(res) {
    //     if (!res.ok) throw new Error(res.statusText);
    //     return res;
    // }

    get(endpoint) {
console.log(urlBase + endpoint);
        return fetch(urlBase + endpoint)
            .then(res => {
                res.json()
                console.log(res);
            })
            .catch(error => alert(error))
            ;
    }

    post(endpoint, dado) {

        return fetch(urlBase + endpoint, {
            headers: { 'Content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(dado)
        })
            .then(res => this._handleErrors(res)
                .catch(error => alert(error))
            );

    }
}