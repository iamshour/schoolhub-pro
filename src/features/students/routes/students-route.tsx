//#region Import
import DataTable from "@/components/ui/data-table"

import { columns, Payment } from "../columns"
//#endregion

function getData(): Payment[] {
	return [
		{
			amount: 100,
			email: "m@example.com",
			id: "728ed52f",
			status: "pending",
		},
	]
}

const StudentsRoute = () => {
	const data = getData()

	return <DataTable columns={columns} data={data} />
}

export default StudentsRoute
