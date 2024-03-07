import GoBackButton from '@/components/GoBackButton';
import Link from 'next/link'

export default function User({ data } : any) {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        {'{'}
          <div key={data.id}>
            <pre>   id: {data.id}</pre>
            <pre>   name: {data.name}</pre>
            <pre>   username: {data.username}</pre>
            <pre>   email: {data.email}</pre>
            <pre>   address: {'{'}
                      {'\n\t\t'}
                      street: {data.address.street},
                      {'\n\t\t'}
                      suite: {data.address.suite},
                      {'\n\t\t'}
                      city: {data.address.city},
                      {'\n\t\t'}
                      zipcode: {data.address.zipcode},
                      {'\n\t\t'}
                      geo: {'{'} lat: {data.address.geo.lat}, lng: {data.address.geo.lng} {'}'}
                      {'\n\t\t'}
                      {'}'}
            </pre>
            <pre>   phone: {data.phone}</pre>
            <pre>   webiste: {data.website}</pre>
            <pre>   company: {'{'}
                      {'\n\t\t'}
                      name: {data.company.name},
                      {'\n\t\t'}
                      catchPhrase: {data.company.catchPhrase},
                      {'\n\t\t'}
                      bs: {data.company.bs}
                      {'\n\t\t'}
                    {'}'}
            </pre>
          </div>
          {'}'}
      </div>
      <Link href="/" className='mt-[50px] font-mono'>
        <GoBackButton />  
      </Link>
    </div>
  )
}

export async function getServerSideProps(context : any) {
  const jsonPlaceholder = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/${jsonPlaceholder.category}/${jsonPlaceholder.number}`);
  const data = await res.json();

  if(Object.keys(data).length === 0 && data.constructor === Object) {
    return {
      redirect: {
        destination : '/emptyData',
        permanant: false,
      }
    }
  }

  return {
    props:{
      data: data
    }
  }
}