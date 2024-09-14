import { GiPayMoney,GiReceiveMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
export const menuItems=[
    {
        id:1,
        title:"Dashboard",
        icon:<MdDashboard />,
        link:'/dashboard'
    },
    {
        id:2,
        title:"View Transactions",
        icon:<GrTransaction />,
        link:'/viewtransac'
    },
    {
        id:3,
        title:"Incomes",
        icon:<GiReceiveMoney/>,
        link:'/dashboard'
    },
    {
        id:4,
        title:"Expenses",
        icon:<GiPayMoney/>,
        link:'/dashboard'
    },
]