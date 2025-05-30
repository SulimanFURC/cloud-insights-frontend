export interface CloudServiceItem {
  label: string;
  value: string;
  icon: string; // FontAwesome icon class
}

export interface ProjectIdeaRequest {
  cloudProvider: string;
  experienceLevel: string;
  serviceList: string[];
  provider: string;
}