//#region Import
import Button from "@/components/ui/button"
import toast from "react-hot-toast"

import { useAddStudentMutation } from "../../api"
import StudentForm from "../../components/student-form"
import { Student } from "../../types"
//#endregion

interface AddStudentDialogContentProps {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const AddStudentDialogContent = ({ closeDialog }: AddStudentDialogContentProps) => {
	const { addStudentMutation, loading } = useAddStudentMutation()

	const handleSubmit = async (student: Partial<Student>) => {
		console.log(student)
		// try {
		// 	await addStudentMutation(student as Student)
		// } catch (error) {
		// 	toast(String(error))
		// }
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
