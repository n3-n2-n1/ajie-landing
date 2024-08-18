import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const MainNavbar: React.FC = () => {
  return (
    <Navbar shadow={false} fullWidth className="border-0">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          AJIE
        </Typography>
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          <NavItem>
            {/* <RectangleStackIcon className="h-5 w-5" /> */}
            Seguros
          </NavItem>
          <NavItem>
            {/* <UserCircleIcon className="h-5 w-5" /> */}
            Despidos
          </NavItem>
          <NavItem>
            {/* <Squares2X2Icon className="h-5 w-5" /> */}
            ART
          </NavItem>
          <NavItem>
            {/* <CommandLineIcon className="h-5 w-5" /> */}
            Sucesiones
          </NavItem>
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          {/* <Button variant="text">Log in</Button> */}
          <Button color="gray">Contactanos</Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          className="ml-auto inline-block lg:hidden"
        ></IconButton>
      </div>
      <Collapse>
        <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            <NavItem>
              <RectangleStackIcon className="h-5 w-5" />
              Pages
            </NavItem>
            <NavItem>
              <UserCircleIcon className="h-5 w-5" />
              Account
            </NavItem>
            <NavItem>
              <Squares2X2Icon className="h-5 w-5" />
              Blocks
            </NavItem>
            <NavItem>
              <CommandLineIcon className="h-5 w-5" />
              Docs
            </NavItem>
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-4">
            <Button variant="text">Log in</Button>
            <Button color="gray">buy now</Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default MainNavbar;
