class ButonSearchView {

    constructor() {
        this.E = document.querySelector.bind(document);
        this.element = this.E("#appInput");

    }

    update() {
        this.element.innerHTML = this.template();
    }

    getInput() {
        console.log(this.findUser);
        return this.findUser;
    }

    setError(message) {
        let errormessage = document.getElementById("errorSearch");
        console.log(errormessage);
        if(errormessage)
        errormessage.innerHTML = message
    }

    template() {
        this.setError(" ");
        return `
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                <input id="findUser" type="text" name="usrname" class="form-control" placeholder="Find user..." required>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="submit" onclick="usercontroller.user">Go!</button>
                </span>
                </div>
                <h5  id="errorSearch"></h5>
            </div>
        </div>
    `
    }

}