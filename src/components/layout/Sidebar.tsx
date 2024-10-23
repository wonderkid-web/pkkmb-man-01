import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    icon: <PresentationChartBarIcon className="h-5 w-5" color="white" />,
    text: "Dashboard",
    url: "/",
  },
  // {
  //   icon: <ShoppingBagIcon className="h-5 w-5" color="white" />,
  //   text: 'E-Commerce',
  // },
  {
    icon: <UserCircleIcon className="h-5 w-5" color="white" />,
    text: "Calon Peserta Didik",
    url: "/calon-siswa",
  },
  {
    icon: <UserCircleIcon className="h-5 w-5" color="white" />,
    text: "Siswa Lulus Seleksi",
    url: "/lulus",
  },
  // {
  //   icon: <InboxIcon className="h-5 w-5" color="white" />,
  //   text: "Inbox",
  //   url: "",
  // },
  // {
  //   icon: <Cog6ToothIcon className="h-5 w-5" color="white" />,
  //   text: 'Settings',
  // },
];

const MenuList = () => {
  const router = useRouter();

  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index} className="hover:bg-primary w-4/5">
          <ListItemPrefix color="white">{item.icon}</ListItemPrefix>
          <Link href={item.url} replace={true}>
            <Typography color="white">{item.text}</Typography>
          </Link>
        </ListItem>
      ))}

      <ListItem className="hover:bg-primary w-4/5">
        <ListItemPrefix color="white">
          <PowerIcon className="h-5 w-5" color="white" />
        </ListItemPrefix>
        <Typography
          color="white"
          onClick={async () => {
            router.push("/signin");
            await signOut();
          }}
        >
          Log out
        </Typography>
      </ListItem>
    </List>
  );
};

export function Sidebar() {
  return (
    <Card color="teal" className="p-4 shadow-xl shadow-blue-gray-900/5 sidebar">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="white">
          Admin
        </Typography>
      </div>
      <MenuList />
    </Card>
  );
}
