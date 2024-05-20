//#region Import
import navLinks from "@/constants/nav-links"
import EmojioneSchool from "~icons/emojione/school"
import LucidePanelLeft from "~icons/lucide/panel-left"
import { Link } from "react-router-dom"

import Button from "../ui/button"
import Sheet from "../ui/sheet"
//#endregion

const MobileNavbar = () => {
	return (
		<header className='bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:hidden sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
			<Sheet>
				<Sheet.Trigger asChild>
					<Button className='sm:hidden' size='icon' variant='outline'>
						<LucidePanelLeft className='h-5 w-5' />
						<span className='sr-only'>Toggle Menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content className='sm:max-w-xs' side='left'>
					<nav className='grid gap-6 text-lg font-medium'>
						<Link
							className='bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base'
							to='#'>
							<EmojioneSchool className='h-5 w-5 transition-all group-hover:scale-110' />
							<span className='sr-only'>Schoolhub Pro</span>
						</Link>

						{navLinks.map(({ icon: Icon, label, to }) => (
							<Link
								className='text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5'
								key={label}
								to={to}>
								<Icon className='h-5 w-5' />
								{label}
							</Link>
						))}
					</nav>
				</Sheet.Content>
			</Sheet>
		</header>
	)
}

export default MobileNavbar
