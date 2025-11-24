import { Globe } from 'lucide-react';

const HomeFooter = () => {
  return (
    <div>
      <div>
         <Globe />
         
      </div>
      <div className='home-footer h-20 w-full text-white absolute bottom-0 uppercase text-8xl font-[lausanne-500] flex items-center justify-center gap-5'>
        <a href='/projects' className='w-max leading-17 pt-9 px-8 border-3 border-white rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]' to='/projects'>Projects</a>
        <a href='/agency' className='w-max leading-17 pt-9 px-8 border-3 border-white rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]' to='/agency'>Agency</a>
      </div>
    </div>
  )
}

export default HomeFooter