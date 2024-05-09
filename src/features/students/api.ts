//#region Import
import { useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"

import type { Student } from "./types"

import { fetchStudents } from "./services"
//#endregion

export const useGetStudentsQuery = () => {
	const [students, setStudents] = useLocalStorage<Student[]>("students", [])

	useEffect(() => {
		if (!students?.length) {
			console.log("Fetching...")

			const getStudents = async () => {
				const data = await fetchStudents()

				setStudents(data)
			}

			getStudents()
		}
	}, [setStudents, students?.length])

	return { data: students }
}
