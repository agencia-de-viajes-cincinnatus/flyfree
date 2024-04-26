export default function FormHome() {
  return (
    <>
      <div className='flex items-center justify-center mt-20'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-10 text-yellow-500'>
            Speak with our team
          </h1>
        </div>
      </div>

      <form action='' className='flex justify-center'>
        <div className='mr-8'>
          <div className='mb-4'>
            <label
              htmlFor='field1'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='field1'
              name='field1'
              className='mt-1 p-2 w-full border rounded-md bg-gray-100'
            />
          </div>

          {/* Campo 2 */}
          <div className='mb-4'>
            <label
              htmlFor='field2'
              className='block text-sm font-medium text-gray-700'
            >
              Phone
            </label>
            <input
              type='text'
              id='field2'
              name='field2'
              className='mt-1 p-2 w-full border rounded-md bg-gray-100'
            />
          </div>

          {/* Campo 3 */}
          <div>
            <label
              htmlFor='field5'
              className='block text-sm font-medium text-gray-700'
            >
              Select One Service
            </label>
            <select className='mt-1 p-2 w-full border rounded-md bg-gray-100'>
              <option value='option1'>Opción 1</option>
              <option value='option2'>Opción 2</option>
              <option value='option3'>Opción 3</option>
              <option value='option4'>Opción 4</option>
              <option value='option5'>Opción 5</option>
            </select>
          </div>
        </div>

        {/* Segunda columna */}
        <div>
          {/* Campo 4 */}
          <div className='mb-4'>
            <label
              htmlFor='field4'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='text'
              id='field4'
              name='field4'
              className='mt-1 p-2 w-full border rounded-md bg-gray-100'
            />
          </div>

          {/* Campo 5 */}
          <div className='mb-4'></div>
          <label
            htmlFor='field3'
            className='block text-sm font-medium text-gray-700'
          >
            Address
          </label>
          <input
            type='text'
            id='field3'
            name='field3'
            className='mt-1 p-2 w-full border rounded-md bg-gray-100'
          />
          {/* Campo 6 */}
          <div>
            <label
              htmlFor='field6'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <input
              type='text'
              id='field6'
              name='field6'
              className='mt-1 p-2 w-full border rounded-md bg-gray-100'
            />
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className='px-4 py-2 bg-yellow-500 text-white rounded-md'
            >
              Request Info
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
