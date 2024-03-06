import Link from 'next/link';

export default function Comments({ data } : any) {

  console.log(data);

  console.log(data.body.split('\n')[0])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
        {Object.entries(data).map(([key, value], index) => (
          <pre key={index}>   
            {key === 'body' ? (
              <>
                {`   ${key} : `}
                {value.split('\n').map((line, index) => (
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
      <Link href="/" className='mt-[50px] font-mono'><button>{'<--'} Go Back</button></Link>
    </div>
  )
}

export async function getServerSideProps(context : any) {
  const jsonPlaceholder = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);

  const data = await res.json();
  
  console.log(Object.keys(data));

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

        {/* <div key={data.id}>
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
        </div> */}