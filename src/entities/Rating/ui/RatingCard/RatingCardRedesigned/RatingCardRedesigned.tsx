import { useTranslation } from 'react-i18next'
import type { RatingCardProps } from '../RatingCard'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { BrowserView, MobileView } from 'react-device-detect'
import { Input } from '@/shared/ui/redesigned/Input'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { useCallback, useState } from 'react'
import { StarRating } from '@/shared/ui/redesigned/StarRating'

export const RatingCardRedesigned = (props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel, rate = 0 } = props;
  const { t } = useTranslation();
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  return (
    <Card max padding='24' border='16' data-testid="RatingCard" className={className}>
      <VStack align="center" gap="16">
        <Text title={starsCount ? t('Thanks for the assessment') : title} />
        <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap="32" max>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Your feedback')} data-testid="RatingCard.Input" />
            <HStack gap="16" justify="end" max>
              <Button data-testid="RatingCard.Close" onClick={cancelHandler} variant={'outline'}>
                {t('Cancel')}
              </Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandler} variant={'outline'}>
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap="32" max>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Your feedback')} data-testid="RatingCard.Input" />
            <VStack gap="16" justify="end" max>
              <Button fullWight size={'l'} onClick={acceptHandler} variant={'outline'}>
                {t('Send')}
              </Button>
            </VStack>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
}