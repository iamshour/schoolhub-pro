//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import LucideEllipsis from "~icons/lucide/ellipsis"

import type { Teacher } from "../types"

import EditTeacherDialog from "../dialogs/edit-teacher-dialog/edit-teacher-dialog"
import ViewStudentDialog from "../dialogs/view-teacher-dialog/view-teacher-dialog"
//#endregion

const TeachersTableActions = ({ teacherId }: Pick<Teacher, "teacherId">) => (
	<Dropdown modal={false}>
		<Dropdown.Trigger asChild>
			<Button className='h-8 w-8 p-0' variant='ghost'>
				<span className='sr-only'>Open menu</span>
				<LucideEllipsis className='h-4 w-4' />
			</Button>
		</Dropdown.Trigger>
		<Dropdown.Content align='end'>
			<ViewStudentDialog teacherId={teacherId}>
				<Dropdown.Item>View Details</Dropdown.Item>
			</ViewStudentDialog>

			<Dropdown.Separator />

			<EditTeacherDialog teacherId={teacherId}>
				<Dropdown.Item>Edit Details</Dropdown.Item>
			</EditTeacherDialog>
		</Dropdown.Content>
	</Dropdown>
)

export default TeachersTableActions
