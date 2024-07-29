import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";

  const menuItems = [
    {
      icon: <PresentationChartBarIcon className="h-5 w-5" color="white" />,
      text: 'Dashboard',
    },
    {
      icon: <ShoppingBagIcon className="h-5 w-5" color="white" />,
      text: 'E-Commerce',
    },
    {
      icon: <InboxIcon className="h-5 w-5" color="white" />,
      text: 'Inbox',
    },
    {
      icon: <UserCircleIcon className="h-5 w-5" color="white" />,
      text: 'Profile',
    },
    {
      icon: <Cog6ToothIcon className="h-5 w-5" color="white" />,
      text: 'Settings',
    },
    {
      icon: <PowerIcon className="h-5 w-5" color="white" />,
      text: 'Log Out',
    },
  ];

  const MenuList = () => {
    return (
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} className="hover:bg-primary w-4/5">
            <ListItemPrefix color="white">{item.icon}</ListItemPrefix>
            <Typography color="white">{item.text}</Typography>
          </ListItem>
        ))}
      </List>
    );
  };
  
   
  export function Sidebar() {
    return (
      <Card  color="teal" className="p-4 shadow-xl shadow-blue-gray-900/5 sidebar">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="white">
            Admin
          </Typography>
        </div>
        <MenuList />
      </Card>
    );
  }