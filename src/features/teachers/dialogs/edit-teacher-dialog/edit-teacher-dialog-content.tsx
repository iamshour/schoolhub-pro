//#region Import
import Button from "@/components/ui/button"
import Skeleton from "@/components/ui/skeleton"

import { useGetTeacherByIdQuery, useUpdateTeacherMutation } from "../../api"
import StudentForm from "../../components/student-form"
import { TeacherSchema } from "../../constants/teacher-schema"
import { Teacher } from "../../types"
//#endregion

interface EditStudentDialogContentProps extends Pick<Teacher, "teacherId"> {
	/**
	 * Callback function used to close the dialog
	 */
	closeDialog: () => void
}

const EditTeacherDialogContent = ({ closeDialog, teacherId }: EditStudentDialogContentProps) => {
	const { loading: fetchLoading, teacher } = useGetTeacherByIdQuery(teacherId)

	const { loading: updateLoading, updateTeacherMutation } = useUpdateTeacherMutation()

	const handleUpdate = (newData: TeacherSchema) => {
		updateTeacherMutation({ ...newData, teacherId } as Teacher).then(closeDialog)
	}

	if (fetchLoading) return <Skeleton className='h-full' />

	return (
		<StudentForm defaultValues={teacher} onSubmit={handleUpdate}>
			<Button className='sm:w-28' onClick={closeDialog} size='sm' type='button' variant='outline'>
				Close
			</Button>

			<Button className='sm:w-28' loading={updateLoading} size='sm' type='submit'>
				Submit
			</Button>
		</StudentForm>
	)
}

export default EditTeacherDialogContent
