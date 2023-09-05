"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[57807],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),o=n(86010),i={tabItem:"tabItem_Ymn6"};function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(83117),o=n(67294),i=n(86010),r=n(12466),s=n(16550),c=n(91980),l=n(67392),u=n(50012);function m(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),r=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,c._X)(r),(0,o.useCallback)((function(e){if(r){var t=new URLSearchParams(i.location.search);t.set(r,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[r,i])]}function f(e){var t,n,a,i,r=e.defaultValue,s=e.queryString,c=void 0!==s&&s,l=e.groupId,m=p(e),f=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:m})})),v=f[0],g=f[1],h=b({queryString:c,groupId:l}),k=h[0],y=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,o.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],S=w[1],T=function(){var e=null!=k?k:N;return d({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var v=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,s=e.selectedValue,c=e.selectValue,l=e.tabValues,u=[],m=(0,r.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==s&&(m(t),c(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,o=u.indexOf(e.currentTarget)+1;n=null!=(a=u[o])?a:u[0];break;case"ArrowLeft":var i,r=u.indexOf(e.currentTarget)-1;n=null!=(i=u[r])?i:u[u.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:p},r,{className:(0,i.Z)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var i=n.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=f(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},o.createElement(h,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},21023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(74866),s=n(85162),c=["components"],l={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},u=void 0,m={unversionedId:"tab-based-navigation",id:"version-7.x/tab-based-navigation",title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-7.x/tab-based-navigation.md",sourceDirName:".",slug:"/tab-based-navigation",permalink:"/docs/7.x/tab-based-navigation",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/tab-based-navigation.md",tags:[],version:"7.x",frontMatter:{id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},sidebar:"version-7.x/docs",previous:{title:"Limitations",permalink:"/docs/7.x/limitations"},next:{title:"Drawer navigation",permalink:"/docs/7.x/drawer-based-navigation"}},p={},d=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",level:2},{value:"Customizing the appearance",id:"customizing-the-appearance",level:2},{value:"Add badges to icons",id:"add-badges-to-icons",level:2},{value:"Jumping between tabs",id:"jumping-between-tabs",level:2},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",level:2},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",level:2},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",level:2}],b={toc:d},f="wrapper";function v(e){var t=e.components,l=(0,o.Z)(e,c);return(0,i.kt)(f,(0,a.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."),(0,i.kt)("p",null,"This guide covers ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/bottom-tab-navigator"},(0,i.kt)("inlineCode",{parentName:"a"},"createBottomTabNavigator")),". Before continuing, first install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/bottom-tabs")),":"),(0,i.kt)(r.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/bottom-tabs@next\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/bottom-tabs@next\n")))),(0,i.kt)("h2",{id:"minimal-example-of-tab-based-navigation"},"Minimal example of tab-based navigation"),(0,i.kt)("samp",{id:"tab-based-navigation-minimal"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,i.kt)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),(0,i.kt)("p",null,"This is similar to how you would customize a stack navigator ","\u2014"," there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,i.kt)("samp",{id:"tab-based-navigation-icons"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\n\n// (...)\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator\n        screenOptions={({ route }) => ({\n          tabBarIcon: ({ focused, color, size }) => {\n            let iconName;\n\n            if (route.name === 'Home') {\n              iconName = focused\n                ? 'ios-information-circle'\n                : 'ios-information-circle-outline';\n            } else if (route.name === 'Settings') {\n              iconName = focused ? 'ios-list' : 'ios-list-outline';\n            }\n\n            // You can return any component that you like here!\n            return <Ionicons name={iconName} size={size} color={color} />;\n          },\n          tabBarActiveTintColor: 'tomato',\n          tabBarInactiveTintColor: 'gray',\n        })}\n      >\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,i.kt)("p",null,"Let's dissect this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is a supported option in bottom tab navigator. So we know we can use it on our screen components in the ",(0,i.kt)("inlineCode",{parentName:"li"},"options")," prop, but in this case chose to put it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"screenOptions")," prop of ",(0,i.kt)("inlineCode",{parentName:"li"},"Tab.Navigator")," in order to centralize the icon configuration for convenience."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is a function that is given the ",(0,i.kt)("inlineCode",{parentName:"li"},"focused")," state, ",(0,i.kt)("inlineCode",{parentName:"li"},"color"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"size")," params. If you take a peek further down in the configuration you will see ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarActiveTintColor")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarInactiveTintColor"),". These default to the iOS platform defaults, but you can change them here. The ",(0,i.kt)("inlineCode",{parentName:"li"},"color")," that is passed through to the ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is either the active or inactive one, depending on the ",(0,i.kt)("inlineCode",{parentName:"li"},"focused")," state (focused is active). The ",(0,i.kt)("inlineCode",{parentName:"li"},"size")," is the size of the icon expected by the tab bar."),(0,i.kt)("li",{parentName:"ul"},"Read the ",(0,i.kt)("a",{parentName:"li",href:"/docs/7.x/bottom-tab-navigator"},"full API reference")," for further information on ",(0,i.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration options.")),(0,i.kt)("h2",{id:"add-badges-to-icons"},"Add badges to icons"),(0,i.kt)("p",null,"Sometimes we want to add badges to some icons. You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/bottom-tab-navigator#tabbarbadge"},(0,i.kt)("inlineCode",{parentName:"a"},"tabBarBadge")," option")," to do it:"),(0,i.kt)("samp",{id:"tab-based-navigation-badges"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />\n')),(0,i.kt)("p",null,"From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),", ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mobx.js.org/"},"MobX")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js"},"event emitters"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Tabs with badges",src:n(73580).Z,width:"320",height:"569"})),(0,i.kt)("h2",{id:"jumping-between-tabs"},"Jumping between tabs"),(0,i.kt)("p",null,"Switching from one tab to another has a familiar API ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.navigate"),"."),(0,i.kt)("samp",{id:"tab-based-navigation-switching"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n      <Button\n        title=\"Go to Settings\"\n        onPress={() => navigation.navigate('Settings')}\n      />\n    </View>\n  );\n}\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n    </View>\n  );\n}\n")),(0,i.kt)("h2",{id:"a-stack-navigator-for-each-tab"},"A stack navigator for each tab"),(0,i.kt)("p",null,"Usually tabs don't just display one screen ","\u2014"," for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."),(0,i.kt)("samp",{id:"tab-based-navigation-stack"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Details!</Text>\n    </View>\n  );\n}\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\nconst HomeStack = createNativeStackNavigator();\n\nfunction HomeStackScreen() {\n  return (\n    <HomeStack.Navigator>\n      <HomeStack.Screen name=\"Home\" component={HomeScreen} />\n      <HomeStack.Screen name=\"Details\" component={DetailsScreen} />\n    </HomeStack.Navigator>\n  );\n}\n\nconst SettingsStack = createNativeStackNavigator();\n\nfunction SettingsStackScreen() {\n  return (\n    <SettingsStack.Navigator>\n      <SettingsStack.Screen name=\"Settings\" component={SettingsScreen} />\n      <SettingsStack.Screen name=\"Details\" component={DetailsScreen} />\n    </SettingsStack.Navigator>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator screenOptions={{ headerShown: false }}>\n        <Tab.Screen name=\"Home\" component={HomeStackScreen} />\n        <Tab.Screen name=\"Settings\" component={SettingsStackScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,i.kt)("h2",{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component"},"Why do we need a TabNavigator instead of TabBarIOS or some other component?"),(0,i.kt)("p",null,"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."),(0,i.kt)("p",null,'For example, React Navigation\'s tab navigator takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components ',"\u2014"," for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."),(0,i.kt)("h2",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/7.x/hiding-tabbar-in-screens"},"See the documentation here")))}v.isMDXComponent=!0},73580:function(e,t,n){t.Z=n.p+"assets/images/tabs-badges-94675c8566521656189422362d92cf9e.png"}}]);