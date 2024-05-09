//#region Import
import DataTable from "@/components/common/data-table/data-table"
import DataTableHeader from "@/components/common/data-table/data-table-header"
import Button from "@/components/ui/button"
import LucideCirclePlus from "~icons/lucide/circle-plus"

import { useGetStudentsQuery } from "./api"
import studentsTableColumns from "./constants/columns"
import AddStudentDialog from "./dialogs/add-student-dialog/add-student-dialog"
//#endregion

const StudentsRoute = () => {
	const { data } = useGetStudentsQuery()

	return (
		<div className='flex h-full flex-col gap-4 overflow-hidden'>
			<DataTableHeader onChange={() => console.log("first")} value=''>
				<AddStudentDialog>
					<Button className='gap-2' size='sm'>
						<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Student</span>
						<LucideCirclePlus className='size-5' />
					</Button>
				</AddStudentDialog>
			</DataTableHeader>

			<DataTable columns={studentsTableColumns} data={data} />
		</div>
	)
}

export default StudentsRoute
