"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="Storybook",i={unversionedId:"storybook",id:"storybook",title:"Storybook",description:"Rancher Dashboard uses Storybook to document its component and design kit.",source:"@site/docs/storybook.md",sourceDirName:".",slug:"/storybook",permalink:"/dashboard/storybook",draft:!1,tags:[],version:"current",lastUpdatedAt:1673341055,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Advanced Topics",permalink:"/dashboard/plugins/advanced"},next:{title:"Unit Tests",permalink:"/dashboard/testing/unit-test"}},c={},l=[{value:"Source",id:"source",level:3},{value:"How to write",id:"how-to-write",level:3},{value:"Stories in Document Format",id:"stories-in-document-format",level:3},{value:"Basic example",id:"basic-example",level:3},{value:"Stories in Component Story Format",id:"stories-in-component-story-format",level:3},{value:"Basic example",id:"basic-example-1",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storybook"},"Storybook"),(0,o.kt)("p",null,"Rancher Dashboard uses Storybook to document its component and design kit."),(0,o.kt)("p",null,"The published Storybook is available here: ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.github.io/storybook/"},"https://rancher.github.io/storybook/"),"."),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("p",null,"The Source for Storybook is contained in the main Dashboard GitHub repository (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard"},"https://github.com/rancher/dashboard"),")."),(0,o.kt)("p",null,"Stories are contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"storybook/stories")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 dashboard\n|  \u251c\u2500\u2500 storybook             // All files and setup for Storybook are here\n|  |  \u251c\u2500\u2500 stories            // Stories folder\n|  |  |  |  \u251c\u2500\u2500 WIP          // WIP stories \n|  |  |  |  \u251c\u2500\u2500 components   // All components stories are here\n|  |  |  |  \u251c\u2500\u2500 foundation   // All foundation stories are here\n")),(0,o.kt)("h3",{id:"how-to-write"},"How to write"),(0,o.kt)("h3",{id:"stories-in-document-format"},"Stories in Document Format"),(0,o.kt)("p",null,"MDX is a standard file format that combines Markdown with JSX. It means you can use Markdown\u2019s terse syntax (such as # heading) for your documentation, write stories that compile to our component story format, and freely embed JSX component blocks at any point in the file. All at once."),(0,o.kt)("p",null,"For more details refer to ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/vue/writing-docs/mdx#basic-example"},"storybook official documentation"),"."),(0,o.kt)("h3",{id:"basic-example"},"Basic example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\n\x3c!-- Checkbox.stories.mdx --\x3e\n\nimport { Canvas, Meta, Story } from '@storybook/addon-docs';\n\nimport Checkbox from './Checkbox.vue';\n\n<Meta title=\"Components/Checkbox\" component={Checkbox} />\n\n\x3c!-- Add template for checkbox stories --\x3e\nexport const Template = (args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { Checkbox },\n  template: '<Checkbox v-bind=\"$props\" />',\n});\n\n# Checkbox\n\nWith `MDX`, we can define a story for `Checkbox` right in the middle of our\nMarkdown documentation.\n\n\x3c!-- Define different states for checkbox --\x3e\n<Canvas columns={2}>\n  Default\n  <Story\n    name=\"Checked\"\n    args={{\n      label: 'Accept term of service',\n    }}>\n    {Template.bind({})}\n  </Story>\n  Selected\n  <Story\n    name=\"Selected\"\n    args={{\n      label: 'Accept term of service',\n      value: true\n    }}>\n    {Template.bind({})}\n  </Story>\n  Disabled\n  <Story\n    name=\"Disabled\"\n    args={{\n      label: 'Accept term of service',\n      disabled: true,\n      value: true\n    }}>\n    {Template.bind({})}\n  </Story>\n</Canvas>\n\n\x3c!-- Add ArgsTable for Checkbox  --\x3e\n<ArgsTable of={Checkbox} />\n\n")),(0,o.kt)("h3",{id:"stories-in-component-story-format"},"Stories in Component Story Format"),(0,o.kt)("p",null,"Define stories according to the Component Story Format (CSF), an ES6 module-based standard that is easy to write and portable between tools."),(0,o.kt)("p",null,"For more details refer to ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/vue/writing-stories/introduction"},"storybook official documentation"),"."),(0,o.kt)("h3",{id:"basic-example-1"},"Basic example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\n\x3c!-- PercentageBar.stories.js --\x3e\n\nimport PercentageBar from './Components/PercentageBar';\n\n\nexport default {\n  title:      'WIP/PercentageBar',\n  component:  PercentageBar,\n  argTypes:   {\n    preferredDirection: {\n      control: {\n        type:    'select',\n        options: ['LESS', 'MORE']\n      }\n    }\n  }\n};;\n\n\x3c!-- Add template for PercentageBar stories --\x3e\nexport const Story = (args, { argTypes }) => ({\n  components: { PercentageBar },\n  props:      Object.keys(argTypes),\n  template:   `\n    <div style=\"width: 300px\">\n      <PercentageBar v-bind=\"$props\"/>\n    </div>`,\n});\n\n\n\x3c!-- Define story for PercentageBar --\x3e\nStory.story = { name: 'PercentageBar' };\nStory.args = {\n  value:              45,\n  showPercentage:     true.valueOf,\n  preferredDirection: 'LESS'\n};\n\n")))}d.isMDXComponent=!0}}]);