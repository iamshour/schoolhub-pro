//#region Import
import DataTable from "@/components/ui/data-table"

import type { Student } from "./types"

import studentsTableColumns from "./constants/columns"
//#endregion

const data: Student[] = [
	{
		address: "218 Dover Street, 5686",
		city: "Conestoga",
		classId: "663b7e3859f43e8c75edce4f",
		country: "Saudi Arabia",
		dateOfBirth: new Date("2004-11-02T04:09:16-02:00"),
		firstName: "Castro",
		lastName: "Branch",
		middleName: "Harding",
		phone: "+961 81042123",
		studentId: "663b7e38c1844cf13ac185e3",
	},
	{
		address: "858 Marconi Place, 5062",
		city: "Lookingglass",
		classId: "663b7e3843c50e71179dda96",
		country: "Malaysia",
		dateOfBirth: new Date("2000-03-21T06:01:53-02:00"),
		firstName: "Malone",
		lastName: "Guerra",
		middleName: "Valeria",
		phone: "+961 98350734",
		studentId: "663b7e38c9a89bb5509cab59",
	},
	{
		address: "987 Hendrickson Place, 1644",
		city: "Echo",
		classId: "663b7e38fbeb61f57f9a5603",
		country: "Saint Lucia",
		dateOfBirth: new Date("2004-03-20T11:27:34-02:00"),
		firstName: "Kelly",
		lastName: "Boone",
		middleName: "Snow",
		phone: "+961 90756333",
		studentId: "663b7e380c61140ba034f34a",
	},
]

const StudentsRoute = () => {
	// Will use JSON-SERVER here to fetch data -- probably with RTK-Query!

	return <DataTable columns={studentsTableColumns} data={data} />
}

export default StudentsRoute
