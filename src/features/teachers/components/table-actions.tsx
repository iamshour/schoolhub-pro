//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import LucideEllipsis from "~icons/lucide/ellipsis"

import type { Teacher } from "../types"

import DeleteTeacherDialog from "../dialogs/delete-teacher-dialog/delete-teacher-dialog"
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
		<Dropdown.Content align='end' className='min-w-[6rem]'>
			<ViewStudentDialog teacherId={teacherId}>
				<Dropdown.Item>View</Dropdown.Item>
			</ViewStudentDialog>

			<Dropdown.Separator />

			<EditTeacherDialog teacherId={teacherId}>
				<Dropdown.Item>Edit</Dropdown.Item>
			</EditTeacherDialog>

			<Dropdown.Separator />

			<DeleteTeacherDialog teacherId={teacherId}>
				<Dropdown.Item>Delete</Dropdown.Item>
			</DeleteTeacherDialog>
		</Dropdown.Content>
	</Dropdown>
)

export default TeachersTableActions
