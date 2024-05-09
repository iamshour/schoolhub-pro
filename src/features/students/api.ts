//#region Import
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useLocalStorage } from "usehooks-ts"

import type { Student } from "./types"

import { addStudent, fetchStudentById, fetchStudents } from "./services"
//#endregion

export const useGetStudentsQuery = () => {
	const [students, setStudents] = useLocalStorage<Student[]>("students", [])

	useEffect(() => {
		if (!students?.length) {
			const getStudents = async () => {
				try {
					const data = await fetchStudents()

					setStudents(data)
				} catch (error) {
					toast.error(`Ops. An error occurred. Error Stack: ${JSON.stringify(error)}`)
				}
			}

			getStudents()
		}
	}, [setStudents, students?.length])

	return { data: students }
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
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast(String(error))
		}
	}

	return { addStudentMutation, loading }
}
