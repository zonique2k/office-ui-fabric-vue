// import dialogInstaller from './components/dialog';
// import dropdownInstaller from './components/dropdown';
// import labelInstaller from './components/label';
// import linkInstaller from './components/link';
// import messageBannerInstaller from './components/message_banner';
// import messageBarInstaller from './components/message_bar';
// import orgChartInstaller from './components/org_chart';
// import overlayInstaller from './components/overlay';
// import panelInstaller from './components/panel';
// import personaInstaller from './components/persona';
// import pivotInstaller from './components/pivot';
// import progressIndicatorInstaller from './components/progress_indicator';
// import searchBoxInstaller from './components/search_box';
// import spinnerInstaller from './components/spinner';
// import tableInstaller from './components/table';
// import textFieldInstaller from './components/text_field';
// import toggleInstaller from './components/toggle';

// import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue';
// import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem.vue';
import Button from './components/Button/Button.vue';

import fabric from '../lib/office-ui-fabric';
import Callout from './components/Callout/Callout.vue';

// import Checkbox from './components/Checkbox/Checkbox.vue';
// import ChoiceFieldGroup from './components/choice_field_group/ChoiceFieldGroup.vue';
// import ChoiceField from './components/choice_field_group/ChoiceField.vue';

// import CommandBar from './components/Command_bar/CommandBar.vue';
// import CommandButton from './components/Command_Button/CommandButton.vue';
// import ContextualMenu from './components/Contextual_Menu/ContextualMenu.vue';
// import ContextualMenuItem from './components/Contextual_Menu/ContextualMenuItem.vue';

// import DatePicker from './components/Date_Picker/DatePicker.vue';

// import SearchBox from './components/Search_box/SearchBox.vue';

// export { Breadcrumb, BreadcrumbItem }
// export { Button  }
// export { Callout }
// export { Checkbox }
// export { ChoiceFieldGroup, ChoiceField }

// export { CommandBar }
// export { CommandButton }
// export { ContextualMenu, ContextualMenuItem}

// export { DatePicker }
// export { SearchBox }

function wrapComponent(component, css)
{
    return {
        mixins : [component],
        beforeCreate(){
            if(!this.injected)
            {
                this.injected = true;
                this.$fabric = this.$fabric || {};
                this.$fabric.Callout = fabric.Callout;
                console.log("inject with css: " + css);
            }
        }
    }
}

const uiButton = wrapComponent(Button, "blah");
const uiCallout = wrapComponent(Callout, "blah");
export { uiButton, uiCallout }