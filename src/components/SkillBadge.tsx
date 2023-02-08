import { skills } from "@/types/cms-types";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import styles from './SkillBadge.module.scss'

type SkillBadgeProp = {
  content: skills<"get">;
} & Omit<LinkProps, "href">;

export const SkillBadge = ({ content, ...props }: SkillBadgeProp) => {
  return (
    <Link href={`/skills/${content.id}`} {...props}>
      {content.logo_image ? (
        <Image
          src={content.logo_image.url}
          alt={content.label}
          width="30"
          height="30"
        ></Image>
      ) : (
        <div className={styles.text_label}>{content.label}</div>
      )}
    </Link>
  );
};
