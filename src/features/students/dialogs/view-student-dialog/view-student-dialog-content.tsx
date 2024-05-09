//#region Import
import type { Student } from "@/features/students/types"
//#endregion

const ViewStudentDialogContent = ({ studentId }: Pick<Student, "studentId">) => {
	console.log({ studentId })

	return (
		<div>
			<div>ViewStudentDialogContent</div>
		</div>
	)
}

export default ViewStudentDialogContent
