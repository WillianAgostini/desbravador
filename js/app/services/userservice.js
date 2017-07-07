class UserService {

    constructor() {
        this._connection = new HttpService();
    }


    user(user) {
        return this._connection.get('users/' + user)
            .then(response => response.json())
            .then(result => {
                return result;
            })

    }

}