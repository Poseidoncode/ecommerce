import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import InputSwitch from "primevue/inputswitch";
import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import OverlayPanel from "primevue/overlaypanel";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import AutoComplete from "primevue/autocomplete";
import Textarea from "primevue/textarea";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import PanelMenu from "primevue/panelmenu";
import InputNumber from "primevue/inputnumber";
import Password from "primevue/password";
import PrimeVue from "primevue/config";
import Galleria from "primevue/galleria";
import FileUpload from "primevue/fileupload";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Tooltip from "primevue/tooltip";
import Sidebar from "primevue/sidebar";
import BadgeDirective from "primevue/badgedirective";
import Editor from "primevue/editor";
import Slider from "primevue/slider";

export default (app) => {
  app.component("InputText", InputText);
  app.component("InputSwitch", InputSwitch);
  app.component("Button", Button);
  app.component("Paginator", Paginator);
  app.component("Dropdown", Dropdown);
  app.component("PanelMenu", PanelMenu);
  app.component("Dialog", Dialog);
  app.component("Menubar", Menubar);
  app.component("OverlayPanel", OverlayPanel);
  app.component("Calendar", Calendar);
  app.component("Checkbox", Checkbox);
  app.component("RadioButton", RadioButton);
  app.component("MultiSelect", MultiSelect);
  app.component("AutoComplete", AutoComplete);
  app.component("Textarea", Textarea);
  app.component("DataTable", DataTable);
  app.component("Column", Column);
  app.component("InputNumber", InputNumber);
  app.component("Password", Password);
  app.component("Galleria", Galleria);
  app.component("FileUpload", FileUpload);
  app.component("TabView", TabView);
  app.component("TabPanel", TabPanel);
  app.component("Sidebar", Sidebar);
  app.component("Editor", Editor);
  app.component("Slider", Slider);
  // .use(ToastService);
  app.directive("tooltip", Tooltip);
  app.directive("click-outside", {
    mounted(el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener("click", el.clickOutsideEvent);
    },
  });
  app.directive("badge", BadgeDirective);
  app.use(PrimeVue);
  return app;
};
