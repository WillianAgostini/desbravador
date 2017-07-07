class MasterView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#app");
        console.log(this.element)
       this.element.innerHTML = `
        <div id="appInput"></div>
        <div id="appBody"></div>
        <div id="appList"></div>
    `;
    }


    template() {
        this.element.innerHTML = `
        <div id="appInput"></div>
        <div id="appBody"></div>
        <div id="appList"></div>
    `
    }
}