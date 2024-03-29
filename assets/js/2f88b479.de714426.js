"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[68562],{31744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const a={id:"navigation-events",title:"NavigationEvents reference",sidebar_label:"NavigationEvents"},s=void 0,r={id:"navigation-events",title:"NavigationEvents reference",description:"NavigationEvents is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount.",source:"@site/versioned_docs/version-4.x/navigation-events.md",sourceDirName:".",slug:"/navigation-events",permalink:"/docs/4.x/navigation-events",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-events.md",tags:[],version:"4.x",frontMatter:{id:"navigation-events",title:"NavigationEvents reference",sidebar_label:"NavigationEvents"},sidebar:"version-4.x-docs",previous:{title:"NavigationContext",permalink:"/docs/4.x/navigation-context"},next:{title:"createStackNavigator",permalink:"/docs/4.x/stack-navigator"}},l={},c=[{value:"Component props",id:"component-props",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NavigationEvents"})," is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount."]}),"\n",(0,i.jsx)(n.h3,{id:"component-props",children:"Component props"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"})," - navigation props (optional, defaults to reading from React context)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onWillFocus"})," - event listener"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onDidFocus"})," - event listener"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onWillBlur"})," - event listener"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onDidBlur"})," - event listener"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The event listener is the same as the imperative ",(0,i.jsx)(n.a,{href:"/docs/4.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle",children:(0,i.jsx)(n.code,{children:"navigation.addListener(...)"})})," API."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"harmony",children:"import React from 'react';\nimport { View } from 'react-native';\nimport { NavigationEvents } from 'react-navigation';\n\nconst MyScreen = () => (\n  <View>\n    <NavigationEvents\n      onWillFocus={(payload) => console.log('will focus', payload)}\n      onDidFocus={(payload) => console.log('did focus', payload)}\n      onWillBlur={(payload) => console.log('will blur', payload)}\n      onDidBlur={(payload) => console.log('did blur', payload)}\n    />\n    {/*\n      Your view code\n    */}\n  </View>\n);\n\nexport default MyScreen;\n"})})]})}function v(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);