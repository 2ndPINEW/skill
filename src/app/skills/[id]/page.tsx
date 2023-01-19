import Link from 'next/link'

interface Params {
  id: string
}

export default function Skill ({ params }: { params: Params }) {
  return <>
    <Link href="/">top</Link>
    <div>{params.id}</div>
  </>
}
