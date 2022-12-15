export abstract class ACreateTeamMemberDto {
  employeeName!: string;
  role!: string;
  email!: string;
  phoneNumber!: string;
  weeklyTargetBillingHours!: number;
  vacationDayAllowance!: number;
  sickDayAllowance!: number;
  billingRate!: number;
  costRate!: number;
}
