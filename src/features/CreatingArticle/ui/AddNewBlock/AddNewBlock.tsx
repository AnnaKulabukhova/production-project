import { memo, useCallback } from 'react'
import { ArticleBlockType, CreatingBlockCode, CreatingBlockImage, CreatingBlockText } from '@/entities/Article'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { type ArticleBlocks } from '../../model/types/createArticleTypes'
import { v4 as uuidv4 } from 'uuid';
import { type ArticleCodeBlock, type ArticleImageBlock, type ArticleTextBlock } from '@/entities/Article/model/types/article'
import { DropdownArticle } from '../DropdownArticle/DropdownArticle'

interface AddNewBlockProps {
  className?: string
  blockArticles: ArticleBlocks
  setBlockArticles: (arr: ArticleBlocks) => void
}

const getBlockPlaceholder = (type: ArticleBlockType) => {
  const blocksPlaceholder: Record<ArticleBlockType, ArticleImageBlock | ArticleCodeBlock | ArticleTextBlock> = {
    [ArticleBlockType.Image]: { type: ArticleBlockType.Image, src: '', id: uuidv4(), title: '' },
    [ArticleBlockType.Code]: { type: ArticleBlockType.Code, code: '', id: uuidv4() },
    [ArticleBlockType.Text]: { type: ArticleBlockType.Text, title: '', id: uuidv4(), paragraphs: [] }
  }
  return blocksPlaceholder[type]
}

export const AddNewBlock = memo(({ className, blockArticles, setBlockArticles }: AddNewBlockProps) => {

  const handleChangeCode = (id: string, newCode: string) => {
    const updateBlockArticle = blockArticles.map(block => {
      if (block.type === ArticleBlockType.Code && block.id === id) {
        return { ...block, code: newCode }
      }
      return block
    })
    setBlockArticles(updateBlockArticle)
  }

  const handleChangeImage = (id: string, src: string) => {
    const updateBlockArticle = blockArticles.map(block => {
      if (block.type === ArticleBlockType.Image && block.id === id) {
        return { ...block, src }
      }
      return block
    })
    setBlockArticles(updateBlockArticle)
  }
  const handleChangeImageDescription = (id: string, description: string) => {
    const updateBlockArticle = blockArticles.map(block => {
      if (block.type === ArticleBlockType.Image && block.id === id) {
        return { ...block, title: description }
      }
      return block
    })
    setBlockArticles(updateBlockArticle)
  }

  const handleChangeText = (id: string, newParagraphs: string[]) => {
    const updateBlockArticle = blockArticles.map(block => {
      if (block.type === ArticleBlockType.Text && block.id === id) {
        return { ...block, paragraphs: newParagraphs }
      }
      return block
    })
    setBlockArticles(updateBlockArticle)
  }
  const handleChangeTextTitle = (id: string, title?: string,) => {
    const updateBlockArticle = blockArticles.map(block => {
      if (block.type === ArticleBlockType.Text && block.id === id) {
        return { ...block, title }
      }
      return block
    })
    setBlockArticles(updateBlockArticle)
  }

  const addBlock = useCallback((type: ArticleBlockType) => {
    setBlockArticles([...blockArticles, getBlockPlaceholder(type)])
  }, [blockArticles, setBlockArticles])

  return (
    <VStack max gap='16' >
      <VStack max gap='16'>
        {blockArticles.map((block, index) => {
          switch (block.type) {
            case ArticleBlockType.Image:
              return (
                <CreatingBlockImage
                  key={index}
                  description={block.title}
                  image={block.src}
                  onChangeDescription={(description) => handleChangeImageDescription(block.id, description)}
                  onChangeImage={(title) => handleChangeImage(block.id, title)}
                />
              );
            case ArticleBlockType.Code:
              return (
                <CreatingBlockCode
                  key={index}
                  value={block.code}
                  onChange={(newCode) => handleChangeCode(block.id, newCode)}
                />)
            case ArticleBlockType.Text:
              return (
                <CreatingBlockText
                  title={block.title}
                  key={index}
                  newText={block.paragraphs.join('\n')}
                  onChangeText={(newText) => handleChangeText(block.id, newText.split('\n'))}
                  onChangeTitle={(title) => handleChangeTextTitle(block.id, title)}
                />)
            default:
              return null;
          }
        })}
      </VStack>
      <DropdownArticle addBlock={addBlock} />
    </VStack>
  )
})