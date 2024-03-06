import Custom404 from '@/pages/404';
import Link from 'next/link';

interface TodosProps {
  data: {
    [key: string] : string | number | boolean,
  }
}


export default function Todos({ data } : TodosProps) {

  console.log(data)

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
        {Object.entries(data).map(([key, value], index) => (
            <pre key={index}>
            { key === 'completed' ?
              (<span>   {key} : { value === false ? 'false' : 'true' }</span>) :
              `   ${key} : ${value}`
            }  
            </pre>
          ))}
        {/* <div key={data.id}>
          <pre>   userId: {data.userId}</pre>
          <pre>   id: {data.id}</pre>
          <pre>   title: {data.title}</pre>
          <pre>   completed: {data.completed === false ? 'false' : 'true'}</pre>
        </div> */}
        {'}'}
      </div>
    <Link href="/" className='mt-[50px] font-mono'><button>{'<--'} Go Back</button></Link>
    </div>
  )
}

export async function getServerSideProps(context : any) {
  const jsonPlaceholder = context.query;

  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);
  const data = await res.json()

  if(Object.keys(data).length === 0 && data.constructor === Object) {
    return {
      redirect : {
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