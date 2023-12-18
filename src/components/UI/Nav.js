import Link  from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
        <nav className='bg-transparent w-full p-9 text-center'>
            <div className='flex flex-col md:flex-row items-center md:items-end md:justify-between  md:gap-0 px-6 gap-4'>
            <Link href="/" className="txtDegradado text-3xl font-bold mt-3 md:mt-0">
                <Image src="/images/nav/geneLogo.png" alt="Logo de Génesis" width={50} height={150} />
            </Link>
            <div className='flex flex-row  gap-10 '>
                <Link  href="/equipo" className='font-medium text-lg '>
                    <p className='animacionTextoHover'>Equipo</p>
                </Link>
                <Link  href="/join" className='font-medium text-lg'>
                    <p  className='animacionTextoHover'>Rover</p>
                </Link>
                <Link  href="/sponsors" className='font-medium text-lg'>
                    <p  className='animacionTextoHover'>Eventos</p>
                </Link>
                <Link  href="/sponsors" className='font-medium text-lg'>
                    <p  className='animacionTextoHover'>Blog</p>
                </Link>
            </div>

            <div className='flex flex-row gap-6'>
            <Link href="/" className="">
                <Image src="/images/nav/insta.png" alt="Logo de Génesis" width={30} height={150} />
            </Link>
            <Link href="/" className="">
                <Image src="/images/nav/linkdn.png" alt="Logo de Génesis" width={30} height={150} />
            </Link>
            <Link href="/" className="">
                <Image src="/images/nav/tiktok.png" alt="Logo de Génesis" width={30} height={150} />
            </Link>
            </div>
            </div>
        </nav>
    );
};

export default Nav;
