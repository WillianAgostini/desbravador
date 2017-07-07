class UserController {

    constructor() {
        let template = new ButonSearchView();
        template.update();

        let E = document.querySelector.bind(document);
        this.findUser = E("#findUser");
        this.userService = new UserService();
        this.httpService = new HttpService();
    }

    get user() {
        let response = this.userService.user(this.findUser.value).then(success => {

            let user = new UserDetails(
                success.followers,
                success.following,
                success.avatar_url,
                success.email,
                success.bio,
                success.login
            );

            let viewUser = new UserDetailsView();
            viewUser.template(user);

            this.repositories(success.repos_url);
        });

    }

  repositories(url) {
        this.httpService.get(url, false)
            .then(response => response.json())
            .then(result => {
                console.log(result);


            });
    }

}