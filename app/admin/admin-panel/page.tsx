import React from 'react';
import AdminPanelDestination from '@/app/ui/admin/admin-panel/admin-panel-destination';
import AdminPanelReservation from '@/app/ui/admin/admin-panel/admin-panel-reservation';
import AdminPanelUsers from '@/app/ui/admin/admin-panel/admin-panel-users';
export default function AdminPanelPage() {
  return (
    <>
      <div>
        {/* AdminPanelUsers arriba y con ancho completo */}
        <AdminPanelUsers />

        {/* AdminPanelReservation y AdminPanelDestination debajo y en paralelo */}

        <div className='flex flex-row'>
          <AdminPanelReservation />
          <AdminPanelDestination />
        </div>
      </div>
    </>
  );
}
