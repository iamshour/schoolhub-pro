//#region Import
import type { Student } from "@/features/students/types"

import Button from "@/components/ui/button"
import Skeleton from "@/components/ui/skeleton"

import type { StudentSchemaType } from "../../constants/student-schema"

import { useGetStudentByIdQuery, useUpdateStudentMutation } from "../../api"
import StudentForm from "../../components/student-form"
//#endregion

interface EditStudentDialogContentProps extends Pick<Student, "studentId"> {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const EditStudentDialogContent = ({ closeDialog, studentId }: EditStudentDialogContentProps) => {
	const { loading: fetchLoading, student } = useGetStudentByIdQuery(studentId)

	const { loading: updateLoading, updateStudentMutation } = useUpdateStudentMutation()

	const handleUpdate = (newData: StudentSchemaType) => {
		updateStudentMutation({ ...newData, studentId } as Student).then(closeDialog)
	}

	if (fetchLoading) return <Skeleton className='h-full' />

	return (
		<StudentForm defaultValues={student} onSubmit={handleUpdate}>
			<Button className='sm:w-28' onClick={closeDialog} size='sm' type='button' variant='outline'>
				Close
			</Button>

			<Button className='sm:w-28' loading={updateLoading} size='sm' type='submit'>
				Submit
			</Button>
		</StudentForm>
	)
}

export default EditStudentDialogContent
