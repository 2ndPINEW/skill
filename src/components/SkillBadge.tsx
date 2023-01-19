import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type SkillBadgeProp = {
  id: number
  children: ReactNode
} & Omit<LinkProps, 'href'>

export const SkillBadge = ({ id, children, ...props }: SkillBadgeProp) => {
  return (
    <Link href={`/skills/${id}`} {...props}>{children}</Link>
  )
}
