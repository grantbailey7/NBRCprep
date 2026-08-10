import { PlanType, DivisionSlug } from '@prisma/client'

export const FREE_MINI_EXAM_DIVISIONS: DivisionSlug[] = [
  'TMC' as DivisionSlug,
  'NPS' as DivisionSlug,
  'ACCS' as DivisionSlug,
  'SDS' as DivisionSlug,
  'CPFT' as DivisionSlug,
  'RPFT' as DivisionSlug,
]

const TMC_PLANS: PlanType[] = [PlanType.MONTHLY, PlanType.FULL_ACCESS, PlanType.FULL_BUNDLE]
const ALL_PAID: PlanType[] = [PlanType.MONTHLY, PlanType.FULL_ACCESS, PlanType.FULL_BUNDLE]

function hasPaidAccess(plan: PlanType, divisionSlug: DivisionSlug): boolean {
  if (plan === PlanType.FULL_BUNDLE) return true
  if (divisionSlug === 'TMC' && TMC_PLANS.includes(plan)) return true
  return false
}

export function canAccessFlashcards(plan: PlanType, divisionSlug: DivisionSlug): boolean {
  return hasPaidAccess(plan, divisionSlug)
}

export function canUserAccessMiniExam(
  plan: PlanType,
  divisionSlug: DivisionSlug | string,
  examIndex: number
): boolean {
  if (hasPaidAccess(plan, divisionSlug as DivisionSlug)) return true
  if (examIndex === 1) return true
  return false
}

export function canAccessFullExams(plan: PlanType, divisionSlug: DivisionSlug): boolean {
  return hasPaidAccess(plan, divisionSlug)
}
