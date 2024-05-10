//#region Import
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useLocalStorage } from "usehooks-ts"

import type { Student } from "./types"

import { addStudent, deleteStudent, fetchStudentById, fetchStudents, updateStudentById } from "./services"
//#endregion

export const useGetStudentsQuery = () => {
	const [loading, setLoading] = useState(false)

	const [students, setStudents] = useLocalStorage<Student[]>("students", [])

	useEffect(() => {
		if (!students?.length) {
			setLoading(true)
			const getStudents = async () => {
				try {
					const data = await fetchStudents()

					setLoading(false)
					setStudents(data)
				} catch (error) {
					setLoading(false)
					toast.error(`Ops. An error occurred. Error Stack: ${JSON.stringify(error)}`)
				}
			}

			getStudents()
		}
	}, [setStudents, students?.length])

	return { data: students, loading }
}

export const useGetStudentByIdQuery = (studentId: Student["studentId"]) => {
	const [student, setStudent] = useState<Student | undefined>(undefined)

	// Mocking a promise, to seem a bit realistic
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getStudents = async () => {
			try {
				setLoading(true)
				const fetchedStudent = await fetchStudentById(studentId)

				setStudent(fetchedStudent)
				setLoading(false)
			} catch (error) {
				setLoading(false)
				toast.error(String(error))
			}
		}

		getStudents()
	}, [studentId])

	return { loading, student }
}

export const useAddStudentMutation = () => {
	const [loading, setLoading] = useState(false)

	const addStudentMutation = async (newStudent: Student) => {
		setLoading(true)

		try {
			await addStudent(newStudent)
			toast.success("Successfull addition")
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { addStudentMutation, loading }
}

export const useUpdateStudentMutation = () => {
	const [loading, setLoading] = useState(false)

	const updateStudentMutation = async (newStudent: Student) => {
		setLoading(true)

		try {
			await updateStudentById(newStudent)
			toast.success("Successfull update.")
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { loading, updateStudentMutation }
}

export const useDeleteStudentMutation = () => {
	const [loading, setLoading] = useState(false)

	const deleteStudentMutation = async (studentId: Student["studentId"]) => {
		setLoading(true)

		try {
			await deleteStudent(studentId)
			toast.success("Deleted Successfully")
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { deleteStudentMutation, loading }
}
