'use client'
import { skills } from "@/types/cms-types";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import styles from './SkillBadge.module.scss'

type SkillBadgeProp = {
  content: skills<"get">;
} & Omit<LinkProps, "href">;

export const SkillBadge = ({ content, ...props }: SkillBadgeProp) => {
  const padding = 64 * 2
  const height = window.innerHeight - padding
  const width = window.innerWidth - padding
  const top = `${height - height * content.like_rate}px`
  const left = `${width * content.forte_rate}px`
  return (
    <Link
      href={`/skills/${content.id}`}
      {...props}
      style={{ top, left }}
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
