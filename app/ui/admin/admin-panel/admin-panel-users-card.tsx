export default function AdminPanelUsers() {
  const users = [
    {
      id: 1,
      name: 'Juan',
      email: 'yo@gmail.com',
    },
    {
      id: 2,
      name: 'Pedro',
      email: 'yo@gmail.com',
    },
    {
      id: 3,
      name: 'Maria',
      email: 'yo@gmail.com',
    },
    {
      id: 4,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 5,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 6,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 7,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 8,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 9,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 10,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 11,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 12,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 13,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 14,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 15,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 16,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
    {
      id: 17,
      name: 'Jose',
      email: 'yo@gmail.com',
    },
  ];

  return (
    <div className='bg-gray-100 rounded-lg shadow-md p-8 m-3'>
      <div className='bg-white rounded-lg p-12 w-100'>
        <h1 className='text-3xl font-bold'>Users List</h1>
        <div className='overflow-y-auto h-[300px] relative'>
          <div className='flex justify-end p-4 sticky top-0 bg-white z-10'>
            <input
              type='text'
              placeholder='Buscar...'
              className='border border-gray-300 p-2 rounded-md'
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
            {users.map((user) => (
              <div
                key={user.id}
                className='bg-white rounded-lg p-4 shadow-md relative'
              >
                <h2 className='text-xl font-semibold'>{user.name}</h2>
                <p className='text-sm'>{user.email}</p>

                {/* Barra de opciones */}
                <div className='absolute top-2 right-2 flex space-x-2'>
                  <select className='px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white'>
                    <option value=''>admin</option>
                    <option value=''>user</option>
                  </select>
                  <button
                    className='text-white bg-red-500 px-2 py-1 rounded'
                    type='button'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
