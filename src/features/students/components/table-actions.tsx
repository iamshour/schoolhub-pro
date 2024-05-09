//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import LucideEllipsis from "~icons/lucide/ellipsis"

import EditStudentDialog from "../dialogs/edit-student-dialog/edit-student-dialog"
import ViewStudentDialog from "../dialogs/view-student-dialog/view-student-dialog"
import { Student } from "../types"
//#endregion

const StudentsTableActions = ({ studentId }: Pick<Student, "studentId">) => (
	<Dropdown modal={false}>
		<Dropdown.Trigger asChild>
			<Button className='h-8 w-8 p-0' variant='ghost'>
				<span className='sr-only'>Open menu</span>
				<LucideEllipsis className='h-4 w-4' />
			</Button>
		</Dropdown.Trigger>
		<Dropdown.Content align='end'>
			<ViewStudentDialog studentId={studentId}>
				<Dropdown.Item>View Details</Dropdown.Item>
			</ViewStudentDialog>

			<Dropdown.Separator />

			<EditStudentDialog studentId={studentId}>
				<Dropdown.Item>Edit Details</Dropdown.Item>
			</EditStudentDialog>
		</Dropdown.Content>
	</Dropdown>
)

export default StudentsTableActions
