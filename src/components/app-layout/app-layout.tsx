//#region Import
// import LucideCirclePlus from "~icons/lucide/circle-plus"
// import LucideSearch from "~icons/lucide/search"

import { Outlet } from "react-router-dom"

import MobileNavbar from "../app-layout/mobile-navbar"
// import Button from "../ui/button"
// import Input from "../ui/input"
import SideNavbar from "./side-navbar"
//#endregion

const AppLayout = () => {
	return (
		<div className='mx-auto flex min-h-screen w-screen max-w-7xl overflow-hidden bg-white xl:rounded-xl xl:border xl:border-blue-100'>
			<SideNavbar />

			<MobileNavbar />

			<div className='h-full flex-1 overflow-y-auto px-4'>
				<Outlet />

				{/* <main className='flex flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
					<div className='flex items-center justify-between gap-2'>
						<div className='relative flex-1 md:grow-0'>
							<LucideSearch className='text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4' />
							<Input
								className='bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]'
								placeholder='Search...'
								type='search'
							/>
						</div>

						<Button className='h-8 gap-1' size='sm'>
							<LucideCirclePlus className='h-3.5 w-3.5' />
							<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
						</Button>
					</div>

					<div className='h-full w-full flex-1'>{children}</div>
				</main> */}
			</div>
		</div>
	)
}

export default AppLayout
