class UserDetailsView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#appBody");
    }

    // update() {
    //     this.element.innerHTML = this.template();
    // }

setError(message){
    this.element.innerHTML = ` <h5>${message}</h5> 
    ` 
}

    template(model) {

        this.element.innerHTML = `
        
        <div class="panel panel-default">
            <div class="panel-heading">
                ${model.login}
            </div>
                <div class="panel-body ">
                  <div class="container">
                    <div class="row">
                            <img src="${model.imagemDoAvatar}" class="img-circle img-responsive col-xs-3 col-md-2" >
                        <div class=" col-sm-2 col-md-2">
                            <p class="text-muted">Seguidores: ${model.numeroDeSeguidores}</p>
                            <p class="text-primary">Seguindo: ${model.numeroDeSeguidos}</p>
                            <p class="text-info">email: ${model.email}</p>
                            <p class="text-warning">bio: ${model.bio}</p>
                        </div>
                    </div>
                </div>
        </div>
        `
    }
}