import Link from 'next/link';

export default function Comments({ data } : any) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
        <div key={data.id}>
          <pre>   postId: {data.postId}</pre>
          <pre>   id: {data.id}</pre>
          <pre>   name: {data.name}</pre>
          <pre>   email: {data.email}</pre>
          <pre>   body:  {data.body.split('\n').map((line : number, index : number) => (
          <span key={index}>
            {index === 0 ? '  ' : '   '}{line}
            <br />
          </span>
        ))}</pre>
        </div>
        {'}'}
      </div>
      <Link href="/" className='mt-[50px] font-mono'><button>{'<--'} Go Back</button></Link>
    </div>
  )
}

export async function getServerSideProps(context : any) {
  const jsonPlaceholder = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);

  const data = await res.json();
  
  return {
    props: {
      data: data
    }
  }
}