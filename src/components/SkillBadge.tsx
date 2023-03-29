'use client'

import { skills } from "@/types/cms-types";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useEffect, useState } from "react";
import styles from './SkillBadge.module.scss'

type SkillBadgeProp = {
  content: Pick<skills<"get">, 'id' | 'label' | 'like_rate' | 'forte_rate' | 'logo_image'>;
} & Omit<LinkProps, "href">;

export const SkillBadge = ({ content, ...props }: SkillBadgeProp) => {
  const [dimensions, setDimensions] = useState({ 
    top: 'calc(50vh - 100px)',
    left: 'calc(50vw - 140px)'
  })

  useEffect(() => {
    function top (): string {
      const height = window.innerHeight - 200
      return `${height - height * content.like_rate}px`
    }
    function left (): string {
      const width = window.innerWidth - 280
      return `${width * content.forte_rate}px`
    }

    function initPosition () {
      setDimensions({
        top: `${(window.innerHeight-200)/2}px`,
        left: `${(window.innerWidth-280)/2}px`
      })
    }
  
    function handleResize() {
      setDimensions({
        top: top(),
        left: left()
      })
    }

    initPosition()
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [content.forte_rate, content.like_rate])

  return (
    <Link
      href={`/skills/${content.id}`}
      {...props}
      style={{ top: dimensions.top, left: dimensions.left }}
      className={styles.host}
    >
      {content.logo_image ? (
        <Image
          src={content.logo_image.url}
          alt={content.label}
          width="36"
          height="36"
        ></Image>
      ) : (
        <div className={styles.text_label}>{content.label}</div>
      )}
    </Link>
  );
};
