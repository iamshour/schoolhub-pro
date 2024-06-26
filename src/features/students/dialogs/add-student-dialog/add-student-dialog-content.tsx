//#region Import
import Button from "@/components/ui/button"

import type { StudentSchemaType } from "../../constants/student-schema"
import type { Student } from "../../types"

import { useAddStudentMutation } from "../../api"
import StudentForm from "../../components/student-form"
//#endregion

interface AddStudentDialogContentProps {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const AddStudentDialogContent = ({ closeDialog }: AddStudentDialogContentProps) => {
	const { addStudentMutation, loading } = useAddStudentMutation()

	const handleSubmit = async (student: StudentSchemaType) => {
		addStudentMutation(student as Student).then(closeDialog)
	}

	return (
		<StudentForm onSubmit={handleSubmit}>
			<Button className='sm:w-28' onClick={closeDialog} size='sm' type='button' variant='outline'>
				Close
			</Button>

			<Button className='sm:w-28' loading={loading} size='sm' type='submit'>
				Submit
			</Button>
		</StudentForm>
	)
}

export default AddStudentDialogContent
