//#region Import
import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"

import MobileNavbar from "../app-layout/mobile-navbar"
import Skeleton from "../ui/skeleton"

const SideNavbar = lazy(() => import("./side-navbar"))
//#endregion

const AppLayout = () => {
	return (
		<div className='mx-auto flex min-h-screen w-screen max-w-7xl overflow-hidden bg-white xl:rounded-xl xl:border'>
			<Suspense fallback={<Skeleton className='h-screen w-44 rounded-md' />}>
				<SideNavbar />
			</Suspense>

			<Suspense fallback={<Skeleton className='h-14 rounded-md' />}>
				<MobileNavbar />
			</Suspense>

			<div className='min-h-full flex-1 overflow-hidden p-4'>
				<Suspense fallback={<Skeleton className='h-full rounded-xl' />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}

export default AppLayout
