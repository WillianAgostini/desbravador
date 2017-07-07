class MasterView {

    constructor() {
        let E = document.querySelector.bind(document);
        this.element = E("#app");
        console.log(this.element)
       this.element.innerHTML = `
        <div id="appInput"></div><br>
        <div id="appBody"></div><br>
        <div id="appList"></div><br>
        <div id="appModal"></div><br>
        
    `;
    }

}