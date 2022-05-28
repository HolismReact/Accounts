import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Users from './User/List'
import UserBrowser from './User/Browser'

const AccountsRoutes = [
    {
        path: "/users",
        component: Users
    }
]

const AccountsMenu = [
    {
        title: "Users",
        icon: PeopleAltIcon,
        url: "/users"
    }
]

export { Users }
export { UserBrowser }
export { AccountsRoutes }
export { AccountsMenu }