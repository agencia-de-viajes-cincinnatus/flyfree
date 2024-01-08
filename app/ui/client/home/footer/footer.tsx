export default function Footer() {
  return (
    <footer className='bg-blue-500 mt-20 p-8 text-white'>
      <div className='flex justify-between'>
        <div className='flex space-x-4'>
          <p>About</p>
          <p>Policies</p>
          <p>Contact</p>
          <p>Feedback</p>
        </div>
        <div className='text-center'>
          <p>©️2023 Company Name</p>
          <p>Devs Name</p>
        </div>
      </div>
    </footer>
  );
}
