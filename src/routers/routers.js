import {createRouter,createWebHistory} from "vue-router"
import GlobalHome from "../../src/App.vue"
import HomeViews from "../views/Home.views.vue"
import ContactUs from "../views/Contact.views.vue"
import Club from "../views/Club.views.vue"
const routes = [
    {name:"global_home", path:"/", component: HomeViews},
    {name:"home_view", path:"/accueil", component: HomeViews}, 
    {name:"contact_view", path:"/contact_us", component: ContactUs}, 
    {name:"club_view", path:"/club", component: Club}, 
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;