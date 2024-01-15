import { FaPhone, FaStopwatch } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import LocationCard from '../../../components/LocationCard/LocationCard';
import { CiLocationOn } from 'react-icons/ci';
const OurLocation = () => {
  return (
    <section className="my-20">
      <SectionTitle heading="OUR LOCATION" subHeading="Visit Us"></SectionTitle>

      <div className="mt-12 grid grid-cols-1 px-5 lg:px-32 md:grid-cols-3 gap-10">
        <LocationCard icon={<FaPhone />} title="phone" info="+8801403406419" />
        <LocationCard
          icon={<CiLocationOn />}
          title="ADDRESS"
          info="Gazipur , Dhaka"
        />
        <LocationCard
          icon={<FaStopwatch />}
          title="WORKING HOURS"
          info="Sat to Friday - 10 AM to 10 PM"
        />
      </div>
    </section>
  );
};

export default OurLocation;
