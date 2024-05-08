/* eslint-disable react-refresh/only-export-components */

//#region Import
import AppLayout from "@/components/app-layout/app-layout"
import PATHS from "@/constants/paths"
import { lazy } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

const ReportsRoute = lazy(() => import("@/features/report-cards/routes/reports-route"))

const TeachersRoute = lazy(() => import("@/features/teachers/routes/teachers-route"))

const StudentsRoute = lazy(() => import("@/features/students/routes/students-route"))
//#endregion

const routes: RouteObject[] = [
	{
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
		],
		element: <AppLayout />,
		path: "/",
	},
]

const AppRoutes = () => {
	const element = useRoutes(routes)

	return <>{element}</>
}

export default AppRoutes
