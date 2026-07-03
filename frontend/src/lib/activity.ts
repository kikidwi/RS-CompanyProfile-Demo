import api from "./api";

export type ActivityAction = 'CREATE' | 'UPDATE' | 'DELETE' | 'SYSTEM';

export async function logActivity(
  action: ActivityAction,
  moduleName: string,
  detail: string
) {
  try {
    await api.post('/activity-logs', {
      action,
      moduleName,
      detail
    });
  } catch (error) {
    console.error("Gagal mencatat log aktivitas:", error);
  }
};
