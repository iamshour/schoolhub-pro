/* eslint-disable perfectionist/sort-objects*/

//#region Import
import type { ColumnDef } from "@tanstack/react-table"

import type { Student } from "../types"

import StudentsTableActions from "../components/table-actions"
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
