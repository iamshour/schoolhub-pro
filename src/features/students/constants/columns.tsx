/* eslint-disable perfectionist/sort-objects,react-refresh/only-export-components*/

//#region Import
import { ColumnDef } from "@tanstack/react-table"
import { lazy } from "react"

import type { Student } from "../types"

const StudentsTableActions = lazy(() => import("../components/table-actions"))
//#endregion

const studentsTableColumns: ColumnDef<Student>[] = [
	{
		accessorKey: "firstName",
		header: "First Name",
	},
	{
		accessorKey: "lastName",
		header: "Last Name",
	},
	{
		accessorKey: "country",
		header: "Country",
	},
	{
		accessorKey: "phone",
		header: "Phone Number",
	},
	{
		cell: ({ row: { original } }) => <StudentsTableActions studentId={original.studentId} />,
		id: "actions",
	},
]

export default studentsTableColumns
