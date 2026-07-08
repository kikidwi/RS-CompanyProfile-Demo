/**
 * Role-Based Permission Configuration
 * 
 * Defines which admin modules each role can access.
 */

export type UserRole = 'super_admin' | 'admin' | 'humas';

export type AdminModule = 
  | 'dashboard'
  | 'profil'
  | 'dokter'
  | 'layanan'
  | 'promosi'
  | 'informasi'         // Full informasi (semua tab)
  | 'informasi.berita'  // Hanya berita/artikel
  | 'informasi.alur'
  | 'informasi.penting'
  | 'pengaturan'
  | 'pengaturan.pengguna';

/**
 * Permission map: role → list of accessible modules
 */
const ROLE_PERMISSIONS: Record<UserRole, AdminModule[]> = {
  super_admin: [
    'dashboard',
    'profil',
    'dokter',
    'layanan',
    'promosi',
    'informasi',
    'informasi.berita',
    'informasi.alur',
    'informasi.penting',
    'pengaturan',
    'pengaturan.pengguna',
  ],
  admin: [
    'dashboard',
    'profil',
    'dokter',
    'layanan',
    'promosi',
    'informasi',
    'informasi.berita',
    'informasi.alur',
    'informasi.penting',
    'pengaturan',
  ],
  humas: [
    'dashboard',
    'informasi',
    'informasi.berita',
  ],
};

/**
 * Check if a role can access a specific module.
 */
export function canAccess(role: string | null, module: AdminModule): boolean {
  if (!role) return false;
  const permissions = ROLE_PERMISSIONS[role as UserRole];
  if (!permissions) return false;
  return permissions.includes(module);
}

/**
 * Get human-readable label for a role.
 */
export function getRoleLabel(role: string | null): string {
  switch (role) {
    case 'super_admin': return 'Super Admin';
    case 'admin': return 'Admin';
    case 'humas': return 'Humas';
    default: return 'Unknown';
  }
}
