class ListRepositoriesView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#appList");
    }

    template(model) {

        this.element.innerHTML = `


    ${model.map(x => ` 
            ${
                x.name
                }: 
            ${
                x.stargazers_count
                } stars
        <br>
        `)}
    }

        `;
    }

}