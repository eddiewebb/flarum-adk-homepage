import AdkHomepage from "./pages/AdkHomepage";
import { extend } from 'flarum/common/extend';
import SignUpModal from 'flarum/forum/components/SignUpModal';


// Register Flarum Blog
app.initializers.add("adkhomepage", (app) => {
  app.routes.blog = { path: "/adkhome", component: AdkHomepage };

  /* send conversion to goole when somoennsignus up */
  extend(SignUpModal.prototype, 'onready', function(vnode){
    console.log("New signup!");
    gtag_report_conversion();
  });

});


  