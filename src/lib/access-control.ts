import { PlanType, DivisionSlug } from '@prisma/client'

export const FREE_FLASHCARD_LIMIT = 20

export const FREE_MINI_EXAM_DIVISIONS: DivisionSlug[] = [
  DivisionSlug.TMC,
]

const TMC_PLANS: PlanType[] = [PlanType.MONTHLY, PlanType.FULL_ACCESS, PlanType.FULL_BUNDLE]
const ALL_DIVISIONS_PLANS: PlanType[] = [PlanType.FULL_BUNDLE]

export function canAccessDivision(plan: PlanType, division: DivisionSlug): boolean {
  if (division === DivisionSlug.TMC) {
    return TMC_PLANS.includes(plan)
  }
  return ALL_DIVISIONS_PLANS.includes(plan)
}

export function canAccessFlashcards(plan: PlanType, division: DivisionSlug): boolean {
  return canAccessDivision(plan, division)
}

export function canAccessMiniExams(plan: PlanType): boolean {
  return TMC_PLANS.includes(plan)
}

export function canAccessFullExams(plan: PlanType, division: DivisionSlug): boolean {
  return canAccessDivision(plan, division)
}

export function getFlashcardLimit(plan: PlanType, division: DivisionSlug): number | null {
  if (canAccessFlashcards(plan, division)) return null
  return FREE_FLASHCARD_LIMIT
}

export function isMiniExamFree(divisionSlug: DivisionSlug, examIndex: number): boolean {
  return divisionSlug === DivisionSlug.TMC && examIndex === 1
}

export function canUserAccessMiniExam(
  plan: PlanType,
  divisionSlug: DivisionSlug,
  examIndex: number
): boolean {
  if (canAccessDivision(plan, divisionSlug)) return true
  return isMiniExamFree(divisionSlug, examIndex)
}
