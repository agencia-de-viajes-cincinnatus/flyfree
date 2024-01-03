import React from 'react';
import AdminPanelDestination from '@/app/ui/admin/admin-panel/admin-panel-destination-card';
import AdminPanelReservation from '@/app/ui/admin/admin-panel/admin-panel-reservation-card';
import AdminPanelUsers from '@/app/ui/admin/admin-panel/admin-panel-users-card';
export default function AdminPanelPage() {
  return (
    <>
      <div>
        <AdminPanelUsers />
        <AdminPanelReservation />
        <AdminPanelDestination />
      </div>
    </>
  );
}
