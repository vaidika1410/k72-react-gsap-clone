import React from 'react'

const AgencySection2 = () => {
  return (
    <div className='px-40'>
        <div className='flex gap-105 text-xl font-[lausanne-500]'>
            <h2>Expertise</h2>
            <ul>
                <li>Strategy</li>
                <li>Advertisement</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
            </ul>
        </div>
        <div className='text-xl font-[lausanne-500] flex gap-12 mt-40'>
            <p className='w-2/3'>
                Our projects are born in humility, grow in curiosity and live thanks to creativity in all its forms.
            </p>
            <p className='w-2/3'>
                Our creative process thrives in an environment where talent is encouraged to explode. Where we feel free to be the best version of ourselves.
            </p>
            <p className='w-3/5'>
                Our culture is openness to others. Period. The entire crew participates in building an agency we are proud of.
            </p>
        </div>
    </div>
  )
}

export default AgencySection2