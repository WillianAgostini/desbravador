class UserService {

    constructor() {
        this._connection = new HttpService();
    }


    user(user) {
        return this._connection.get('users/' + 'WillianAgostini')
            .then(response => response.json()) // retorna uma promise
            .then(result => {
                console.log(result);
                return result;
            })

    }

}