//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown-menu"
import LucideEllipsis from "~icons/lucide/ellipsis"

import { Student } from "../types"
//#endregion

const StudentsTableActions = ({ studentId }: Pick<Student, "studentId">) => {
	return (
		<Dropdown>
			<Dropdown.Trigger asChild>
				<Button className='h-8 w-8 p-0' variant='ghost'>
					<span className='sr-only'>Open menu</span>
					<LucideEllipsis className='h-4 w-4' />
				</Button>
			</Dropdown.Trigger>
			<Dropdown.Content align='end'>
				<Dropdown.Label>Actions</Dropdown.Label>
				<Dropdown.Item onClick={() => navigator.clipboard.writeText(studentId)}>Copy payment ID</Dropdown.Item>
				<Dropdown.Separator />
				<Dropdown.Item>View customer</Dropdown.Item>
				<Dropdown.Item>View payment details</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown>
	)
}

export default StudentsTableActions
