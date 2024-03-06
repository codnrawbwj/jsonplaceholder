import Link from 'next/link';

interface PhotosProps {
  data: {
    [key : string] : string | number,
  }
}

export default function Photos({ data } : PhotosProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
        {Object.entries(data).map(([key, value], index) => (
          <pre key={index}>   {key}: {value}</pre>
        ))}
{/* 
        <div key={data.id}>
          <pre>   albumId: {data.albumId}</pre>
          <pre>   id: {data.id}</pre>
          <pre>   title: {data.title}</pre>
          <pre>   url: {data.url}</pre>
          <pre>   thumbnailUrl: {data.thumbnailUrl}</pre>
        </div> */}
        {'}'}
      </div>
      <Link href="/" className='mt-[50px] font-mono'><button>{'<--'} Go Back</button></Link>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const jsonPlaceholder = context.query;
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);
  const data = await res.json();

  if(Object.keys(data).length === 0 && data.constructor === Object) {
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