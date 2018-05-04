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

function index (Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
}

export default index;
