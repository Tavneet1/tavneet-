import AboutData from '@/HomePageComponents/AboutData';
import Footer from '@/HomePageComponents/Footer';
import FrontImage from '@/HomePageComponents/FrontImage';
import NavBar from '@/HomePageComponents/NavBar';
import Process from '@/HomePageComponents/Process';
import WhyChooseWe from '@/HomePageComponents/WhyChooseWe';

export default function Home() {

  return (
    <>
      <div className="">
        <section>
          <NavBar />
        </section>
        <section className=''>
          <FrontImage />
        </section>
        <section className='mt-16 md:mt-10  mb-12'>
          <WhyChooseWe />
        </section>
        <section className='mt-11 md:mt-12  mb-12'>
          <Process />
        </section>
        <section className='mt-10'>
          <AboutData />
        </section>
        <Footer/>
      </div>
    </>
  );
}
