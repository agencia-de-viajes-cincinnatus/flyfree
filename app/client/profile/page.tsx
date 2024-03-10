'use client';
import Profile from '@/app/ui/client/profile/UserProfiler';
import HistoriTravelCardProfile from '@/app/ui/client/profile/travelHIstoriCardProfile';
import PreferensTravelCardProfile from '@/app/ui/client/profile/PreferensTravelCardProfile';
import MapProfile from '@/app/ui/client/profile/MapsProfile';
export default function ProfilePage() {
  return (
    <>
      <div className='flex'>
        <div className='m-4'>
          <Profile />
        </div>
        <div>
          <div
            className=' m-4 bg-gray-100 rounded-lg shadow-md p-6 h-[300px] w-[560px] overflow-y-auto'
            style={{ maxHeight: '50vh' }}
          >
            <h2 className='text-xl font-bold mb-4'>History Travels</h2>
            <HistoriTravelCardProfile />
          </div>
          <div
            className='  m-4  bg-gray-100 rounded-lg shadow-md p-6 h-[300px] w-[560px] overflow-y-auto'
            style={{ maxHeight: '50vh' }}
          >
            <h2 className='text-xl font-bold mb-4'>Preferens Travels</h2>
            <PreferensTravelCardProfile />
          </div>
        </div>
        <MapProfile />
      </div>
    </>
  );
}
