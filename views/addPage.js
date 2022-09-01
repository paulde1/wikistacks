const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>        
    <input id="title" name="title" placeholder = "Author name..." type="text" class="form-control"/>
    </div>
    
    <div> 
    <input id="title" name="title" placeholder = "Author email..." type="text" class="form-control"/>
    </div>
    
    <div>
    <input id="title" name="title" placeholder = "Page title.." type="text" class="form-control"/>
    </div>

    <div>
    <input id="title" name="title" placeholder = "Page content..." type="text" class="form-control"/>
    </div>
    
    <div>
    <input id="title" name="title" placeholder = "Page Status..." type="text" class="form-control"/>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);