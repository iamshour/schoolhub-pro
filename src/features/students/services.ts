//#region Import
import { v4 as newId } from "uuid"

import type { Student } from "./types"
//#endregion

/**
 * Mock API Services Functions
 *
 */

export const fetchStudents = (): Promise<Student[]> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			fetch("/data.json")
				.then((res) => res.json())
				.then((data) => resolve(data?.students))
				.catch(reject)
			// Added a static timer to make it a bit more realistic!
		}, 1000)
	})

export const fetchStudentById = (studentId: Student["studentId"]): Promise<Student> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const studentEntries = window.localStorage.getItem("students")

			if (!studentEntries) {
				reject("No Students Found")

				return
			}

			const students: Student[] = JSON.parse(studentEntries) || []

			const studentToFind = students.find((st) => st.studentId === studentId)

			if (!studentToFind) {
				reject("No Student Found")

				return
			}

			resolve(studentToFind)
		}, 200)
	})

export const addStudent = (newStudent: Student) =>
	new Promise((resolve, reject) => {
		setTimeout(async () => {
			// Getting all existing students from Browser's storage
			const studentEntries = window.localStorage.getItem("students")

			const students: Student[] = studentEntries ? JSON.parse(studentEntries) : []

			// Checking if same student already exist (based if first, middle, and last names are the same)
			const existingStudent = students.some((prevStudent) =>
				(["firstName", "middleName", "lastName"] as (keyof Student)[]).every((i) => prevStudent[i] === newStudent[i])
			)

			if (existingStudent) {
				reject("A student with the same name already exists")

				return
			}

			// Generating unique student and class Ids
			const studentId = newId()

			const classId = newId()

			// Updated Old list list of students, using spread operator to add the new entry
			const updatedStudents = [...students, { ...newStudent, classId, studentId }]

			// Update localStorage with the updated student list
			window.localStorage.setItem("students", JSON.stringify(updatedStudents))

			resolve("Success!")

			// Have to reload so that new data in local storage would appear
			window.location.reload()
		}, 1500)
	})

export const updateStudentById = (newStudentData: Student) =>
	new Promise((resolve) => {
		setTimeout(async () => {
			// Getting all existing students from Browser's storage
			const studentEntries = window.localStorage.getItem("students")

			const students: Student[] = studentEntries ? JSON.parse(studentEntries) : []

			const updatedList = students.map((st) => {
				if (st.studentId === newStudentData.studentId) {
					return newStudentData
				}

				return st
			})

			console.log(updatedList)

			// Update localStorage with the updated student list
			window.localStorage.setItem("students", JSON.stringify(updatedList))

			resolve("Success!")

			// Have to reload so that new data in local storage would appear
			window.location.reload()
		}, 1500)
	})
