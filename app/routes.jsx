import App from "./components/app.jsx";
import Greeting from "./components/greeting.jsx";
import Greeting1 from "./components/greeting1.jsx";
import CustomGreeting from "./components/customGreeting.jsx"

export default {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'about',
      component: Greeting },
    {
      path: 'inbox',
      component: Greeting1,
      childRoutes: [
        {
          path: 'messages/:id',
          component: CustomGreeting
        }
      ]
    }
  ]
}