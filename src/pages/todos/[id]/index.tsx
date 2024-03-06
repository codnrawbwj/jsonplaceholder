import Custom404 from '@/pages/404';
import Link from 'next/link';


export default function Todos({ data }) {

  if(!data) {
    return (
      <Custom404 />
    )
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
        <div key={data.id}>
          <pre>   userId: {data.userId}</pre>
          <pre>   id: {data.id}</pre>
          <pre>   title: {data.title}</pre>
          <pre>   completed: {data.completed === false ? 'false' : 'true'}</pre>
        </div>
        {'}'}
      </div>
    <Link href="/" className='mt-[50px] font-mono'><button>{'<--'} Go Back</button></Link>
    </div>
  )
}

export async function getServerSideProps(context) {
  const jsonPlaceholder = context.query;

  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);
  const data = await res.json()

  console.log(data);

  return {
    props: {
      data: data
    }
  }
}