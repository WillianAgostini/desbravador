class ButonSearchView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#app");
    }

    update() {
        this.element.innerHTML = this.template();
    }

    template() {
        return `
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                <input id="findUser" type="text" class="form-control" placeholder="Find user...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" onclick="usercontroller.user">Go!</button>
                </span>
                </div>
            </div>
        </div>
    `
    }

}