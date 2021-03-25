import AdkHomepage from "./pages/AdkHomepage";
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/components/TextEditor'


// Register Flarum Blog
app.initializers.add("adkhomepage", (app) => {
  app.routes.blog = { path: "/adkhome", component: AdkHomepage };

  extend(TextEditor.prototype, 'toolbarItems', function(toolbar) {
    console.log("Removing image button")
    console.log(toolbar);
    console.log(toolbar.items);
    console.log(toolbar.items.markdown);
    
  });

});


  