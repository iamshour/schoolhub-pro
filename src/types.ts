export declare type IconType = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement

export type Class = Record<"ClassId" | "GradeId" | "SectionName" | "TeacherId", string>

export type Grade = Record<"Grade" | "GradeId" | "GradeNumber", string>

/**
 * Common Identitifier type, used by both Students & Teachers
 */
export type PersonIndentity = Record<
	"address" | "city" | "country" | "dateOfBirth" | "firstName" | "lastName" | "middleName" | "phone",
	string
>
