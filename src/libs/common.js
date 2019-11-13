/**
 * iview组件按需引用
 */
import 'iview/dist/styles/iview.css'
import {
  TimePicker, ColorPicker, ButtonGroup, Tooltip, CheckboxGroup, Checkbox, InputNumber, Page, Switch, RadioGroup, Radio, Row, Col, DatePicker, Upload, Divider, Form, Header, headerBar, Card, Dropdown, DropdownMenu, DropdownItem, Submenu, Icon, Breadcrumb, BreadcrumbItem, MenuItem, sideMenuItem, Avatar, Modal, Layout, Sider, Menu, Content, FormItem, Input, Button, Table, Select, Option, Drawer,
  Notice, Message, Collapse, Panel, Badge, Tag, Cascader, Icol
} from 'iview'
import VueQr from 'vue-qr'// 二维码渲染

export default {
  initCommonComponents (Vue) {
    Vue.prototype.$Notice = Notice
    Vue.prototype.$Message = Message
    Vue.prototype.$Modal = Modal
    Vue.component('Dropdown', Dropdown)
    Vue.component('DropdownMenu', DropdownMenu)
    Vue.component('DropdownItem', DropdownItem)
    Vue.component('Submenu', Submenu)
    Vue.component('Icon', Icon)
    Vue.component('Breadcrumb', Breadcrumb)
    Vue.component('MenuItem', MenuItem)
    Vue.component('sideMenuItem', sideMenuItem)
    Vue.component('Avatar', Avatar)
    Vue.component('BreadcrumbItem', BreadcrumbItem)
    Vue.component('Modal', Modal)
    Vue.component('Layout', Layout)
    Vue.component('Sider', Sider)
    Vue.component('Menu', Menu)
    Vue.component('Content', Content)
    Vue.component('Form', Form)
    Vue.component('FormItem', FormItem)
    Vue.component('Input', Input)
    Vue.component('Button', Button)
    Vue.component('Table', Table)
    Vue.component('Select', Select)
    Vue.component('Option', Option)
    Vue.component('Drawer', Drawer)
    Vue.component('Card', Card)
    Vue.component('headerBar', headerBar)
    Vue.component('Header', Header)
    Vue.component('Divider', Divider)
    Vue.component('Upload', Upload)
    Vue.component('DatePicker', DatePicker)
    Vue.component('Row', Row)
    Vue.component('Col', Col)
    Vue.component('Radio', Radio)
    Vue.component('RadioGroup', RadioGroup)
    Vue.component('i-switch', Switch)
    Vue.component('vue-qr', VueQr)
    Vue.component('Page', Page)
    Vue.component('InputNumber', InputNumber)
    Vue.component('CheckboxGroup', CheckboxGroup)
    Vue.component('Checkbox', Checkbox)
    Vue.component('Tooltip', Tooltip)
    Vue.component('ButtonGroup', ButtonGroup)
    Vue.component('ColorPicker', ColorPicker)
    Vue.component('TimePicker', TimePicker)
    Vue.component('Collapse', Collapse)
    Vue.component('Panel', Panel)
    Vue.component('Badge', Badge)
    Vue.component('Tag', Tag)
    Vue.component('Cascader', Cascader)
    Vue.component('i-col', Icol)
  }
}
