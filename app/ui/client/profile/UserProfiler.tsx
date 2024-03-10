'use client';
import { useState, useEffect } from 'react';
import { fetchProfileData } from '@/app/lib/data';

import useDatauser from '@/app/hooks/useDataCookie';

function Profile() {
  const { user } = useDatauser();

  return (
    <div>
      <h1>Perfil</h1>
    </div>
  );
}

export default Profile;
