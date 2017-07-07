class ListRepositoriesView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#appList");
    }

    template(model) {
        this.model = model;
        let table = `
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th id="StarTable">Star <span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span> </th>
                            <th id="NameTable"> Name </th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.map(x => `
                        <tr onclick="usercontroller.GetRepository(this)">
                            <td> ${x.stargazers_count} </td>
                            <td id="value"> ${x.full_name} </td>
                        </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;

        this.element.innerHTML = `
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" >
            <div class="panel panel-default">
                <div  class="panel-heading" role="tab" id="headingOne" href="#collapseOne" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseOne" >
                    <h4 class="panel-title">
                            Repositorios
                    </h4>
                </div>
                <div expanded="false" id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body list-group">
                        ${table}
                    </div>
                </div>
            </div>
        </div>
`;
        let element = document.getElementById('StarTable')
        if (element) {
            element.onclick = () => {
                this.template(this.model.reverse())
            }
        }

        let elementName = document.getElementById('NameTable')
        if (elementName) {
            elementName.onclick = () => {
                this.template(this.model.sort(x => x.name))
            }
        }

    }

}