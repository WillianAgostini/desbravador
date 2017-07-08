class RepositoryDetailsView {

  constructor() {
    let E = document.querySelector.bind(document);
    this.element = E("#app");
  }

  template(model) {
    localStorage.setItem('masterHtml', this.element.innerHTML);
    console.log(this.element.innerHTML);
    this.element.innerHTML = `
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title"> <button id="pressBack" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button> ${model.name}</h3>
              </div>
              <div class="panel-body">
                <p>  ${'Descição: ' + model.description} </p>
                <p>  ${'Linguagem:' + model.language} </p>
                <p> ${model.stargazers_count + ' stars'}  </p>
                <a href="${model.clone_url}">${model.clone_url}</a>
              </div>
            </div>
        `;


    let elementName = document.getElementById('pressBack')
    if (elementName) {
      elementName.onclick = () => this.back();
    }

  }

  back() {
    this.element.innerHTML = localStorage.getItem('masterHtml');
  }

}