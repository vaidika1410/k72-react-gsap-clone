import AgencySection1 from '../components/agency/AgencySection1'
import AgencySection2 from '../components/agency/AgencySection2'
import AgencySection3 from '../components/agency/AgencySection3'

const agency = () => {
  return (
    <div>
      <div className='h-[225vh]'>
        <AgencySection1 />
      </div>
      <AgencySection2 />
      <AgencySection3 />
    </div>
  )
}

export default agency