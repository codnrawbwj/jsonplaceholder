import Link from 'next/link';

export default function Custom404() {
    return (
        <div className='flex flex-col justify-center items-center font-mono font-semibold h-screen'>
            <h1 className='text-[30px]'>We{'\''}ve got <span className='text-error-pink'>404</span> code here!</h1>
            <p className='text-[14px]'>Please check your URL!</p>
            <Link href={'/'}
                className='mt-5'>
                <button>{'<-'} Home</button>
            </Link>
        </div>
    )
}

export function getStaticProps() {
    console.log("getStaticProps");

    return {
        props: {
            data: 1,
        }
    }
}