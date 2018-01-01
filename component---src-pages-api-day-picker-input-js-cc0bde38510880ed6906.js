webpackJsonp([0xc770d3d50527],{304:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),r=a(n),u=l(9),d=a(u),c=l(28),o=a(c),f=l(16),m=a(f),i=l(14),s=a(i),p=l(52),h=a(p);t.default=function(){return r.default.createElement(s.default,{title:"DayPickerInput API"},r.default.createElement(m.default,null,"import DayPickerInput from 'react-day-picker/DayPickerInput'"),r.default.createElement("h2",null,"API summary"),r.default.createElement("h4",null,"Component’s Props"),r.default.createElement("p",null,r.default.createElement("a",{href:"#classNames"},"classNames"),","," ",r.default.createElement("a",{href:"#clickUnselectsDay"},"clickUnselectsDay"),","," ",r.default.createElement("a",{href:"#component"},"component"),","," ",r.default.createElement("a",{href:"#dayPickerProps"},"dayPickerProps"),", ",r.default.createElement("a",{href:"#format"},"format"),","," ",r.default.createElement("a",{href:"#formatDate"},"formatDate"),","," ",r.default.createElement("a",{href:"#hideOnDayClick"},"hideOnDayClick"),","," ",r.default.createElement("a",{href:"#inputProps"},"inputProps"),","," ",r.default.createElement("a",{href:"#overlayComponent"},"overlayComponent"),","," ",r.default.createElement("a",{href:"#parseDate"},"parseDate"),", ",r.default.createElement("a",{href:"#placeholder"},"placeholder"),","," ",r.default.createElement("a",{href:"#showOverlay"},"showOverlay"),", ",r.default.createElement("a",{href:"#value"},"value")),r.default.createElement("h4",null,"Event handlers"),r.default.createElement("p",null,r.default.createElement("a",{href:"#onDayChange"},"onDayChange")),r.default.createElement("h4",null,"Public methods"),r.default.createElement("p",null,r.default.createElement("a",{href:"#getDayPicker"},"getDayPicker"),", ",r.default.createElement("a",{href:"#getInput"},"getInput"),","," ",r.default.createElement("a",{href:"#hideDayPicker"},"hideDayPicker"),","," ",r.default.createElement("a",{href:"#showDayPicker"},"showDayPicker")),r.default.createElement("hr",null),r.default.createElement(h.default,null,r.default.createElement("h2",null,"DayPickerInput Props"),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"classNames"}),"classNames ",r.default.createElement("code",null,"Object")),r.default.createElement("p",null,"Customize the CSS class names used when rendering the component."),r.default.createElement("p",null,"The object expects the following keys:"),r.default.createElement(m.default,null,"{\n  container,            // The container element\n  overlayWrapper,       // The overlay's wrapper\n  overlay,              // The overlay's container\n}"),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"clickUnselectsDay"}),"clickUnselectsDay ",r.default.createElement("code",null,"boolean = false")),r.default.createElement("p",null,"Unselect and clear the input when clicking on a previously selected day."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"component"}),"component ",r.default.createElement("code",null,'string | React.Component = "input"')),r.default.createElement("p",null,"The component class to render the input field."),r.default.createElement("p",null,"The component must be compatible with the standard HTML"," ",r.default.createElement("code",null,"input"),": i.e. it should support the",r.default.createElement("code",null,"onChange"),", ",r.default.createElement("code",null,"onFocus"),", ",r.default.createElement("code",null,"onKeyUp"),","," ",r.default.createElement("code",null,"onClick")," and ",r.default.createElement("code",null,"onBlur")," and the ",r.default.createElement("code",null,"focus")," ","props."),r.default.createElement("p",null,"If your custom component doesn’t support such props, wrap it in a component contaning them. For example:"),r.default.createElement(m.default,null,"import React from 'react';\nimport { DayPickerInput } from 'react-day-picker';\nimport MyInputWithoutFocus from './MyInputWithoutFocus';\n\nclass MyInputWithFocus extends React.Component {\n  focus = () => {\n    this.input.focus();\n  }\n  render() {\n    return (\n      <MyInputWithoutFocus \n        ref={el => (this.input = el)} \n        {...this.props} \n      />\n    );\n  }\n}\n\nfunction MyDayPickerInput(props) {\n  return <DayPickerInput component={MyInputWithFocus} />\n} \n"),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"dayPickerProps"}),"dayPickerProps ",r.default.createElement("code",null,"Object")),r.default.createElement("p",null,"The ",r.default.createElement(d.default,{to:"/api/DayPicker"},"DayPicker props")," to customize the calendar rendered in the overlay."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"format"}),"format ",r.default.createElement("code",null,"string | string[]")),r.default.createElement("p",null,"The format string(s) used for formatting and parsing dates. It works with"," ",r.default.createElement("a",{href:"#parseDate"},r.default.createElement("code",null,"parseDate"))," ","and"," ",r.default.createElement("a",{href:"#formatDate"},r.default.createElement("code",null,"formatDate"))),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"formatDate"}),"formatDate"," ",r.default.createElement("code",null,"(date: Date?, format: string? | string[]?, locale: string?) ⇒ string")),r.default.createElement("p",null,"Date formatter used for displaying the selected date as value of the input field. As default, it returns dates formatted as"," ",r.default.createElement("code",null,"YYYY-M-D"),".",r.default.createElement("br",null),"Arguments: ",r.default.createElement("code",null,"format")," is the value coming from the"," ",r.default.createElement("a",{href:"#format"},r.default.createElement("code",null,"format"))," ","prop, while ",r.default.createElement("code",null,"locale")," is from"," ",r.default.createElement("a",{href:"#dayPickerProps"},r.default.createElement("code",null,"dayPickerProps")),".",r.default.createElement("br",null),"See also"," ",r.default.createElement("a",{href:"#parseDate"},r.default.createElement("code",null,"parseDate")),"."),r.default.createElement("p",null,"If you are using ",r.default.createElement("a",{href:"http://momentjs.com/"},"moment.js")," in your app, we already provide this function as addon: see"," ",r.default.createElement(d.default,{to:"/examples/input-moment"},"this example"),"."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"hideOnDayClick"}),"hideOnDayClick ",r.default.createElement("code",null,"boolean = true")),r.default.createElement("p",null,"Hide the overlay when the user clicks on a day cell."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"inputProps"}),"inputProps ",r.default.createElement("code",null,"Object")),r.default.createElement("p",null,"Additional props to add to the ",r.default.createElement("code",null,"input")," component. The"," ",r.default.createElement("code",null,"value")," key is ignored: use the"," ",r.default.createElement("a",{href:"#value"},r.default.createElement("code",null,"value"))," ","prop instead."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"overlayComponent"}),"overlayComponent ",r.default.createElement("code",null,"React.Component")),r.default.createElement("p",null,"A React element or constructor to use as overlay. The element will receive the following props:"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("code",null,"selectedDay: ?Date")," The currently selected day"),r.default.createElement("li",null,r.default.createElement("code",null,"month: Date")," The month displayed in the calendar"),r.default.createElement("li",null,r.default.createElement("code",null,"input: DOM Element")," The input field")),r.default.createElement("p",null,"See also ",r.default.createElement(d.default,{to:"/examples/input-custom-overlay"},"this example"),"."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"parseDate"}),"parseDate"," ",r.default.createElement("code",null,"(str: string?, format: string? | string[]?, locale: string?) ⇒ Date | void")),r.default.createElement("p",null,"Date parser used for parsing the string typed in the input field. As default, it parses only dates formatted as ",r.default.createElement("code",null,"YYYY-M-D"),".",r.default.createElement("br",null),"Arguments: ",r.default.createElement("code",null,"format")," is the value coming from the"," ",r.default.createElement("a",{href:"#format"},r.default.createElement("code",null,"format"))," ","prop, while ",r.default.createElement("code",null,"locale")," is from"," ",r.default.createElement("a",{href:"#dayPickerProps"},r.default.createElement("code",null,"dayPickerProps")),".",r.default.createElement("br",null),"See also"," ",r.default.createElement("a",{href:"#formatDate"},r.default.createElement("code",null,"formatDate")),"."),r.default.createElement("p",null,"If you are using ",r.default.createElement("a",{href:"http://momentjs.com/"},"moment.js")," in your app, we already provide this function as addon: see"," ",r.default.createElement(d.default,{to:"/examples/input-moment"},"this example"),"."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"placeholder"}),"placeholder ",r.default.createElement("code",null,"string")),r.default.createElement("p",null,"The placeholder to use for the ",r.default.createElement("code",null,"input")," field."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"showOverlay"}),"showOverlay ",r.default.createElement("code",null,"boolean = false")),r.default.createElement("p",null,"Show the overlay during the initial rendering of the component. This is useful if you want to keep the overlay visibile while styling it."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"value"}),"value ",r.default.createElement("code",null,"string | Date")),r.default.createElement("p",null,"The value of the ",r.default.createElement("code",null,"input")," field."),r.default.createElement("hr",null),r.default.createElement("h2",null,"Event handlers"),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"onDayChange"}),"onDayChange ",r.default.createElement("code",null,"(day: Date, modifiers: Object) ⇒ void")),r.default.createElement("p",null,"Handler function called when the user types a valid day (according to the ",r.default.createElement("code",null,"format")," prop) or when a day is clicked on the calendar. If the day is not valid, day and modifiers arguments will be"," ",r.default.createElement("code",null,"undefined")," (useful to display validation warnings)."),r.default.createElement("hr",null),r.default.createElement("h2",null,"Public methods"),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"getDayPicker"}),"getDayPicker ",r.default.createElement("code",null,"() ⇒ DayPicker")),r.default.createElement("p",null,"Return the DayPicker instance."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"getInput"}),"getInput ",r.default.createElement("code",null,"() ⇒ DOMNode | ReactNode")),r.default.createElement("p",null,"Return the input element instance."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"showDayPicker"}),"showDayPicker ",r.default.createElement("code",null,"() ⇒ void")),r.default.createElement("p",null,"Show the Day Picker overlay."),r.default.createElement("h3",null,r.default.createElement(o.default,{id:"hideDayPicker"}),"hideDayPicker ",r.default.createElement("code",null,"() ⇒ void")),r.default.createElement("p",null,"Hide the Day Picker overlay.")))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-api-day-picker-input-js-cc0bde38510880ed6906.js.map