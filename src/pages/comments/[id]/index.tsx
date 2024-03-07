import GoBackButton from '@/components/GoBackButton';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface CommentsProps {
  data: {
    [key: string]: string | number; 
  }
}

export default function Comments({ data } : CommentsProps) {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
        {Object.entries(data).map(([key, value], index) => (
          <pre key={index}>   
            {key === 'body' ? (
              <>
                {`   ${key} : `}
                {(value as string).split('\n').map((line, index) => (
                  index === 0 ?
                    (<span key={index}>{line}<br/></span>) :
                    (<span key={index}>   {line}<br/></span>)
                ))}
              </>
            ) : `   ${key} : ${value}`}
          </pre>
        ))}
        {'}'}
      </div>
      <Link href="/" className='mt-[50px]'>
        <GoBackButton />
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<CommentsProps> = async(context : any) => {
  const jsonPlaceholder = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);

  const data = await res.json();

  if(Object.keys(data).length === 0 && data.constructor === Object) {
    return {
      redirect: {
        destination: '/emptyData',
        permanent: false,
      }
    }
  }

  return {
    props: {
      data: data
    }
  }
}