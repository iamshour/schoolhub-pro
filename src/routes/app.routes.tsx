/* eslint-disable perfectionist/sort-objects*/

//#region Import
import AppLayout from "@/components/app-layout/app-layout"
import PATHS from "@/constants/paths"
import { lazy } from "react"
import { Navigate, RouteObject, useRoutes } from "react-router-dom"

const ReportsRoute = lazy(() => import("@/features/report-cards/route"))

const TeachersRoute = lazy(() => import("@/features/teachers/route"))

const StudentsRoute = lazy(() => import("@/features/students/route"))
//#endregion

const routes: RouteObject[] = [
	{
		element: <AppLayout />,
		children: [
			{
				element: <StudentsRoute />,
				path: PATHS.STUDENTS,
			},
			{
				element: <TeachersRoute />,
				path: PATHS.TEACHERS,
			},
			{
				element: <ReportsRoute />,
				path: PATHS.REPORTS,
			},

			// Using the below logic to always redirect users whenever
			// a page/destination cannot be found (Instead of using a 404 component)
			{
				path: "*",
				element: <Navigate to={PATHS.STUDENTS} />,
			},
		],
	},
]

const AppRoutes = () => {
	const element = useRoutes(routes)

	return <>{element}</>
}

export default AppRoutes
