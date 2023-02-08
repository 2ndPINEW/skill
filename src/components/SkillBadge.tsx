'use client'

import { skills } from "@/types/cms-types";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useEffect, useState } from "react";
import styles from './SkillBadge.module.scss'

type SkillBadgeProp = {
  content: skills<"get">;
} & Omit<LinkProps, "href">;

export const SkillBadge = ({ content, ...props }: SkillBadgeProp) => {
  function top (): string {
    if (dimensions.height === 0) return '-1000px'
    return `${dimensions.height - dimensions.height * content.like_rate}px`
  }
  function left (): string {
    if (dimensions.width === 0) return '-1000px'
    return `${dimensions.width * content.forte_rate}px`
  }

  const [dimensions, setDimensions] = useState({ 
    width: 0,
    height: 0
  })

  useEffect(() => {
    function handleResize() {
      window.setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  return (
    <Link
      href={`/skills/${content.id}`}
      {...props}
      style={{ top: top(), left: left() }}
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
