import { getServerSideProps } from "next/dist/build/templates/pages";
import { useRouter } from "next/router"


const Photos = () => {

  const router = useRouter();
  const { category, number } = router.query

  return (
    <div>
      <div>{category}</div>
      <div>{number}</div>
    </div>
  )
}

export default Photos

// export default getServerSideProps =