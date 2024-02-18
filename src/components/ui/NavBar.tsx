import MenuIcon from "@/components/ui/MenuIcon";
import Logo from "@/components/ui/Logo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";

const NavBar = () => {
    return (
        <>
            <nav className={'flex justify-between items-center'}>
                <section>
                    <Logo size={42}/>
                </section>
                <section>
                    <ModeToggle/>
                </section>
                <section>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <MenuIcon size={42}/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Get in touch ?</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <Button asChild={true}>

                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </section>
            </nav>

        </>
    )
}

export default NavBar;