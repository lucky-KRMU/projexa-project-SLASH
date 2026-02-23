import React from 'react'

const LoginPage = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-[#87b9ff] p-4'>

      <div className='relative w-full max-w-5xl h-150 bg-linear-to-br from-[#0047ab] to-[#002147] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center '>
      
      <div className='absolute top-10 left-10 w-32 h-32 bg-blue-400 opacity-20 blur-3xl rounded-full'></div>

      <div className='absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 opacity-10 blur-3xl rounded-full'></div>

      <div className='relative z-10 w-full max-w-md p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl'>
      
      <div className='text-white mb-8'>
        <p className='text-sm font-light opacity-80 uppercase'>Schũtzen</p>
        <h1 className='text-4xl font-bold'>Login</h1>
      </div>
      <form className='space-y-4'>
        <div>
          <label className='block mb-1 text-white text-sm ml-1'>Email</label>
          <input type="email" placeholder='username@gmail.com'className='w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition' />
        </div>



      </form>
      
      </div>

      </div>


    </div>
  )
}

export default LoginPage