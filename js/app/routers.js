class Routers {

    constructor() {
        window.addEventListener("load", (event) => this.router())

        this.component = [
            { controller: 'UserController', view: 'MasterView', url: '/' },
            { controller: 'RepositoryController', view: 'RepositoryDetailsView', url: '/repository' },
        ]

    }

    router() {
        console.log(window.location.pathname);
        let _pathName = window.location.pathname;
        let component = this.component.find(x => x.url == _pathName);

    }





}