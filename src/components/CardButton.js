import Link from 'next/link';

const CardButton = ({id}) => {
  return (
    <Link href={`/movie/${id}`}>Ver</Link>
  )
}

export default CardButton