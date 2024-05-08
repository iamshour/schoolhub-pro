import { DataTable } from "@/components/ui/data-table"

import { columns, Payment } from "../columns"

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

	return (
		<div className='mx-auto py-10'>
			<DataTable columns={columns} data={data} />
		</div>
	)
}

export default StudentsRoute
