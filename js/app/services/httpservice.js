class HttpService {

    constructor() {
        this.urlBase = 'https://api.github.com/';
    }



    // _handleErrors(res) {
    //     if (!res.ok) throw new Error(res.statusText);
    //     return res;
    // }

    get(endpoint) {
        console.log(this.urlBase + endpoint);
        return fetch(this.urlBase + endpoint);
            // .then(res => {
            //     console.log(res.json());
            // })
            // .catch(error => alert(error));
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