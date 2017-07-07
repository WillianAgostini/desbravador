class UserService {

    constructor() {
        this._connection = new HttpService();
    }


    user(user) {
        return this._connection.get('users/' + user);
    }

}