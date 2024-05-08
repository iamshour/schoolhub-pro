//#region Import
import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"

import MobileNavbar from "../app-layout/mobile-navbar"
import Skeleton from "../ui/skeleton"

const SideNavbar = lazy(() => import("./side-navbar"))
//#endregion

const AppLayout = () => {
	return (
		<div className='mx-auto flex min-h-screen w-screen max-w-7xl overflow-hidden bg-white xl:rounded-xl xl:border xl:border-blue-100'>
			<Suspense fallback={<Skeleton className='h-screen w-44 rounded-md' />}>
				<SideNavbar />
			</Suspense>

			<Suspense fallback={<Skeleton className='h-14 rounded-md' />}>
				<MobileNavbar />
			</Suspense>

			<div className='min-h-full flex-1 p-4'>
				<Suspense fallback={<Skeleton className='h-full rounded-full' />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}

export default AppLayout

// import LucideCirclePlus from "~icons/lucide/circle-plus"
// import LucideSearch from "~icons/lucide/search"
// import Button from "../ui/button"
// import Input from "../ui/input"

// <main className='flex flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
// 	<div className='flex items-center justify-between gap-2'>
// 		<div className='relative flex-1 md:grow-0'>
// 			<LucideSearch className='text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4' />
// 			<Input
// 				className='bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]'
// 				placeholder='Search...'
// 				type='search'
// 			/>
// 		</div>

// 		<Button className='h-8 gap-1' size='sm'>
// 			<LucideCirclePlus className='h-3.5 w-3.5' />
// 			<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
// 		</Button>
// 	</div>

// 	<div className='h-full w-full flex-1'>{children}</div>
// </main>
