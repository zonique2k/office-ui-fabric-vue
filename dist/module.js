import Vue from 'vue';

var Breadcrumb = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"breadcrumb",staticClass:"ms-Breadcrumb"},[_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"ms-Breadcrumb-list"},[_vm._t("default")],2)])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Breadcrumb-overflow"},[_c('div',{staticClass:"ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More"}),_vm._v(" "),_c('div',{staticClass:"ms-Breadcrumb-overflowMenu"},[_c('ul',{staticClass:"ms-ContextualMenu"})])])}],
  name: 'ou-breadcrumb',

  mounted: function mounted() {
    new this.$fabric.Breadcrumb(this.$refs.breadcrumb);
  }
};

var BreadcrumbItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ms-Breadcrumb-listItem"},[_c('a',{staticClass:"ms-Breadcrumb-itemLink",attrs:{"href":_vm.href}},[_vm._t("default")],2),_vm._v(" "),_c('i',{staticClass:"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"})])},staticRenderFns: [],
  name: 'ou-breadcrumb-item',

  props: {
    href: String
  }
};

function type () {
  var types = [], len = arguments.length;
  while ( len-- ) types[ len ] = arguments[ len ];

  types.push('');

  return {
    props: {
      type: {
        type: String,
        default: '',
        validator: function validator(value) {
          return types.includes(value);
        }
      }
    }
  };
}

var disabled = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

var icon = {
  props: {
    icon: String
  },

  computed: {
    iconClass: function iconClass() {
      var obj;

      return ( obj = {}, obj[("ms-Icon--" + (this.icon))] = !!this.icon, obj );
    }
  }
};

var Button = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-Button",class:_vm.buttonClass,on:{"click":_vm.clickEvent}},[(_vm.icon && _vm.type == 'hero')?_c('span',{staticClass:"ms-Button-icon"},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-Button-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.description && _vm.type == 'compound')?_c('span',{staticClass:"ms-Button-description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e()])},staticRenderFns: [],
  name: 'ou-button',

  mixins: [
    type('primary', 'hero', 'compound', 'small'),
    disabled,
    icon
  ],

  props: {
    description: String
  },

  computed: {
    buttonClass: function buttonClass() {
      var obj;

      return ( obj = {}, obj[("ms-Button--" + (this.type))] = !!this.type, obj['is-disabled'] =  this.disabled, obj );
    }
  },

  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) { this.$emit('click'); }
    }
  }
};

var Callout = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"callout",staticClass:"ms-Callout is-hidden",class:_vm.calloutClass},[_c('div',{staticClass:"ms-Callout-main"},[(_vm.showClose)?_c('button',{staticClass:"ms-Callout-close"},[_c('i',{staticClass:"ms-Icon ms-Icon--Clear"})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-Callout-header"},[_c('p',{staticClass:"ms-Callout-title"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"ms-Callout-inner"},[_c('div',{staticClass:"ms-Callout-content"},[(_vm.content)?_c('p',{staticClass:"ms-Callout-subText"},[_vm._v(_vm._s(_vm.content))]):_vm._t("content")],2),_vm._v(" "),_c('div',{staticClass:"ms-Callout-actions"},[_vm._t("actions")],2)])])]),_vm._v(" "),_c('span',{ref:"calloutTrigger"},[_vm._t("default")],2)])},staticRenderFns: [],
  name: 'ou-callout',

  mixins: [type('actionText', 'OOBE', 'peek')],

  props: {
    position: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['right', 'left', 'top', 'bottom'].includes(value);
      }
    },

    showClose: {
      type: Boolean,
      default: false
    },

    title: String,
    content: String
  },

  computed: {
    calloutClass: function calloutClass() {
      var obj;

      return ( obj = {}, obj[("ms-Callout--" + (this.type))] = !!this.type, obj['ms-Callout--close'] =  this.showClose, obj );
    }
  },

  mounted: function mounted() {
    new this.$fabric.Callout(
      this.$refs.callout,
      this.$refs.calloutTrigger,
      this.position
    );
  }
};

var Checkbox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"checkbox",staticClass:"ms-CheckBox"},[_c('input',{staticClass:"ms-CheckBox-input",attrs:{"tabindex":"-1","type":"checkbox"},on:{"click":_vm.toggle}}),_vm._v(" "),_c('label',{staticClass:"ms-CheckBox-field",class:{ 'is-disabled': _vm.disabled },attrs:{"role":"checkbox","tabindex":"0","aria-checked":"false","name":"checkbox"}},[_c('span',{staticClass:"ms-Label"},[_vm._t("default")],2)])])},staticRenderFns: [],
  name: 'ou-checkbox',

  mixins: [disabled],

  props: {
    value: Boolean
  },

  data: function data() {
    return {
      checkboxInstance: null
    };
  },

  watch: {
    value: function value() {
      this.setCheck();
    }
  },

  mounted: function mounted() {
    this.checkboxInstance = new this.$fabric.CheckBox(this.$refs.checkbox);
    this.setCheck();
  },

  methods: {
    toggle: function toggle() {
      this.$emit('input', this.checkboxInstance.getValue());
    },

    setCheck: function setCheck() {
      this.value && !this.disabled ?
        this.checkboxInstance.check() :
        this.checkboxInstance.unCheck();
    }
  }
};

var eventHub = {
  data: function data() {
    return {
      eventHub: new Vue()
    };
  },

  provide: function provide() {
    return {
      eventHub: this.eventHub
    };
  }
};

var ChoiceFieldGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"choiceFieldGroup",staticClass:"ms-ChoiceFieldGroup",attrs:{"id":"choicefieldgroup","role":"radiogroup"}},[_c('div',{staticClass:"ms-ChoiceFieldGroup-title"},[_vm._t("title")],2),_vm._v(" "),_c('ul',{staticClass:"ms-ChoiceFieldGroup-list"},[_vm._t("default")],2)])},staticRenderFns: [],
  name: 'ou-choice-field-group',

  mixins: [eventHub],

  props: {
    value: [String, Number]
  },

  watch: {
    value: function value() {
      this.setChoiceFields();
    }
  },

  created: function created() {
    this.eventHub.$on('updateValue', this.updateValue);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('updateValue', this.updateValue);
  },

  mounted: function mounted() {
    this.setChoiceFields();
    new this.$fabric.ChoiceFieldGroup(this.$refs.choiceFieldGroup);
  },

  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    },

    setChoiceFields: function setChoiceFields() {
      if (typeof this.value != 'undefined') {
        this.eventHub.$emit('setChoiceField', this.value);
      }
    }
  }
};

var ChoiceField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ms-RadioButton"},[_c('input',{staticClass:"ms-RadioButton-input",attrs:{"tabindex":"-1","type":"radio"}}),_vm._v(" "),_c('label',{ref:"radioLabel",staticClass:"ms-RadioButton-field",class:{ 'is-disabled': _vm.disabled },attrs:{"role":"radio","tabindex":"0","aria-checked":"false","name":"choicefieldgroup"},on:{"click":_vm.updateParentValue}},[_c('span',{staticClass:"ms-Label"},[_vm._t("default")],2)])])},staticRenderFns: [],
  name: 'ou-choice-field',

  mixins: [disabled],

  inject: ['eventHub'],

  props: {
    value: [String, Number]
  },

  created: function created() {
    this.eventHub.$on('setChoiceField', this.setChoiceField);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setChoiceField', this.setChoiceField);
  },

  methods: {
    updateParentValue: function updateParentValue() {
      if (!this.disabled) {
        this.eventHub.$emit('updateValue', this.value);
      }
    },

    setChoiceField: function setChoiceField(value) {
      if (this.disabled) { return; }

      if (this.value == value) {
        this.$refs.radioLabel.classList.add('is-checked');
      } else {
        this.$refs.radioLabel.classList.remove('is-checked');
      }
    }
  }
};

var CommandBar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commandBar",staticClass:"ms-CommandBar"},[_c('div',{staticClass:"ms-CommandBar-sideCommands"},[_vm._t("side")],2),_vm._v(" "),_c('div',{staticClass:"ms-CommandBar-mainArea"},[_vm._t("main"),_vm._v(" "),_vm._m(0)],2)])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel"},[_c('button',{staticClass:"ms-CommandButton-button"},[_c('span',{staticClass:"ms-CommandButton-icon"},[_c('i',{staticClass:"ms-Icon ms-Icon--More"})]),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"})]),_vm._v(" "),_c('ul',{staticClass:"ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons"},[_c('li',{staticClass:"ms-ContextualMenu-item"},[_c('a',{staticClass:"ms-ContextualMenu-link"}),_vm._v(" "),_c('i',{staticClass:"ms-Icon ms-Icon--folder"})])])])}],
  name: 'ou-command-bar',

  mounted: function mounted() {
    new this.$fabric.CommandBar(this.$refs.commandBar);
  }
};

var CommandButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton",class:_vm.commandButtonClass,on:{"click":_vm.clickEvent}},[_c('button',{staticClass:"ms-CommandButton-button"},[(_vm.icon)?_c('span',{staticClass:"ms-CommandButton-icon ms-fontColor-themePrimary"},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.type == 'dropdown')?_c('span',{staticClass:"ms-CommandButton-dropdownIcon"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronDown"})]):_vm._e()])])},staticRenderFns: [],
  name: 'ou-command-button',

  mixins: [
    type('noLabel', 'inline', 'dropdown'),
    disabled,
    icon
  ],

  computed: {
    commandButtonClass: function commandButtonClass() {
      var obj;

      return ( obj = {}, obj[("ms-CommandButton--" + (this.type))] = !!this.type, obj['is-disabled'] =  this.disabled, obj );
    }
  },

  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) { this.$emit('click'); }
    }
  }
};

var ContextualMenu = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inline-block"},[_c('span',{ref:"contextualMenuTrigger",staticClass:"inline-block"},[_vm._t("default")],2),_vm._v(" "),_c('ul',{ref:"contextualMenu",staticClass:"ms-ContextualMenu is-hidden",class:_vm.contextualMenuClass},[_vm._t("list")],2)])},staticRenderFns: [],_scopeId: 'data-v-b2d1a1e2',
  name: 'ou-contextual-menu',

  mixins: [type('multiselect'), eventHub],

  props: {
    value: {
      type: Array,
      default: function default$1() {
        return [];
      }
    }
  },

  computed: {
    contextualMenuClass: function contextualMenuClass() {
      var obj;

      return ( obj = {}, obj[("ms-ContextualMenu--" + (this.type))] = !!this.type, obj );
    }
  },

  watch: {
    value: function value() {
      this.setChildrenValue();
    }
  },

  created: function created() {
    this.eventHub.$on('updateValue', this.updateValue);
  },

  mounted: function mounted() {
    this.setChildrenValue();

    new this.$fabric.ContextualMenu(
      this.$refs.contextualMenu,
      this.$refs.contextualMenuTrigger
    );
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('updateValue', this.updateValue);
  },

  methods: {
    setChildrenValue: function setChildrenValue() {
      if (this.type == 'multiselect') {
        this.eventHub.$emit('setSelected', this.value);
      }
    },

    updateValue: function updateValue(value) {
      if (this.type != 'multiselect') { return; }

      var newValue;

      if (this.value.includes(value)) {
        newValue = this.value.filter(function (item) {
          return item !== value;
        });
      } else {
        newValue = this.value.concat(value);
      }

      this.$emit('input', newValue);
    }
  }
};

var ContextualMenuItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ms-ContextualMenu-item",class:_vm.contextualMenuItemClass},[(_vm.type == 'header')?_c('span',[_vm._v(_vm._s(_vm.name))]):_vm._e(),_vm._v(" "),(_vm.hasLink)?_c('a',{staticClass:"ms-ContextualMenu-link",class:_vm.contextualMenuLinkClass,on:{"click":_vm.clickEvent}},[_vm._v(" "+_vm._s(_vm.name)+" ")]):_vm._e(),_vm._v(" "),(_vm.hasMenu)?_c('i',{staticClass:"ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight"}):_vm._e(),_vm._v(" "),(_vm.hasMenu)?_c('ul',{staticClass:"ms-ContextualMenu is-hidden"},[_vm._t("default")],2):_vm._e()])},staticRenderFns: [],
  name: 'ou-contextual-menu-item',

  mixins: [type('divider', 'header', 'hasMenu'), disabled],

  inject: ['eventHub'],

  data: function data() {
    return {
      selected: false
    };
  },

  props: {
    name: String,
    value: [String, Number]
  },

  computed: {
    hasLink: function hasLink() {
      return this.type == 'hasMenu' || this.type == '';
    },

    hasMenu: function hasMenu() {
      return this.type == 'hasMenu';
    },

    contextualMenuItemClass: function contextualMenuItemClass() {
      var obj;

      return ( obj = {}, obj[("ms-ContextualMenu-item--" + (this.type))] = !!this.type, obj );
    },

    contextualMenuLinkClass: function contextualMenuLinkClass() {
      return {
        'is-disabled': this.disabled,
        'is-selected': this.selected
      };
    }
  },

  created: function created() {
    this.eventHub.$on('setSelected', this.setSelected);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelected', this.setSelected);
  },

  methods: {
    clickEvent: function clickEvent() {
      if (this.value) {
        this.eventHub.$emit('updateValue', this.value);
      } else if (!this.type && !this.disabled) {
        this.$emit('click');
      }
    },

    setSelected: function setSelected(values) {
      if (values.includes(this.value)) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    }
  }
};

var DatePicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"datePicker",staticClass:"ms-DatePicker"},[_c('div',{staticClass:"ms-TextField"},[(_vm.label)?_c('label',{staticClass:"ms-Label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"ms-DatePicker-event ms-Icon ms-Icon--Event"}),_vm._v(" "),_c('input',{staticClass:"ms-TextField-field",attrs:{"type":"text","placeholder":_vm.placeholder}})]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-goToday js-goToday"},[_vm._v("Go to today")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2)])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-DatePicker-monthComponents"},[_c('span',{staticClass:"ms-DatePicker-nextMonth js-nextMonth"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronRight"})]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-prevMonth js-prevMonth"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronLeft"})]),_vm._v(" "),_c('div',{staticClass:"ms-DatePicker-headerToggleView js-showMonthPicker"})])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-DatePicker-monthPicker"},[_c('div',{staticClass:"ms-DatePicker-header"},[_c('div',{staticClass:"ms-DatePicker-yearComponents"},[_c('span',{staticClass:"ms-DatePicker-nextYear js-nextYear"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronRight"})]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-prevYear js-prevYear"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronLeft"})])]),_vm._v(" "),_c('div',{staticClass:"ms-DatePicker-currentYear js-showYearPicker"})]),_vm._v(" "),_c('div',{staticClass:"ms-DatePicker-optionGrid"},[_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"0"}},[_vm._v("Jan")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"1"}},[_vm._v("Feb")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"2"}},[_vm._v("Mar")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"3"}},[_vm._v("Apr")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"4"}},[_vm._v("May")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"5"}},[_vm._v("Jun")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"6"}},[_vm._v("Jul")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"7"}},[_vm._v("Aug")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"8"}},[_vm._v("Sep")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"9"}},[_vm._v("Oct")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"10"}},[_vm._v("Nov")]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-monthOption js-changeDate",attrs:{"data-month":"11"}},[_vm._v("Dec")])])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-DatePicker-yearPicker"},[_c('div',{staticClass:"ms-DatePicker-decadeComponents"},[_c('span',{staticClass:"ms-DatePicker-nextDecade js-nextDecade"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronRight"})]),_vm._v(" "),_c('span',{staticClass:"ms-DatePicker-prevDecade js-prevDecade"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronLeft"})])])])}],
  name: 'ou-date-picker',

  props: {
    value: String,
    label: String,
    placeholder: String,

    format: {
      type: String,
      default: 'yyyy-mm-dd'
    }
  },

  data: function data() {
    return {
      datePickerInstance: null
    };
  },

  watch: {
    value: function value(value$1) {
      this.setPickerValue(value$1);
    }
  },

  mounted: function mounted() {
    var this$1 = this;

    this.datePickerInstance = new this.$fabric.DatePicker(this.$refs.datePicker).picker;

    if (this.value) {
      this.setPickerValue(this.value);
    }

    this.datePickerInstance.on('set', function () {
      this$1.updateValue(this$1.datePickerInstance.get('select', this$1.format));
    });
  },

  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    },

    setPickerValue: function setPickerValue(value) {
      this.datePickerInstance.set('select', value, { format: this.format });
    }
  }
};

var SearchBox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"searchBox",staticClass:"ms-SearchBox",class:_vm.searchBoxClass},[_c('input',{ref:"searchBoxInput",staticClass:"ms-SearchBox-field",attrs:{"type":"text"},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"blur":_vm.clearValue}}),_vm._v(" "),_c('label',{staticClass:"ms-SearchBox-label"},[_c('i',{staticClass:"ms-SearchBox-icon ms-Icon ms-Icon--Search"}),_vm._v(" "),(!_vm.hasValue)?_c('span',{staticClass:"ms-SearchBox-text"},[_vm._v(_vm._s(_vm.placeholder))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel",on:{"mousedown":_vm.clearValue}},[_vm._m(0)])])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-CommandButton-button"},[_c('span',{staticClass:"ms-CommandButton-icon"},[_c('i',{staticClass:"ms-Icon ms-Icon--Clear"})]),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"})])}],
  name: 'ou-search-box',

  mixins: [type('commandBar')],

  props: {
    value: String,
    placeholder: String,

    collapsed: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      hasValue: !!this.value
    };
  },

  computed: {
    searchBoxClass: function searchBoxClass() {
      var obj;

      return ( obj = {}, obj[("ms-SearchBox--" + (this.type))] = !!this.type, obj['is-collapsed'] =  this.collapsed, obj );
    }
  },

  mounted: function mounted() {
    new this.$fabric.SearchBox(this.$refs.searchBox);
  },

  methods: {
    updateValue: function updateValue(event) {
      this.$emit('input', event.target.value);
    },

    clearValue: function clearValue() {
      this.$emit('input', '');
    }
  }
};

// import dialogInstaller from './components/dialog';

export { Breadcrumb, BreadcrumbItem, Button, Callout, Checkbox, ChoiceFieldGroup, ChoiceField, CommandBar, CommandButton, ContextualMenu, ContextualMenuItem, DatePicker, SearchBox };
