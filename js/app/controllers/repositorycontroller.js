class RepositoryController {

    constructor() {
        this.connection = new HttpService();
    }

    Get(nameRepository) {

        this.connection.get("repos/" + nameRepository).then(async (response) => {

            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            let models = await response.json();
            console.log(models);    
            let viewRepository = new RepositoryDetailsView();
            viewRepository.template(models);
        })

    }

}