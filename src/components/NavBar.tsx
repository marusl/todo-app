
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarToggle,
} from 'flowbite-react';

export const NavBar = () => {
    return (
        <Navbar fluid>
            <NavbarBrand href="#">
                <img src="src/assets/img/rosk.ico" className="mr-3 h-6 sm:h-9" alt="Rosk Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Rosk Task</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">John Doe</span>
                        <span className="block truncate text-sm font-medium">name@mail.com</span>
                    </DropdownHeader>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
        </Navbar>
    );
}

export default NavBar;