import { CSSProperties, memo, useMemo } from 'react'
import classes from './Avatar.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {

  const styleImage = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  return (
    <img style={styleImage} className={classNames(classes.avatar, {}, [className])} src={src} alt={alt} />

  )
})