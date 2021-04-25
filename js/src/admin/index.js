import { extend } from "flarum/extend";
import BasicsPage from "flarum/components/BasicsPage";

app.initializers.add("adkhomepage", () => {
  extend(BasicsPage.prototype, "homePageItems", (items) => {
    items.add("adkhomepage", {
      path: "/adkhome",
      label: app.translator.trans("adkhomepage.admin.homepage"),
    });
  });
  app.extensionData.for('webbinaro-adkhomepage')
  .registerSetting(
      {
        setting: 'adkhomepage.discussion_button', // This is the key the settings will be saved under in the settings table in the database.
        label: app.translator.trans('adkhomepage.admin.settings.discussion_button'), // The label to be shown letting the admin know what the setting does.
        type: 'boolean', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
      },
      30 // Optional: Priority
    );
});
