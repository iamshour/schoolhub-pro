//#region Import
import type { Student } from "@/features/students/types"

import Skeleton from "@/components/ui/skeleton"
import dayjs from "dayjs"

import { useGetStudentByIdQuery } from "../../api"
import studentKeyLabelMapping from "../../constants/student-key-label-mapping"
//#endregion

const ViewStudentDialogContent = ({ studentId }: Pick<Student, "studentId">) => {
	const { loading, student } = useGetStudentByIdQuery(studentId)

	if (loading) return <Skeleton className='h-full' />

	return (
		<div className='flow-root rounded-lg border border-gray-100 py-3 shadow-sm'>
			<dl className='-my-3 divide-y divide-gray-100 text-sm'>
				{!!student &&
					Object.entries(student)?.map(([key, value]) => (
						<div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4' key={key}>
							<dt className='font-medium text-gray-900'>
								{studentKeyLabelMapping[key as keyof typeof studentKeyLabelMapping]}
							</dt>
							<dd className='text-gray-700 sm:col-span-2'>
								{key === "dateOfbirth" ? dayjs(value).format("DD/MM/YYYY") : (value as string)}
							</dd>
						</div>
					))}

				{!student && "No Student Info Found"}
			</dl>
		</div>
	)
}

export default ViewStudentDialogContent
