import { endPoints } from '@/pages/api/api'
import Link from 'next/link'

interface Params {
  id: string
}

export default async function Skill ({ params }: { params: Params }) {
  // get('skills', params.id)でできると思ったら出てこんかった
  const data = await endPoints.gets('skills', {
    ids: params.id
  })
  const content = data?.contents?.[0]

  function test(): string {
    if (!content) return ''
    if (content.forte_rate > 0.9) return 'チョットできる'
    if (content.forte_rate > 0.5) return 'なんもわからん'
    if (content.forte_rate > 0.1) return '完全に理解した'
    return '全くわからん'
  }

  return <>
    <div>{content?.label}{test()}</div>
    <Link href="/">スキルマップに戻る</Link>
  </>
}
