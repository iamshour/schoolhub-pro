/* eslint-disable react-refresh/only-export-components */

//#region Import
import AppLayout from "@/components/app-layout/app-layout"
import PATHS from "@/constants/paths"
import ReportsRoute from "@/features/report-cards/routes/reports-route"
import TeachersRoute from "@/features/teachers/routes/teachers-route"
import { lazy } from "react"
import { RouteObject, useRoutes } from "react-router-dom"
//#endregion

const StudentsRoute = lazy(() => import("@/features/students/routes/students-route"))

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
