//#region Import
import Button from "@/components/ui/button"

import type { Teacher } from "../../types"

import { useAddTeacherMutation } from "../../api"
import StudentForm from "../../components/student-form"
import { TeacherSchema } from "../../constants/teacher-schema"
//#endregion

interface AddTeacherDialogContentProps {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const AddTeacherDialogContent = ({ closeDialog }: AddTeacherDialogContentProps) => {
	const { addTeacherMutation, loading } = useAddTeacherMutation()

	const handleSubmit = async (teacher: TeacherSchema) => {
		addTeacherMutation(teacher as Teacher).then(closeDialog)
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

export default AddTeacherDialogContent
