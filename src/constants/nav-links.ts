//#region Import
import type { IconType } from "@/types"

import FluentEmojiFlatCardIndexDividers from "~icons/fluent-emoji-flat/card-index-dividers"
import NotoV1ManStudentLightSkinTone from "~icons/noto-v1/man-student-light-skin-tone"
import TwemojiWomanTeacherLightSkinTone from "~icons/twemoji/woman-teacher-light-skin-tone"

import PATHS from "./paths"
//#endregion

type Navlink = {
	icon: IconType
	label: string
	to: string
}

const navLinks: Navlink[] = [
	{
		icon: NotoV1ManStudentLightSkinTone,
		label: "Students",
		to: PATHS.STUDENTS,
	},
	{
		icon: TwemojiWomanTeacherLightSkinTone,
		label: "Teachers",
		to: PATHS.TEACHERS,
	},
	{
		icon: FluentEmojiFlatCardIndexDividers,
		label: "Report Cards",
		to: PATHS.REPORTS,
	},
]

export default navLinks
