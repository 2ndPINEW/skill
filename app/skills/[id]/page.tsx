interface Params {
  id: string
}

export default function Skill ({ params }: { params: Params }) {
  return <div>{params.id}</div>
}
