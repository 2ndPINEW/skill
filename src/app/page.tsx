import styles from './page.module.scss'
import { SkillBadge } from '@/components/SkillBadge'
import { endPoints } from '@/pages/api/api'

export default async function Home() {
  const data = await endPoints.gets('skills', {
    limit: 100,
    fields: [
      'id',
      'label',
      'like_rate',
      'forte_rate',
      'logo_image'
    ]
  })
  const contents = data?.contents

  return (
    <main className={styles.main}>
      <div className={styles.axis_area}>
        <div className={`${styles.label} ${styles.label_love}`}>🥰</div>
        <div className={`${styles.label} ${styles.label_dislike}`}>😱</div>
        <div className={`${styles.label} ${styles.label_good_at}`}>😎</div>
        <div className={`${styles.label} ${styles.label_bad_at}`}>😓</div>
        <div className={`${styles.axis} ${styles.laxis}`}></div>
        <div className={`${styles.axis} ${styles.raxis}`}></div>
        <div className={`${styles.axis} ${styles.vaxis}`}></div>
      </div>
      <div className={styles.skill_area}>
        <div className={styles.skill_area_relative}>
          {
            contents?.map((content) => {
              return <SkillBadge key={content.id} content={content} />
            })
          }
        </div>
      </div>
    </main>
  )
}
