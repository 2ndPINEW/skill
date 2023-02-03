import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import { SkillBadge } from '@/components/SkillBadge'
import { endPoints } from '@/pages/api/api'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await endPoints.gets('skills')
  const contents = data?.contents

  return (
    <main className={styles.main}>
      {
        contents?.map((content) => {
          return <SkillBadge key={content.id} id={content.id}>{content.label}</SkillBadge>
        })
      }

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
    </main>
  )
}
