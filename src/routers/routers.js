import {createRouter,createWebHistory} from "vue-router"
// import GlobalHome from "../../src/App.vue"
import HomeViews from "../views/Home.views.vue"
import ContactUs from "../views/Contact.views.vue"
import Club from "../views/Club.views.vue"
import Emprunteur from "../views/Emprunteur.views.vue"
import Preteur from "../views/Preteur.views.vue"
import About from "../views/About.views.vue"
const routes = [
    {name:"global_home", path:"/", component: HomeViews},
    {name:"home_view", path:"/accueil", component: HomeViews}, 
    {name:"contact_view", path:"/contact_us", component: ContactUs}, 
    {name:"club_view", path:"/club", component: Club}, 
    {name:"emprunteur_view", path:"/emprunteur", component: Emprunteur}, 
    {name:"preteur_view", path:"/preteur", component: Preteur}, 
    {name:"about_view", path:"/about", component: About}, 
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;