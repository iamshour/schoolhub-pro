//#region Import
import DataTable from "@/components/common/data-table/data-table"
import DataTableHeader from "@/components/common/data-table/data-table-header"
import Button from "@/components/ui/button"
import LucideCirclePlus from "~icons/lucide/circle-plus"

import { useGetTeachersQuery } from "./api"
import TeachersTableColumns from "./constants/columns"
import AddTeacherDialog from "./dialogs/add-teacher-dialog/add-teacher-dialog"
//#endregion

const TeachersRoute = () => {
	const { data } = useGetTeachersQuery()

	return (
		<div className='flex h-full flex-col gap-4 overflow-hidden'>
			<DataTableHeader>
				<AddTeacherDialog>
					<Button className='gap-2' size='sm'>
						<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Teacher</span>
						<LucideCirclePlus className='size-5' />
					</Button>
				</AddTeacherDialog>
			</DataTableHeader>

			<DataTable columns={TeachersTableColumns} data={data} />
		</div>
	)
}

export default TeachersRoute
