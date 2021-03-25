import { extend } from "flarum/extend";
import BasicsPage from "flarum/components/BasicsPage";

app.initializers.add("adkhomepage", () => {
  extend(BasicsPage.prototype, "homePageItems", (items) => {
    items.add("adkhomepage", {
      path: "/adkhome",
      label: app.translator.trans("adkhomepage.admin.homepage"),
    });
  });
});
