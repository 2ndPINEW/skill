'use client'
import { skills } from "@/types/cms-types";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";
import styles from './SkillBadge.module.scss'

type SkillBadgeProp = {
  content: skills<"get">;
} & Omit<LinkProps, "href">;

export const SkillBadge = ({ content, ...props }: SkillBadgeProp) => {
  function top () {
    const height = window.innerHeight - 200
    return `${height - height * content.like_rate}px`
  }
  function left () {
    const width = window.innerWidth - 280
    return `${width * content.forte_rate}px`
  }
  const [dimensions, setDimensions] = React.useState({ 
    top: top(),
    left: left()
  })
  React.useEffect(() => {
    function handleResize() {
      window.setTimeout(() => {
        setDimensions({
          top: top(),
          left: left()
        })
      })
    }
    window.addEventListener('resize', handleResize)
  })

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
          width="32"
          height="32"
        ></Image>
      ) : (
        <div className={styles.text_label}>{content.label}</div>
      )}
    </Link>
  );
};
