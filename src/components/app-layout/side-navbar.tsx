//#region Import
import navLinks from "@/constants/nav-links"
import { NavLink, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import Logo from "../common/logo"
import Tooltip from "../ui/tooltip"
//#endregion

const SideNavbar = () => {
	const { pathname } = useLocation()

	return (
		<aside className='bg-background z-10 hidden min-h-full w-44 flex-col border-r border-r-blue-100 sm:flex'>
			<nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
				<Logo className='relative mb-5 before:absolute before:inset-x-0 before:-bottom-4 before:h-0.5 before:w-full before:rounded-lg before:bg-blue-100 before:content-[""]' />

				{navLinks.map(({ icon: Icon, label, to }) => (
					<Tooltip content={label} key={to} side='right'>
						<NavLink
							className={twMerge(
								"flex w-full items-center gap-2.5 rounded-lg border border-dashed border-gray-200 bg-transparent p-2 px-2.5 text-gray-500 transition-basic hover:border-blue-50 hover:bg-blue-50 hover:text-blue-900",
								pathname?.includes(to) && "border-blue-50 bg-blue-50 text-blue-900"
							)}
							to={to}>
							<Icon className='size-7 shrink-0' />
							<span className='text-sm font-medium'>{label}</span>
						</NavLink>
					</Tooltip>
				))}
			</nav>
		</aside>
	)
}

export default SideNavbar
