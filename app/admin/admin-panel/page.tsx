import React from 'react';
import AdminPanelDestination from '@/app/ui/admin/admin-panel/admin-panel-destination';
import AdminPanelReservation from '@/app/ui/admin/admin-panel/admin-panel-reservation';
export default function AdminPanelPage() {
  return (
    <div className='flex justify-center space-x-8'>
      <AdminPanelReservation />
      <AdminPanelDestination />
    </div>
  );
}
