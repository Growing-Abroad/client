export interface Contact {
  cdate: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  orgid: string;
  orgname: string;
  segmentio_id: string;
  bounced_hard: string;
  bounced_soft: string;
  bounced_date: string | null;
  ip: string;
  ua: string | null;
  hash: string;
  socialdata_lastcheck: string | null;
  email_local: string;
  email_domain: string;
  sentcnt: string;
  rating_tstamp: string | null;
  gravatar: string;
  deleted: string;
  anonymized: string;
  adate: string | null;
  udate: string;
  edate: string | null;
  deleted_at: string | null;
  created_utc_timestamp: string;
  updated_utc_timestamp: string;
  created_timestamp: string;
  updated_timestamp: string;
  created_by: string | null;
  updated_by: string | null;
  mpp_tracking: string;
  accountContacts: any[]; // Definir a tipagem correta depois
  links: ContactLinks;
  id: string;
  organization: string | null;
}

interface ContactLinks {
  bounceLogs: string;
  contactAutomations: string;
  contactData: string;
  contactGoals: string;
  contactLists: string;
  contactLogs: string;
  contactTags: string;
  contactDeals: string;
  deals: string;
  fieldValues: string;
  geoIps: string;
  notes: string;
  organization: string;
  plusAppend: string;
  trackingLogs: string;
  scoreValues: string;
  automationEntryCounts: string;
}

export interface ContactList {
  status: number;
  list: number;
  contact: string;
  sdate: string;
  udate: string | null;
  unsubreason: string;
  campaign: string | null;
  message: string | null;
  first_name: string;
  last_name: string;
  sourceid: number;
  unsubscribeAutomation: string | null;
  links: ContactListLinks;
  id: string;
}

interface ContactListLinks {
  automation: string;
  list: string;
  contact: string;
  form: string;
  autosyncLog: string;
  campaign: string;
  unsubscribeAutomation: string;
  message: string;
}
