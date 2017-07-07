class HttpService {

    constructor() {
        this.urlBase = 'https://api.github.com/';
    }


    get(endpoint, useUrlBase = true) {
        let url = (useUrlBase) ? this.urlBase : "";
        console.log(url + endpoint);
        return fetch(url + endpoint)
        ;
    }

    post(endpoint, dado) {

        return fetch(this.urlBase + endpoint, {
            headers: { 'Content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(dado)
        })
            .then(res => this._handleErrors(res)
                .catch(error => alert(error))
            );

    }
}