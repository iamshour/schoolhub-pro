//#region Import
import toast from "react-hot-toast"

import type { Student } from "./types"
//#endregion

export const fetchStudents: () => Promise<Student[]> = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			fetch("/data.json")
				.then((res) => res.json())
				.then((data) => resolve(data?.students))
				.catch((err) => {
					toast.error(`Ops. An error occurred. Error Stack: ${JSON.stringify(err)}`)
					reject(err)
				})
			// Added a static timer to make it a bit more realistic!
		}, 3000)
	})
