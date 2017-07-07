class UserDetailsView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#appBody");
    }

    // update() {
    //     this.element.innerHTML = this.template();
    // }

    template(model) {

        this.element.innerHTML = `
        
        <div class="panel panel-default">
            <div class="panel-heading">${model.login}</div>
            <div class="panel-body">
                Panel content
            

<p class="text-muted">numeroDeSeguidores: ${model.numeroDeSeguidores}</p>
<p class="text-primary">numeroDeSeguidos: ${model.numeroDeSeguidos}</p>
<p class="text-success">imagemDoAvatar: ${model.imagemDoAvatar}</p>
<p class="text-info">e_mail: ${model.e_mail}</p>
<p class="text-warning">bio: ${model.bio}</p>

            </div>
            </div>

        </div>
        </div>
        `
    }
}