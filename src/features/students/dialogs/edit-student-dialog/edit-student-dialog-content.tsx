//#region Import
import type { Student } from "@/features/students/types"

import Button from "@/components/ui/button"
//#endregion

interface EditStudentDialogContentProps extends Pick<Student, "studentId"> {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const EditStudentDialogContent = ({ closeDialog, studentId }: EditStudentDialogContentProps) => {
	console.log({ studentId })

	return (
		<div>
			<div>Edit Student Dialog Content</div>

			<Button onClick={closeDialog}>Close</Button>
		</div>
	)
}

export default EditStudentDialogContent
