import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PremiumCheckoutDodo from '@/components/PremiumCheckoutDodo';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const PremiumWrapper = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || '';

    if(!token) {
        redirect('/');
    }

  return (
    <>
      <Navbar />
      <div className='mt-[60px] md:mt-[80px] md:min-h-[calc(100vh-80px)] h-full text-black'>
        <PremiumCheckoutDodo token={token} />
      </div>
      <Footer />
    </>
  )
};

export default PremiumWrapper;