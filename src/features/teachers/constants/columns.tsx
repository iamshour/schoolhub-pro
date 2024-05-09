//#region Import
import type { ColumnDef } from "@tanstack/react-table"

import type { Teacher } from "../types"

import TeachersTableActions from "../components/table-actions"
//#endregion

const teachersTableColumns: ColumnDef<Teacher>[] = [
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
		cell: ({ row: { original } }) => <TeachersTableActions teacherId={original.teacherId} />,
		id: "actions",
	},
]

export default teachersTableColumns
