class ListRepositoriesView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#appList");
    }

    template(model) {

        this.element.innerHTML = `
            <div>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th onclick="usercontroller.orderBy(name)"> Name </th>
                            <th onclick="usercontroller.orderBy(stargazers_count)">Star</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.map(x => `
                        <tr>
                            <td> ${x.name} </td>
                            <td> ${x.stargazers_count} </td>
                        </tr>
                        `)}
                    </tbody>
                </table>
            </div>


        
    }

        `;
    }

}