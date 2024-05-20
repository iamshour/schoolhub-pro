//#region Import
import Skeleton from "@/components/ui/skeleton"
import dayjs from "dayjs"

import type { Teacher } from "../../types"

import { useGetTeacherByIdQuery } from "../../api"
import teacherKeyLabelMapping from "../../constants/student-key-label-mapping"
//#endregion

const ViewTeacherDialogContent = ({ teacherId }: Pick<Teacher, "teacherId">) => {
	const { loading, teacher } = useGetTeacherByIdQuery(teacherId)

	if (loading) return <Skeleton className='h-full' />

	return (
		<div className='flow-root rounded-lg border border-gray-100 py-3 shadow-sm'>
			<dl className='-my-3 divide-y divide-gray-100 text-sm'>
				{!!teacher &&
					Object.entries(teacher)?.map(([key, value]) => (
						<div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4' key={key}>
							<dt className='font-medium text-gray-900'>
								{teacherKeyLabelMapping[key as keyof typeof teacherKeyLabelMapping]}
							</dt>
							<dd className='text-gray-700 sm:col-span-2'>
								{key === "dateOfbirth" ? dayjs(value).format("DD/MM/YYYY") : (value as string)}
							</dd>
						</div>
					))}

				{!teacher && "No teacher Info Found"}
			</dl>
		</div>
	)
}

export default ViewTeacherDialogContent
