import GoBackButton from '@/components/goBackButton';
import Link from 'next/link'

interface AlbumsProps {
  data: {
    [key: string] : string | number;
  }
}

export default function Albums({ data } : AlbumsProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div>
      {'{'}
      {Object.entries(data).map(([key, value], index) => (
        <pre key={index}>   {key}: {value}</pre>
      ))}
      {/* <div key={data.id}>
        <pre>   userId: {data.userId}</pre>
        <pre>   id: {data.id}</pre>
        <pre>   title: {data.title}</pre>
      </div> */}
      {'}'}
    </div>
    <Link href="/" className='mt-[50px] font-mono'>
      <GoBackButton />
    </Link>
  </div>
  )
}

export async function getServerSideProps(context: any) {
  const jsonPlaceholder = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);
  const data = await res.json()

  if (Object.keys(data).length === 0 && data.constructor === Object) {
    return {
      redirect: {
        destination: '/emptyData',
        permanant: false,
      }
    }
  }

  return {
    props: {
      data: data
    }
  }
}