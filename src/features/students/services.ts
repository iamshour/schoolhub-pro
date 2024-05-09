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

			if (!studentEntries) return reject("No Students Found")

			const students: Student[] = JSON.parse(studentEntries) || []

			const studentToFind = students.find((st) => st.studentId === studentId)

			if (!studentToFind) return reject("No Student Found")

			resolve(studentToFind)
		}, 1000)
	})

export const addStudent = (newStudent: Student) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			// Getting all existing students from Browser's storage
			const studentEntries = window.localStorage.getItem("students")

			const students: Student[] = studentEntries ? JSON.parse(studentEntries) : []

			// Checking if same student already exist (based if first, middle, and last names are the same)
			const existingStudent = students.some((prevStudent) =>
				(["firstName", "middleName", "lastName"] as (keyof Student)[]).every((i) => prevStudent[i] === newStudent[i])
			)

			if (existingStudent) return reject("A student with the same name already exists")

			// Generating unique student and class Ids
			const studentId = newId()

			const classId = newId()

			// Updated Old list list of students, using spread operator to add the new entry
			const updatedStudents = [...students, { ...newStudent, classId, studentId }]

			// Update localStorage with the updated student list
			window.localStorage.setItem("students", JSON.stringify(updatedStudents))

			resolve(newStudent)
		}, 1500)
	})
