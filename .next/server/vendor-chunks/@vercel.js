"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/speed-insights/dist/next/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@vercel/speed-insights/dist/next/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpeedInsights: () => (/* binding */ SpeedInsights2)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation.js */ \"(ssr)/./node_modules/next/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ SpeedInsights auto */ // src/nextjs/index.tsx\n\n// src/react/index.tsx\n\n// package.json\nvar name = \"@vercel/speed-insights\";\nvar version = \"1.0.12\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.si) return;\n    window.si = function a(...params) {\n        (window.siq = window.siq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction isDevelopment() {\n    return detectEnvironment() === \"development\";\n}\nfunction computeRoute(pathname, pathParams) {\n    if (!pathname || !pathParams) {\n        return pathname;\n    }\n    let result = pathname;\n    try {\n        const entries = Object.entries(pathParams);\n        for (const [key, value] of entries){\n            if (!Array.isArray(value)) {\n                const matcher = turnValueToRegExp(value);\n                if (matcher.test(result)) {\n                    result = result.replace(matcher, `/[${key}]`);\n                }\n            }\n        }\n        for (const [key, value] of entries){\n            if (Array.isArray(value)) {\n                const matcher = turnValueToRegExp(value.join(\"/\"));\n                if (matcher.test(result)) {\n                    result = result.replace(matcher, `/[...${key}]`);\n                }\n            }\n        }\n        return result;\n    } catch (e) {\n        return pathname;\n    }\n}\nfunction turnValueToRegExp(value) {\n    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);\n}\nfunction escapeRegExp(string) {\n    return string.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n}\n// src/generic.ts\nvar SCRIPT_URL = `https://va.vercel-scripts.com/v1/speed-insights`;\nvar PROD_SCRIPT_URL = `${SCRIPT_URL}/script.js`;\nvar DEV_SCRIPT_URL = `${SCRIPT_URL}/script.debug.js`;\nvar PROXY_SCRIPT_URL = `/_vercel/speed-insights/script.js`;\nfunction injectSpeedInsights(props = {}) {\n    var _a;\n    if (!isBrowser() || props.route === null) return null;\n    initQueue();\n    const isSelfHosted = Boolean(props.dsn);\n    const productionScript = isSelfHosted ? PROD_SCRIPT_URL : PROXY_SCRIPT_URL;\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : productionScript);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return null;\n    if (props.beforeSend) {\n        (_a = window.si) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.sampleRate) {\n        script.dataset.sampleRate = props.sampleRate.toString();\n    }\n    if (props.route) {\n        script.dataset.route = props.route;\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    script.onerror = ()=>{\n        console.log(`[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`);\n    };\n    document.head.appendChild(script);\n    return {\n        setRoute: (route)=>{\n            script.dataset.route = route ?? void 0;\n        }\n    };\n}\n// src/react/index.tsx\nfunction SpeedInsights(props) {\n    const setScriptRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!setScriptRoute.current) {\n            const script = injectSpeedInsights({\n                framework: props.framework || \"react\",\n                ...props\n            });\n            if (script) {\n                setScriptRoute.current = script.setRoute;\n            }\n        } else if (props.route) {\n            setScriptRoute.current(props.route);\n        }\n    }, [\n        props.route\n    ]);\n    return null;\n}\n// src/nextjs/utils.ts\n\nvar useRoute = ()=>{\n    const params = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const searchParams = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)() || new URLSearchParams();\n    const path = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const finalParams = {\n        ...Object.fromEntries(searchParams.entries()),\n        ...params || {}\n    };\n    return params ? computeRoute(path, finalParams) : null;\n};\n// src/nextjs/index.tsx\nfunction SpeedInsightsComponent(props) {\n    const route = useRoute();\n    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpeedInsights, {\n        route,\n        ...props,\n        framework: \"next\"\n    });\n}\nfunction SpeedInsights2(props) {\n    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: null\n    }, /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpeedInsightsComponent, {\n        ...props\n    }));\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9zcGVlZC1pbnNpZ2h0cy9kaXN0L25leHQvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7OzttRUFFQSx1QkFBdUI7QUFDaUI7QUFFeEMsc0JBQXNCO0FBQ29CO0FBRTFDLGVBQWU7QUFDZixJQUFJSSxPQUFPO0FBQ1gsSUFBSUMsVUFBVTtBQUVkLGVBQWU7QUFDZixJQUFJQyxZQUFZO0lBQ2QsSUFBSUMsT0FBT0MsRUFBRSxFQUNYO0lBQ0ZELE9BQU9DLEVBQUUsR0FBRyxTQUFTQyxFQUFFLEdBQUdDLE1BQU07UUFDN0JILENBQUFBLE9BQU9JLEdBQUcsR0FBR0osT0FBT0ksR0FBRyxJQUFJLEVBQUUsRUFBRUMsSUFBSSxDQUFDRjtJQUN2QztBQUNGO0FBRUEsZUFBZTtBQUNmLFNBQVNHO0lBQ1AsT0FBTyxnQkFBa0I7QUFDM0I7QUFDQSxTQUFTQztJQUNQLElBQUk7UUFDRixNQUFNQyxNQTNCVjtRQTRCSSxJQUFJQSxRQUFRLGlCQUFpQkEsUUFBUSxRQUFRO1lBQzNDLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0MsR0FBRyxDQUNaO0lBQ0EsT0FBTztBQUNUO0FBQ0EsU0FBU0M7SUFDUCxPQUFPSCx3QkFBd0I7QUFDakM7QUFDQSxTQUFTSSxhQUFhQyxRQUFRLEVBQUVDLFVBQVU7SUFDeEMsSUFBSSxDQUFDRCxZQUFZLENBQUNDLFlBQVk7UUFDNUIsT0FBT0Q7SUFDVDtJQUNBLElBQUlFLFNBQVNGO0lBQ2IsSUFBSTtRQUNGLE1BQU1HLFVBQVVDLE9BQU9ELE9BQU8sQ0FBQ0Y7UUFDL0IsS0FBSyxNQUFNLENBQUNJLEtBQUtDLE1BQU0sSUFBSUgsUUFBUztZQUNsQyxJQUFJLENBQUNJLE1BQU1DLE9BQU8sQ0FBQ0YsUUFBUTtnQkFDekIsTUFBTUcsVUFBVUMsa0JBQWtCSjtnQkFDbEMsSUFBSUcsUUFBUUUsSUFBSSxDQUFDVCxTQUFTO29CQUN4QkEsU0FBU0EsT0FBT1UsT0FBTyxDQUFDSCxTQUFTLENBQUMsRUFBRSxFQUFFSixJQUFJLENBQUMsQ0FBQztnQkFDOUM7WUFDRjtRQUNGO1FBQ0EsS0FBSyxNQUFNLENBQUNBLEtBQUtDLE1BQU0sSUFBSUgsUUFBUztZQUNsQyxJQUFJSSxNQUFNQyxPQUFPLENBQUNGLFFBQVE7Z0JBQ3hCLE1BQU1HLFVBQVVDLGtCQUFrQkosTUFBTU8sSUFBSSxDQUFDO2dCQUM3QyxJQUFJSixRQUFRRSxJQUFJLENBQUNULFNBQVM7b0JBQ3hCQSxTQUFTQSxPQUFPVSxPQUFPLENBQUNILFNBQVMsQ0FBQyxLQUFLLEVBQUVKLElBQUksQ0FBQyxDQUFDO2dCQUNqRDtZQUNGO1FBQ0Y7UUFDQSxPQUFPSDtJQUNULEVBQUUsT0FBT0wsR0FBRztRQUNWLE9BQU9HO0lBQ1Q7QUFDRjtBQUNBLFNBQVNVLGtCQUFrQkosS0FBSztJQUM5QixPQUFPLElBQUlRLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLGFBQWFULE9BQU8sV0FBVyxDQUFDO0FBQ3hEO0FBQ0EsU0FBU1MsYUFBYUMsTUFBTTtJQUMxQixPQUFPQSxPQUFPSixPQUFPLENBQUMsdUJBQXVCO0FBQy9DO0FBRUEsaUJBQWlCO0FBQ2pCLElBQUlLLGFBQWEsQ0FBQywrQ0FBK0MsQ0FBQztBQUNsRSxJQUFJQyxrQkFBa0IsQ0FBQyxFQUFFRCxXQUFXLFVBQVUsQ0FBQztBQUMvQyxJQUFJRSxpQkFBaUIsQ0FBQyxFQUFFRixXQUFXLGdCQUFnQixDQUFDO0FBQ3BELElBQUlHLG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDO0FBQzFELFNBQVNDLG9CQUFvQkMsUUFBUSxDQUFDLENBQUM7SUFDckMsSUFBSUM7SUFDSixJQUFJLENBQUM3QixlQUFlNEIsTUFBTUUsS0FBSyxLQUFLLE1BQ2xDLE9BQU87SUFDVHJDO0lBQ0EsTUFBTXNDLGVBQWVDLFFBQVFKLE1BQU1LLEdBQUc7SUFDdEMsTUFBTUMsbUJBQW1CSCxlQUFlUCxrQkFBa0JFO0lBQzFELE1BQU1TLE1BQU1QLE1BQU1RLFNBQVMsSUFBS2hDLENBQUFBLGtCQUFrQnFCLGlCQUFpQlMsZ0JBQWU7SUFDbEYsSUFBSUcsU0FBU0MsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxhQUFhLEVBQUVKLElBQUksRUFBRSxDQUFDLEdBQ3JELE9BQU87SUFDVCxJQUFJUCxNQUFNWSxVQUFVLEVBQUU7UUFDbkJYLENBQUFBLEtBQUtuQyxPQUFPQyxFQUFFLEtBQUssT0FBTyxLQUFLLElBQUlrQyxHQUFHWSxJQUFJLENBQUMvQyxRQUFRLGNBQWNrQyxNQUFNWSxVQUFVO0lBQ3BGO0lBQ0EsTUFBTUUsU0FBU0wsU0FBU00sYUFBYSxDQUFDO0lBQ3RDRCxPQUFPUCxHQUFHLEdBQUdBO0lBQ2JPLE9BQU9FLEtBQUssR0FBRztJQUNmRixPQUFPRyxPQUFPLENBQUNDLElBQUksR0FBR3ZELE9BQVFxQyxDQUFBQSxNQUFNbUIsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsTUFBTW1CLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBQztJQUN6RUwsT0FBT0csT0FBTyxDQUFDRyxJQUFJLEdBQUd4RDtJQUN0QixJQUFJb0MsTUFBTXFCLFVBQVUsRUFBRTtRQUNwQlAsT0FBT0csT0FBTyxDQUFDSSxVQUFVLEdBQUdyQixNQUFNcUIsVUFBVSxDQUFDQyxRQUFRO0lBQ3ZEO0lBQ0EsSUFBSXRCLE1BQU1FLEtBQUssRUFBRTtRQUNmWSxPQUFPRyxPQUFPLENBQUNmLEtBQUssR0FBR0YsTUFBTUUsS0FBSztJQUNwQztJQUNBLElBQUlGLE1BQU11QixRQUFRLEVBQUU7UUFDbEJULE9BQU9HLE9BQU8sQ0FBQ00sUUFBUSxHQUFHdkIsTUFBTXVCLFFBQVE7SUFDMUM7SUFDQSxJQUFJdkIsTUFBTUssR0FBRyxFQUFFO1FBQ2JTLE9BQU9HLE9BQU8sQ0FBQ1osR0FBRyxHQUFHTCxNQUFNSyxHQUFHO0lBQ2hDO0lBQ0EsSUFBSTdCLG1CQUFtQndCLE1BQU13QixLQUFLLEtBQUssT0FBTztRQUM1Q1YsT0FBT0csT0FBTyxDQUFDTyxLQUFLLEdBQUc7SUFDekI7SUFDQVYsT0FBT1csT0FBTyxHQUFHO1FBQ2ZDLFFBQVFDLEdBQUcsQ0FDVCxDQUFDLG1EQUFtRCxFQUFFcEIsSUFBSSxpRUFBaUUsQ0FBQztJQUVoSTtJQUNBRSxTQUFTQyxJQUFJLENBQUNrQixXQUFXLENBQUNkO0lBQzFCLE9BQU87UUFDTGUsVUFBVSxDQUFDM0I7WUFDVFksT0FBT0csT0FBTyxDQUFDZixLQUFLLEdBQUdBLFNBQVMsS0FBSztRQUN2QztJQUNGO0FBQ0Y7QUFFQSxzQkFBc0I7QUFDdEIsU0FBUzRCLGNBQWM5QixLQUFLO0lBQzFCLE1BQU0rQixpQkFBaUJyRSw2Q0FBTUEsQ0FBQztJQUM5QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNzRSxlQUFlQyxPQUFPLEVBQUU7WUFDM0IsTUFBTWxCLFNBQVNmLG9CQUFvQjtnQkFDakNvQixXQUFXbkIsTUFBTW1CLFNBQVMsSUFBSTtnQkFDOUIsR0FBR25CLEtBQUs7WUFDVjtZQUNBLElBQUljLFFBQVE7Z0JBQ1ZpQixlQUFlQyxPQUFPLEdBQUdsQixPQUFPZSxRQUFRO1lBQzFDO1FBQ0YsT0FBTyxJQUFJN0IsTUFBTUUsS0FBSyxFQUFFO1lBQ3RCNkIsZUFBZUMsT0FBTyxDQUFDaEMsTUFBTUUsS0FBSztRQUNwQztJQUNGLEdBQUc7UUFBQ0YsTUFBTUUsS0FBSztLQUFDO0lBQ2hCLE9BQU87QUFDVDtBQUVBLHNCQUFzQjtBQUN1RDtBQUM3RSxJQUFJa0MsV0FBVztJQUNiLE1BQU1uRSxTQUFTZ0UsNkRBQVNBO0lBQ3hCLE1BQU1JLGVBQWVGLG1FQUFlQSxNQUFNLElBQUlHO0lBQzlDLE1BQU1DLE9BQU9MLCtEQUFXQTtJQUN4QixNQUFNTSxjQUFjO1FBQ2xCLEdBQUcxRCxPQUFPMkQsV0FBVyxDQUFDSixhQUFheEQsT0FBTyxHQUFHO1FBQzdDLEdBQUdaLFVBQVUsQ0FBQyxDQUFDO0lBQ2pCO0lBQ0EsT0FBT0EsU0FBU1EsYUFBYThELE1BQU1DLGVBQWU7QUFDcEQ7QUFFQSx1QkFBdUI7QUFDdkIsU0FBU0UsdUJBQXVCMUMsS0FBSztJQUNuQyxNQUFNRSxRQUFRa0M7SUFDZCxPQUFPLGFBQWEsaUJBQUc3RSxnREFBbUIsQ0FBQ3VFLGVBQWU7UUFBRTVCO1FBQU8sR0FBR0YsS0FBSztRQUFFbUIsV0FBVztJQUFPO0FBQ2pHO0FBQ0EsU0FBU3dCLGVBQWUzQyxLQUFLO0lBQzNCLE9BQU8sYUFBYSxpQkFBR3pDLGdEQUFtQixDQUFDQywyQ0FBUUEsRUFBRTtRQUFFb0YsVUFBVTtJQUFLLEdBQUcsYUFBYSxpQkFBR3JGLGdEQUFtQixDQUFDbUYsd0JBQXdCO1FBQUUsR0FBRzFDLEtBQUs7SUFBQztBQUNsSjtBQUdFLENBQ0Ysa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJuZXQtc3BlZWQtY2hlY2tlci8uL25vZGVfbW9kdWxlcy9AdmVyY2VsL3NwZWVkLWluc2lnaHRzL2Rpc3QvbmV4dC9pbmRleC5tanM/MWVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gc3JjL25leHRqcy9pbmRleC50c3hcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBzcmMvcmVhY3QvaW5kZXgudHN4XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBwYWNrYWdlLmpzb25cbnZhciBuYW1lID0gXCJAdmVyY2VsL3NwZWVkLWluc2lnaHRzXCI7XG52YXIgdmVyc2lvbiA9IFwiMS4wLjEyXCI7XG5cbi8vIHNyYy9xdWV1ZS50c1xudmFyIGluaXRRdWV1ZSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5zaSlcbiAgICByZXR1cm47XG4gIHdpbmRvdy5zaSA9IGZ1bmN0aW9uIGEoLi4ucGFyYW1zKSB7XG4gICAgKHdpbmRvdy5zaXEgPSB3aW5kb3cuc2lxIHx8IFtdKS5wdXNoKHBhcmFtcyk7XG4gIH07XG59O1xuXG4vLyBzcmMvdXRpbHMudHNcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBkZXRlY3RFbnZpcm9ubWVudCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBpZiAoZW52ID09PSBcImRldmVsb3BtZW50XCIgfHwgZW52ID09PSBcInRlc3RcIikge1xuICAgICAgcmV0dXJuIFwiZGV2ZWxvcG1lbnRcIjtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gXCJwcm9kdWN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc0RldmVsb3BtZW50KCkge1xuICByZXR1cm4gZGV0ZWN0RW52aXJvbm1lbnQoKSA9PT0gXCJkZXZlbG9wbWVudFwiO1xufVxuZnVuY3Rpb24gY29tcHV0ZVJvdXRlKHBhdGhuYW1lLCBwYXRoUGFyYW1zKSB7XG4gIGlmICghcGF0aG5hbWUgfHwgIXBhdGhQYXJhbXMpIHtcbiAgICByZXR1cm4gcGF0aG5hbWU7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IHBhdGhuYW1lO1xuICB0cnkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhwYXRoUGFyYW1zKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXIgPSB0dXJuVmFsdWVUb1JlZ0V4cCh2YWx1ZSk7XG4gICAgICAgIGlmIChtYXRjaGVyLnRlc3QocmVzdWx0KSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG1hdGNoZXIsIGAvWyR7a2V5fV1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlLmpvaW4oXCIvXCIpKTtcbiAgICAgICAgaWYgKG1hdGNoZXIudGVzdChyZXN1bHQpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWF0Y2hlciwgYC9bLi4uJHtrZXl9XWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcGF0aG5hbWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKGAvJHtlc2NhcGVSZWdFeHAodmFsdWUpfSg/PVsvPyNdfCQpYCk7XG59XG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xufVxuXG4vLyBzcmMvZ2VuZXJpYy50c1xudmFyIFNDUklQVF9VUkwgPSBgaHR0cHM6Ly92YS52ZXJjZWwtc2NyaXB0cy5jb20vdjEvc3BlZWQtaW5zaWdodHNgO1xudmFyIFBST0RfU0NSSVBUX1VSTCA9IGAke1NDUklQVF9VUkx9L3NjcmlwdC5qc2A7XG52YXIgREVWX1NDUklQVF9VUkwgPSBgJHtTQ1JJUFRfVVJMfS9zY3JpcHQuZGVidWcuanNgO1xudmFyIFBST1hZX1NDUklQVF9VUkwgPSBgL192ZXJjZWwvc3BlZWQtaW5zaWdodHMvc2NyaXB0LmpzYDtcbmZ1bmN0aW9uIGluamVjdFNwZWVkSW5zaWdodHMocHJvcHMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGlmICghaXNCcm93c2VyKCkgfHwgcHJvcHMucm91dGUgPT09IG51bGwpXG4gICAgcmV0dXJuIG51bGw7XG4gIGluaXRRdWV1ZSgpO1xuICBjb25zdCBpc1NlbGZIb3N0ZWQgPSBCb29sZWFuKHByb3BzLmRzbik7XG4gIGNvbnN0IHByb2R1Y3Rpb25TY3JpcHQgPSBpc1NlbGZIb3N0ZWQgPyBQUk9EX1NDUklQVF9VUkwgOiBQUk9YWV9TQ1JJUFRfVVJMO1xuICBjb25zdCBzcmMgPSBwcm9wcy5zY3JpcHRTcmMgfHwgKGlzRGV2ZWxvcG1lbnQoKSA/IERFVl9TQ1JJUFRfVVJMIDogcHJvZHVjdGlvblNjcmlwdCk7XG4gIGlmIChkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmMqPVwiJHtzcmN9XCJdYCkpXG4gICAgcmV0dXJuIG51bGw7XG4gIGlmIChwcm9wcy5iZWZvcmVTZW5kKSB7XG4gICAgKF9hID0gd2luZG93LnNpKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh3aW5kb3csIFwiYmVmb3JlU2VuZFwiLCBwcm9wcy5iZWZvcmVTZW5kKTtcbiAgfVxuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuc3JjID0gc3JjO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuZGF0YXNldC5zZGtuID0gbmFtZSArIChwcm9wcy5mcmFtZXdvcmsgPyBgLyR7cHJvcHMuZnJhbWV3b3JrfWAgOiBcIlwiKTtcbiAgc2NyaXB0LmRhdGFzZXQuc2RrdiA9IHZlcnNpb247XG4gIGlmIChwcm9wcy5zYW1wbGVSYXRlKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuc2FtcGxlUmF0ZSA9IHByb3BzLnNhbXBsZVJhdGUudG9TdHJpbmcoKTtcbiAgfVxuICBpZiAocHJvcHMucm91dGUpIHtcbiAgICBzY3JpcHQuZGF0YXNldC5yb3V0ZSA9IHByb3BzLnJvdXRlO1xuICB9XG4gIGlmIChwcm9wcy5lbmRwb2ludCkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmVuZHBvaW50ID0gcHJvcHMuZW5kcG9pbnQ7XG4gIH1cbiAgaWYgKHByb3BzLmRzbikge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRzbiA9IHByb3BzLmRzbjtcbiAgfVxuICBpZiAoaXNEZXZlbG9wbWVudCgpICYmIHByb3BzLmRlYnVnID09PSBmYWxzZSkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRlYnVnID0gXCJmYWxzZVwiO1xuICB9XG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtWZXJjZWwgU3BlZWQgSW5zaWdodHNdIEZhaWxlZCB0byBsb2FkIHNjcmlwdCBmcm9tICR7c3JjfS4gUGxlYXNlIGNoZWNrIGlmIGFueSBjb250ZW50IGJsb2NrZXJzIGFyZSBlbmFibGVkIGFuZCB0cnkgYWdhaW4uYFxuICAgICk7XG4gIH07XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgcmV0dXJuIHtcbiAgICBzZXRSb3V0ZTogKHJvdXRlKSA9PiB7XG4gICAgICBzY3JpcHQuZGF0YXNldC5yb3V0ZSA9IHJvdXRlID8/IHZvaWQgMDtcbiAgICB9XG4gIH07XG59XG5cbi8vIHNyYy9yZWFjdC9pbmRleC50c3hcbmZ1bmN0aW9uIFNwZWVkSW5zaWdodHMocHJvcHMpIHtcbiAgY29uc3Qgc2V0U2NyaXB0Um91dGUgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXRTY3JpcHRSb3V0ZS5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBpbmplY3RTcGVlZEluc2lnaHRzKHtcbiAgICAgICAgZnJhbWV3b3JrOiBwcm9wcy5mcmFtZXdvcmsgfHwgXCJyZWFjdFwiLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfSk7XG4gICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgIHNldFNjcmlwdFJvdXRlLmN1cnJlbnQgPSBzY3JpcHQuc2V0Um91dGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcm9wcy5yb3V0ZSkge1xuICAgICAgc2V0U2NyaXB0Um91dGUuY3VycmVudChwcm9wcy5yb3V0ZSk7XG4gICAgfVxuICB9LCBbcHJvcHMucm91dGVdKTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIHNyYy9uZXh0anMvdXRpbHMudHNcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUGF0aG5hbWUsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb24uanNcIjtcbnZhciB1c2VSb3V0ZSA9ICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpIHx8IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGZpbmFsUGFyYW1zID0ge1xuICAgIC4uLk9iamVjdC5mcm9tRW50cmllcyhzZWFyY2hQYXJhbXMuZW50cmllcygpKSxcbiAgICAuLi5wYXJhbXMgfHwge31cbiAgfTtcbiAgcmV0dXJuIHBhcmFtcyA/IGNvbXB1dGVSb3V0ZShwYXRoLCBmaW5hbFBhcmFtcykgOiBudWxsO1xufTtcblxuLy8gc3JjL25leHRqcy9pbmRleC50c3hcbmZ1bmN0aW9uIFNwZWVkSW5zaWdodHNDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BlZWRJbnNpZ2h0cywgeyByb3V0ZSwgLi4ucHJvcHMsIGZyYW1ld29yazogXCJuZXh0XCIgfSk7XG59XG5mdW5jdGlvbiBTcGVlZEluc2lnaHRzMihwcm9wcykge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VzcGVuc2UsIHsgZmFsbGJhY2s6IG51bGwgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BlZWRJbnNpZ2h0c0NvbXBvbmVudCwgeyAuLi5wcm9wcyB9KSk7XG59XG5leHBvcnQge1xuICBTcGVlZEluc2lnaHRzMiBhcyBTcGVlZEluc2lnaHRzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwibmFtZSIsInZlcnNpb24iLCJpbml0UXVldWUiLCJ3aW5kb3ciLCJzaSIsImEiLCJwYXJhbXMiLCJzaXEiLCJwdXNoIiwiaXNCcm93c2VyIiwiZGV0ZWN0RW52aXJvbm1lbnQiLCJlbnYiLCJlIiwiaXNEZXZlbG9wbWVudCIsImNvbXB1dGVSb3V0ZSIsInBhdGhuYW1lIiwicGF0aFBhcmFtcyIsInJlc3VsdCIsImVudHJpZXMiLCJPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hdGNoZXIiLCJ0dXJuVmFsdWVUb1JlZ0V4cCIsInRlc3QiLCJyZXBsYWNlIiwiam9pbiIsIlJlZ0V4cCIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsIlNDUklQVF9VUkwiLCJQUk9EX1NDUklQVF9VUkwiLCJERVZfU0NSSVBUX1VSTCIsIlBST1hZX1NDUklQVF9VUkwiLCJpbmplY3RTcGVlZEluc2lnaHRzIiwicHJvcHMiLCJfYSIsInJvdXRlIiwiaXNTZWxmSG9zdGVkIiwiQm9vbGVhbiIsImRzbiIsInByb2R1Y3Rpb25TY3JpcHQiLCJzcmMiLCJzY3JpcHRTcmMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiYmVmb3JlU2VuZCIsImNhbGwiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiZGVmZXIiLCJkYXRhc2V0Iiwic2RrbiIsImZyYW1ld29yayIsInNka3YiLCJzYW1wbGVSYXRlIiwidG9TdHJpbmciLCJlbmRwb2ludCIsImRlYnVnIiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsInNldFJvdXRlIiwiU3BlZWRJbnNpZ2h0cyIsInNldFNjcmlwdFJvdXRlIiwiY3VycmVudCIsInVzZVBhcmFtcyIsInVzZVBhdGhuYW1lIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXRoIiwiZmluYWxQYXJhbXMiLCJmcm9tRW50cmllcyIsIlNwZWVkSW5zaWdodHNDb21wb25lbnQiLCJTcGVlZEluc2lnaHRzMiIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/speed-insights/dist/next/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/speed-insights/dist/next/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@vercel/speed-insights/dist/next/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedInsights: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Practice\internet-speed-notifier\node_modules\@vercel\speed-insights\dist\next\index.mjs`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Practice\internet-speed-notifier\node_modules\@vercel\speed-insights\dist\next\index.mjs#SpeedInsights`);


/***/ })

};
;