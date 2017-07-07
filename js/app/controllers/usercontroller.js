class UserController {

    constructor() {
        new MasterView();

        this.inputComponent = new ButonSearchView();
        this.inputComponent.update();

        this.userService = new UserService();
        this.httpService = new HttpService();


        let E = document.querySelector.bind(document);
        this.findUser = E("#findUser");
    }

    GetRepository(obj) {
        let repository = new RepositoryController();
        repository.Get(obj.cells.value.innerText);
    }

    get user() {
        let response = this.userService.user(this.findUser.value)
            // .then(response => response.json())
            .then(async (response) => {
                let viewUser = new UserDetailsView();

                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    response.json().then(x => viewUser.setError(x.message))
                    return;
                }


                // if (response.status > 400) {
                //     response.json().then(x => this.inputComponent.setError(x.message))
                //     return;
                // }
                let success = await response.json();
                let user = new UserDetails(
                    success.followers,
                    success.following,
                    success.avatar_url,
                    success.email,
                    success.bio,
                    success.login
                );


                viewUser.template(user);

                this.repositories(success.repos_url);
            }).catch(error => {
                console.log(error)
            });

    }

    repositories(url) {
        this.httpService.get(url, false)
            .then(response => response.json())
            .then(result => {
                console.log(result);

                let itens = result.sort(x => x.stargazers_count).reverse();

                let viewRepositories = new ListRepositoriesView();
                viewRepositories.template(itens);
            });
    }

    orderBy(order) {
        console.log(order);
        // viewRepositories.template(order.reverse());
    }

}