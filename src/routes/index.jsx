import SidebarWithHeader from "~/components/Layout/SidebarWithHeader";
import DefaultLayout from "~/components/Layout/DefaultLayout/index.jsx";
// import Header from "~/components/Layout/components/Header/index.jsx";
import Profile from "~/pages/Profile/index.jsx";
import Home from '~/pages/Home';
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/:nickname', component: Profile, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: SidebarWithHeader },
    { path: '/search', component: Search, layout: null },
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }