/* For lazy loading / Code Split */
import Loadable from 'react-loadable';
/* Loading template */
import Loading from './script-loader';

const routes = {
	notLogged: [
		{
			path: "/login",
			component: Loadable({
				loader: () => import("./containers/login"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/signup",
			component: Loadable({
				loader: () => import("./containers/signup"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/forgot-password",
			component: Loadable({
				loader: () => import("./containers/forgot-password"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/lock-screen",
			component: Loadable({
				loader: () => import("./containers/lock-screen"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/page404",
			component: Loadable({
				loader: () => import("./containers/page404"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/loginSecond",
			component: Loadable({
				loader: () => import("./containers/loginSecond"),
				loading: Loading
			}),
			exact: true
		}
	],
	logged: [
		{
			path: "/",
			component: Loadable({
				loader: () => import("./containers/layout/home/home"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/bot/bot-list",
			component: Loadable({
				loader: () => import("./containers/layout/bot/bot-list"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/log/log-list",
			component: Loadable({
				loader: () => import("./containers/layout/log/log-list"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/chat/chatbot",
			component: Loadable({
				loader: () => import("./containers/layout/chat/chatbot"),
				loading: Loading
			}),
			exact: true
		},
         {
			path: "/training/bot-training",
			component: Loadable({
				loader: () => import("./containers/layout/training/bot-training"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/response/bot-response",
			component: Loadable({
				loader: () => import("./containers/layout/response/bot-response"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/models",
			component: Loadable({
				loader: () => import("./containers/layout/models/model"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/stories/bot-stories",
			component: Loadable({
				loader: () => import("./containers/layout/stories/bot-stories"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/configurations",
			component: Loadable({
				loader: () => import("./containers/layout/configurations/configuration"),
				loading: Loading
			}),
			exact: true
		},
		 {
			path: "/settings",
			component: Loadable({
				loader: () => import("./containers/layout/settings/setting"),
				loading: Loading
			}),
			exact: true
		},
		{
			path: "/contact",
			component: Loadable({
				loader: () => import("./containers/contact"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/about",
			component: Loadable({
				loader: () => import("./containers/about"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/sample-pages/profile",
			component: Loadable({
				loader: () => import("./containers/layout/pages/profile"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "*",
			component: Loadable({
				loader: () => import("./containers/page-not-found"),
				loading: Loading
			}),
			exact: true
		}
	]
}

module.exports.routes = routes