
class UserController {

    constructor() {
        let template = new ButonSearchView();
        template.update();

        let E = document.querySelector.bind(document);
        this.findUser = E("#findUser");

        this.connection = new HttpService();
    }

    get user() {
        console.log(this.findUser.value);
        this.connection.get('users/' + this.findUser.value);
    }


}