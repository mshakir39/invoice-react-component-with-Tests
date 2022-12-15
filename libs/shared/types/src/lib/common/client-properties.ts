
export enum ReferredFrom {
  ColdOutreach = "Cold_Outreach",
  ExistingRelationships = "Existing_Relationships",
  Other = "Other",
  WarmIntro = "Referrals_Warm_Introduction",
}

export const ReferredFromList = [
  [ReferredFrom.ColdOutreach, ReferredFrom.ColdOutreach.replace(/_/g, " ")],
  [
    ReferredFrom.ExistingRelationships,
    ReferredFrom.ExistingRelationships.replace(/_/g, " "),
  ],
  [ReferredFrom.Other, ReferredFrom.Other.replace(/_/g, " ")],
  [ReferredFrom.WarmIntro, ReferredFrom.WarmIntro.replace(/_/g, " ")],
];
