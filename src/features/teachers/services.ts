//#region Import
import { v4 as newId } from "uuid"

import type { Teacher } from "./types"
//#endregion

/**
 * Mock API Services Functions
 *
 */

export const fetchTeahcers = (): Promise<Teacher[]> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			fetch("/data.json")
				.then((res) => res.json())
				.then((data) => resolve(data?.teachers))
				.catch(reject)
			// Added a static timer to make it a bit more realistic!
		}, 1000)
	})

export const fetchTeacherById = (teacherId: Teacher["teacherId"]): Promise<Teacher> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const teacherEntries = window.localStorage.getItem("teachers")

			if (!teacherEntries) {
				reject("No Teahcers Found")

				return
			}

			const teachers: Teacher[] = JSON.parse(teacherEntries) || []

			const teacherToFind = teachers.find((st) => st.teacherId === teacherId)

			if (!teacherToFind) {
				reject("No Teacher Found")

				return
			}

			resolve(teacherToFind)
		}, 200)
	})

export const addTeacher = (newTeacher: Teacher) =>
	new Promise((resolve, reject) => {
		setTimeout(async () => {
			// Getting all existing teachers from Browser's storage
			const teacherEntries = window.localStorage.getItem("teachers")

			const teachers: Teacher[] = teacherEntries ? JSON.parse(teacherEntries) : []

			// Checking if same teacher already exist (based if first, middle, and last names are the same)
			const existingTeacher = teachers.some((prevTeacher) =>
				(["firstName", "middleName", "lastName"] as (keyof Teacher)[]).every((i) => prevTeacher[i] === newTeacher[i])
			)

			if (existingTeacher) {
				reject("A Teacher with the same name already exists")

				return
			}

			// Generating unique Teacher and class Ids
			const teacherId = newId()

			// Updated Old list list of teachers, using spread operator to add the new entry
			const updatedTeachers = [...teachers, { ...newTeacher, teacherId }]

			// Update localStorage with the updated teacher list
			window.localStorage.setItem("teachers", JSON.stringify(updatedTeachers))

			resolve("Success!")

			// Have to reload so that new data in local storage would appear
			window.location.reload()
		}, 1500)
	})

export const updateTeacherById = (newTeacherData: Teacher) =>
	new Promise((resolve) => {
		setTimeout(async () => {
			// Getting all existing teachers from Browser's storage
			const teacherEntries = window.localStorage.getItem("teachers")

			const teachers: Teacher[] = teacherEntries ? JSON.parse(teacherEntries) : []

			const updatedList = teachers.map((st) => {
				if (st.teacherId === newTeacherData.teacherId) {
					return newTeacherData
				}

				return st
			})

			console.log(updatedList)

			// Update localStorage with the updated teacher list
			window.localStorage.setItem("teachers", JSON.stringify(updatedList))

			resolve("Success!")

			// Have to reload so that new data in local storage would appear
			window.location.reload()
		}, 1500)
	})

export const deleteTeacher = (teacherId: string) =>
	new Promise((resolve) => {
		setTimeout(async () => {
			// Getting all existing teachers from Browser's storage
			const teacherEntries = window.localStorage.getItem("teachers")

			const teachers: Teacher[] = teacherEntries ? JSON.parse(teacherEntries) : []

			const updatedList = teachers.filter((st) => st.teacherId !== teacherId)

			// Update localStorage with the updated teachers list
			window.localStorage.setItem("teachers", JSON.stringify(updatedList))

			resolve("Success!")

			// Have to reload so that new data in local storage would appear
			window.location.reload()
		}, 1500)
	})
