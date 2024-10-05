import { memo, useState } from 'react';
import classes from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import starIcon from './../../assets/icons/starRating.svg';
import { Icon } from '../Icon';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

export const StarRating = memo(({ className, onSelect, size = 30, selectedStars = 0 }: StarRatingProps) => {
  const stars = [1, 2, 3, 4, 5];
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  return (
    <div className={classNames(classes.starRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          className={classNames(classes.starIcon, { [classes.selected]: isSelected }, [
            currentStarsCount >= star ? classes.hover : classes.normal,
          ])}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(star)}
          onClick={onClick(star)}
          Svg={starIcon}
          key={star}
          width={size}
          height={size}
          data-testid={`StarRating.${star}`}
          data-selected={currentStarsCount >= star}
        />
      ))}
    </div>
  );
});
