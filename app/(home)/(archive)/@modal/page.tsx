
export default function SimpleModal() {

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-modalBackgroundColor'>
      <div className='w-[800px] h-[600px] rounded-[20px] bg-white'>
        모달
      </div>
    </div>
  )
}