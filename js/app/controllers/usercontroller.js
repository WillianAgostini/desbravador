
class UserController {

    constructor() {
        let template = new ButonSearchView();
        template.update();

        let E = document.querySelector.bind(document);
        this.findUser = E("#findUser");

        this.userService = new UserService();
    }

    get user() {
        console.log(this.findUser.value);
         let response = this.userService.user(this.findUser.value).then(suceess=>{
             console.warn(suceess)
         });

    }


}