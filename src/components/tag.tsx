import Link from "next/link"

interface TagProp {
  id: number
  name: string
}

export const Tag = ({ prop }: { prop: TagProp }) => {
  return (
    <Link href={`/skills/${prop.id}`}>{prop.name}</Link>
  )
}