
import AdkHomepage from "./pages/AdkHomepage";

// Register Flarum Blog
app.initializers.add("adkhomepage", (app) => {
  app.routes.blog = { path: "/adkhome", component: AdkHomepage };
});
  