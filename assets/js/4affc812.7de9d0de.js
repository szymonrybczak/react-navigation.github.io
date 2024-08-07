"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[41941],{31070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var o=t(85893),r=t(11151),a=t(74866),i=t(85162);const s={id:"themes",title:"Themes",sidebar_label:"Themes"},c=void 0,l={id:"themes",title:"Themes",description:"Themes allow you to change the colors and fonts of various components provided by React Navigation. You can use themes to:",source:"@site/versioned_docs/version-7.x/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/7.x/themes",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/themes.md",tags:[],version:"7.x",frontMatter:{id:"themes",title:"Themes",sidebar_label:"Themes"},sidebar:"docs",previous:{title:"Screen tracking",permalink:"/docs/7.x/screen-tracking"},next:{title:"State persistence",permalink:"/docs/7.x/state-persistence"}},u={},m=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Built-in themes",id:"built-in-themes",level:2},{value:"Keeping the native theme in sync",id:"keeping-the-native-theme-in-sync",level:2},{value:"Using the operating system preferences",id:"using-the-operating-system-preferences",level:2},{value:"Using the current theme in your own components",id:"using-the-current-theme-in-your-own-components",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Themes allow you to change the colors and fonts of various components provided by React Navigation. You can use themes to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Customize the colors and fonts to match your brand"}),"\n",(0,o.jsx)(n.li,{children:"Provide light and dark themes based on the time of the day or user preference"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,o.jsxs)(n.p,{children:["To pass a custom theme, you can pass the ",(0,o.jsx)(n.code,{children:"theme"})," prop to the navigation container."]}),"\n",(0,o.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(n.pre,{"data-name":"Simple theme","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="Simple theme" snack',children:"// codeblock-focus-start\nimport * as React from 'react';\nimport {\n  useNavigation,\n  createStaticNavigation,\n  DefaultTheme,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { View, Text } from 'react-native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { Button } from '@react-navigation/elements';\n\n// codeblock-focus-start\n\nconst MyTheme = {\n  ...DefaultTheme,\n  colors: {\n    ...DefaultTheme.colors,\n    background: 'rgb(140, 201, 125)',\n    primary: 'rgb(255, 45, 85)',\n  },\n};\n// codeblock-focus-end\n\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Text>userParam: {JSON.stringify(user)}</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        onPress={() =>\n          navigation.navigate('Panel', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst PanelStack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Drawer = createDrawerNavigator({\n  initialRouteName: 'Panel',\n  screens: {\n    Home: HomeScreen,\n    Panel: PanelStack,\n  },\n});\n\n// codeblock-focus-start\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  // highlight-next-line\n  return <Navigation theme={MyTheme} />;\n}\n// codeblock-focus-end\n"})})}),(0,o.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(n.pre,{"data-name":"Simple theme","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="Simple theme" snack',children:"// codeblock-focus-start\nimport * as React from 'react';\nimport {\n  NavigationContainer,\n  DefaultTheme,\n  useNavigation,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { View, Text } from 'react-native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { Button } from '@react-navigation/elements';\n\n// codeblock-focus-start\n\nconst MyTheme = {\n  ...DefaultTheme,\n  colors: {\n    ...DefaultTheme.colors,\n    background: 'rgb(140, 201, 125)',\n    primary: 'rgb(255, 45, 85)',\n  },\n};\n// codeblock-focus-end\n\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Text>userParam: {JSON.stringify(user)}</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n    </View>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\nconst Stack = createNativeStackNavigator();\n\nfunction Root() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n    </Stack.Navigator>\n  );\n}\n\n// codeblock-focus-start\n\nexport default function App() {\n  return (\n    // highlight-next-line\n    <NavigationContainer theme={MyTheme}>\n      <Drawer.Navigator useLegacyImplementation initialRouteName=\"Root\">\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen\n          name=\"Root\"\n          component={Root}\n          options={{ headerShown: false }}\n        />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-start\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["You can change the theme prop dynamically and all the components will automatically update to reflect the new theme. If you haven't provided a ",(0,o.jsx)(n.code,{children:"theme"})," prop, the default theme will be used."]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.p,{children:"A theme is a JS object containing a list of colors to use. It contains the following properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dark"})," (",(0,o.jsx)(n.code,{children:"boolean"}),"): Whether this is a dark theme or a light theme"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"colors"})," (",(0,o.jsx)(n.code,{children:"object"}),"): Various colors used by react navigation components:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"primary"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"background"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The color of various backgrounds, such as the background color for the screens."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"card"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The background color of card-like elements, such as headers, tab bars etc."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"text"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The text color of various elements."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"border"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The color of borders, e.g. header border, tab bar border etc."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"notification"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The color of notifications and badge (e.g. badge in bottom tabs)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fonts"})," (",(0,o.jsx)(n.code,{children:"object"}),"): Various fonts used by react navigation components:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"regular"})," (",(0,o.jsx)(n.code,{children:"object"}),"): Style object for the primary font used in the app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"medium"})," (",(0,o.jsx)(n.code,{children:"object"}),"): Style object for the semi-bold variant of the primary font."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bold"})," (",(0,o.jsx)(n.code,{children:"object"}),"): Style object for the bold variant of the primary font."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"heavy"})," (",(0,o.jsx)(n.code,{children:"object"}),"): Style object for the extra-bold variant of the primary font."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The style objects for fonts contain the following properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fontFamily"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The name of the font family (or font stack on Web) to use, e.g. ",(0,o.jsx)(n.code,{children:"Roboto"})," or ",(0,o.jsx)(n.code,{children:"Helvetica Neue"}),". The system fonts are used by default."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fontWeight"})," (",(0,o.jsx)(n.code,{children:"string"}),"): The font weight to use. Valid values are ",(0,o.jsx)(n.code,{children:"normal"}),", ",(0,o.jsx)(n.code,{children:"bold"}),", ",(0,o.jsx)(n.code,{children:"100"}),", ",(0,o.jsx)(n.code,{children:"200"}),", ",(0,o.jsx)(n.code,{children:"300"}),", ",(0,o.jsx)(n.code,{children:"400"}),", ",(0,o.jsx)(n.code,{children:"500"}),", ",(0,o.jsx)(n.code,{children:"600"}),", ",(0,o.jsx)(n.code,{children:"700"}),", ",(0,o.jsx)(n.code,{children:"800"}),", ",(0,o.jsx)(n.code,{children:"900"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When creating a custom theme, you will need to provide all of these properties."}),"\n",(0,o.jsx)(n.p,{children:"Example theme:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const WEB_FONT_STACK =\n  'system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"';\n\nconst MyTheme = {\n  dark: false,\n  colors: {\n    primary: 'rgb(255, 45, 85)',\n    background: 'rgb(242, 242, 242)',\n    card: 'rgb(255, 255, 255)',\n    text: 'rgb(28, 28, 30)',\n    border: 'rgb(199, 199, 204)',\n    notification: 'rgb(255, 69, 58)',\n  },\n  fonts: Platform.select({\n    web: {\n      regular: {\n        fontFamily: WEB_FONT_STACK,\n        fontWeight: '400',\n      },\n      medium: {\n        fontFamily: WEB_FONT_STACK,\n        fontWeight: '500',\n      },\n      bold: {\n        fontFamily: WEB_FONT_STACK,\n        fontWeight: '600',\n      },\n      heavy: {\n        fontFamily: WEB_FONT_STACK,\n        fontWeight: '700',\n      },\n    },\n    ios: {\n      regular: {\n        fontFamily: 'System',\n        fontWeight: '400',\n      },\n      medium: {\n        fontFamily: 'System',\n        fontWeight: '500',\n      },\n      bold: {\n        fontFamily: 'System',\n        fontWeight: '600',\n      },\n      heavy: {\n        fontFamily: 'System',\n        fontWeight: '700',\n      },\n    },\n    default: {\n      regular: {\n        fontFamily: 'sans-serif',\n        fontWeight: 'normal',\n      },\n      medium: {\n        fontFamily: 'sans-serif-medium',\n        fontWeight: 'normal',\n      },\n      bold: {\n        fontFamily: 'sans-serif',\n        fontWeight: '600',\n      },\n      heavy: {\n        fontFamily: 'sans-serif',\n        fontWeight: '700',\n      },\n    },\n  }),\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Providing a theme will take care of styling of all the official navigators. React Navigation also provides several tools to help you make your customizations of those navigators and the screens within the navigators can use the theme too."}),"\n",(0,o.jsx)(n.h2,{id:"built-in-themes",children:"Built-in themes"}),"\n",(0,o.jsx)(n.p,{children:"As operating systems add built-in support for light and dark modes, supporting dark mode is less about keeping hip to trends and more about conforming to the average user expectations for how apps should work. In order to provide support for light and dark mode in a way that is reasonably consistent with the OS defaults, these themes are built in to React Navigation."}),"\n",(0,o.jsx)(n.p,{children:"You can import the default and dark themes like so:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { DefaultTheme, DarkTheme } from '@react-navigation/native';\n"})}),"\n",(0,o.jsx)(n.h2,{id:"keeping-the-native-theme-in-sync",children:"Keeping the native theme in sync"}),"\n",(0,o.jsx)(n.p,{children:"If you're changing the theme in the app, native UI elements such as Alert, ActionSheet etc. won't reflect the new theme. You can do the following to keep the native theme in sync:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  const colorScheme = theme.dark ? 'dark' : 'light';\n\n  if (Platform.OS === 'web') {\n    document.documentElement.style.colorScheme = colorScheme;\n  } else {\n    Appearance.setColorScheme(colorScheme);\n  }\n}, [theme.dark]);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,o.jsx)(n.a,{href:"#using-the-operating-system-preferences",children:(0,o.jsx)(n.code,{children:"useColorScheme"})})," hook to get the current native color scheme and update the theme accordingly."]}),"\n",(0,o.jsx)(n.h2,{id:"using-the-operating-system-preferences",children:"Using the operating system preferences"}),"\n",(0,o.jsxs)(n.p,{children:["On iOS 13+ and Android 10+, you can get user's preferred color scheme (",(0,o.jsx)(n.code,{children:"'dark'"})," or ",(0,o.jsx)(n.code,{children:"'light'"}),") with the (",(0,o.jsxs)(n.a,{href:"https://reactnative.dev/docs/usecolorscheme",children:[(0,o.jsx)(n.code,{children:"useColorScheme"})," hook"]}),")."]}),"\n",(0,o.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(n.pre,{"data-name":"Operating system color theme","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="Operating system color theme" snack',children:"import * as React from 'react';\n// codeblock-focus-start\nimport {\n  useNavigation,\n  createStaticNavigation,\n  DefaultTheme,\n  DarkTheme,\n  useTheme,\n} from '@react-navigation/native';\nimport { View, Text, TouchableOpacity, useColorScheme } from 'react-native';\n// codeblock-focus-end\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { Button } from '@react-navigation/elements';\n\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Settings Screen</Text>\n      <Text style={{ color: colors.text }}>\n        userParam: {JSON.stringify(user)}\n      </Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Profile Screen</Text>\n    </View>\n  );\n}\n\nfunction MyButton() {\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Home Screen</Text>\n      <MyButton />\n      <Button\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst PanelStack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Drawer = createDrawerNavigator({\n  initialRouteName: 'Panel',\n  screens: {\n    Home: HomeScreen,\n    Panel: PanelStack,\n  },\n});\n\n// codeblock-focus-start\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  // highlight-next-line\n  const scheme = useColorScheme();\n\n  // highlight-next-line\n  return <Navigation theme={scheme === 'dark' ? DarkTheme : DefaultTheme} />;\n}\n\n// codeblock-focus-end\n"})})}),(0,o.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(n.pre,{"data-name":"Operating system color theme","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="Operating system color theme" snack',children:"import * as React from 'react';\n// codeblock-focus-start\nimport { View, Text, TouchableOpacity, useColorScheme } from 'react-native';\nimport {\n  NavigationContainer,\n  DefaultTheme,\n  DarkTheme,\n  useTheme,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { Button } from '@react-navigation/elements';\n\nfunction SettingsScreen({ route, navigation }) {\n  const { user } = route.params;\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Settings Screen</Text>\n      <Text style={{ color: colors.text }}>\n        userParam: {JSON.stringify(user)}\n      </Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Profile Screen</Text>\n    </View>\n  );\n}\n\nfunction MyButton() {\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Home Screen</Text>\n      <MyButton />\n      <Button\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\nconst Stack = createNativeStackNavigator();\n\nfunction Root() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n    </Stack.Navigator>\n  );\n}\n\n// codeblock-focus-start\n\nexport default function App() {\n  // highlight-next-line\n  const scheme = useColorScheme();\n\n  return (\n    // highlight-next-line\n    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>\n      <Drawer.Navigator useLegacyImplementation>\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen\n          name=\"Root\"\n          component={Root}\n          options={{ headerShown: false }}\n        />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"using-the-current-theme-in-your-own-components",children:"Using the current theme in your own components"}),"\n",(0,o.jsxs)(n.p,{children:["To gain access to the theme in any component that is rendered inside the navigation container:, you can use the ",(0,o.jsx)(n.code,{children:"useTheme"})," hook. It returns the theme object:"]}),"\n",(0,o.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(n.pre,{"data-name":"System themes","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="System themes" snack',children:"import * as React from 'react';\n// codeblock-focus-start\nimport {\n  useNavigation,\n  createStaticNavigation,\n  DefaultTheme,\n  DarkTheme,\n  useTheme,\n} from '@react-navigation/native';\nimport { View, Text, TouchableOpacity, useColorScheme } from 'react-native';\n// codeblock-focus-end\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { Button } from '@react-navigation/elements';\n\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Settings Screen</Text>\n      <Text style={{ color: colors.text }}>\n        userParam: {JSON.stringify(user)}\n      </Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Profile Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\n\nfunction MyButton() {\n  // highlight-next-line\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Home Screen</Text>\n      <MyButton />\n      <Button\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst PanelStack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Drawer = createDrawerNavigator({\n  initialRouteName: 'Panel',\n  screens: {\n    Home: HomeScreen,\n    Panel: PanelStack,\n  },\n});\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  const scheme = useColorScheme();\n\n  return <Navigation theme={scheme === 'dark' ? DarkTheme : DefaultTheme} />;\n}\n"})})}),(0,o.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(n.pre,{"data-name":"System themes","data-snack":"true",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="System themes" snack',children:"import * as React from 'react';\n// codeblock-focus-start\nimport { View, Text, TouchableOpacity, useColorScheme } from 'react-native';\nimport {\n  NavigationContainer,\n  DefaultTheme,\n  DarkTheme,\n  useTheme,\n  useNavigation,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nfunction SettingsScreen({ route, navigation }) {\n  const { colors } = useTheme();\n  const { user } = route.params;\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Settings Screen</Text>\n      <Text style={{ color: colors.text }}>\n        userParam: {JSON.stringify(user)}\n      </Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Profile Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\n\nfunction MyButton() {\n  // highlight-next-line\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Home Screen</Text>\n      <MyButton />\n      <Button\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      >\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\nconst Stack = createNativeStackNavigator();\n\nfunction Root() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n    </Stack.Navigator>\n  );\n}\n\nexport default function App() {\n  const scheme = useColorScheme();\n\n  return (\n    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>\n      <Drawer.Navigator useLegacyImplementation initialRouteName=\"Root\">\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen\n          name=\"Root\"\n          component={Root}\n          options={{ headerShown: false }}\n        />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var o=t(86010);const r={tabItem:"tabItem_Ymn6"};var a=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var o=t(67294),r=t(86010),a=t(12466),i=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function m(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[i,c]=(0,o.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=o.find((e=>e.default)))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,m]=g({queryString:t,groupId:r}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,a]=(0,u.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=null!=l?l:f;return d({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),m(e),p(e)}),[m,p,a]),tabValues:a}}var p=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function y(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==o&&(l(n),i(r))},m=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var o;const n=c.indexOf(e.currentTarget)+1;t=null!=(o=c[n])?o:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:m,onClick:u,...a,className:(0,r.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":o===n}),children:null!=t?t:n},n)}))})}function S(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(S,{...e,...n})]})}function j(e){const n=(0,p.Z)();return(0,x.jsx)(b,{...e,children:m(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(67294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);