//#region Import
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useLocalStorage } from "usehooks-ts"

import type { Teacher } from "./types"

import { addTeacher, deleteTeacher, fetchTeacherById, fetchTeahcers, updateTeacherById } from "./services"
//#endregion

export const useGetTeachersQuery = () => {
	const [loading, setLoading] = useState(false)

	const [teachers, setTeachers] = useLocalStorage<Teacher[]>("teachers", [])

	useEffect(() => {
		if (!teachers?.length) {
			setLoading(true)
			const getTeachers = async () => {
				try {
					const data = await fetchTeahcers()

					setLoading(false)
					setTeachers(data)
				} catch (error) {
					setLoading(false)
					toast.error(`Ops. An error occurred. Error Stack: ${JSON.stringify(error)}`)
				}
			}

			getTeachers()
		}
	}, [setTeachers, teachers?.length])

	return { data: teachers, loading }
}

export const useGetTeacherByIdQuery = (teacherId: Teacher["teacherId"]) => {
	const [teacher, setTeacher] = useState<Teacher | undefined>(undefined)

	// Mocking a promise, to seem a bit realistic
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getTeachers = async () => {
			try {
				setLoading(true)
				const fetchedTeacher = await fetchTeacherById(teacherId)

				setTeacher(fetchedTeacher)
				setLoading(false)
			} catch (error) {
				setLoading(false)
				toast.error(String(error))
			}
		}

		getTeachers()
	}, [teacherId])

	return { loading, teacher }
}

export const useAddTeacherMutation = () => {
	const [loading, setLoading] = useState(false)

	const addTeacherMutation = async (newTeacher: Teacher) => {
		setLoading(true)

		try {
			await addTeacher(newTeacher)
			toast.success("Successfull addition")
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { addTeacherMutation, loading }
}

export const useUpdateTeacherMutation = () => {
	const [loading, setLoading] = useState(false)

	const updateTeacherMutation = async (newTeacher: Teacher) => {
		setLoading(true)

		try {
			await updateTeacherById(newTeacher)
			toast.success("Successfull update.")
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { loading, updateTeacherMutation }
}

export const useDeleteTeacherMutation = () => {
	const [loading, setLoading] = useState(false)

	const deleteTeacherMutation = async (teacherId: string) => {
		setLoading(true)

		try {
			await deleteTeacher(teacherId)
			toast.success("Deleted Successfully")
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { deleteTeacherMutation, loading }
}
