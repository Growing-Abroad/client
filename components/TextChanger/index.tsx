import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

interface TextChangerProps {
  /**
   * The texts property.
   * It should receive an array of translation keys.
   */
  texts: string[]

  /**
   * The duration property.
   * It should receive a duration number(in milliseconds).
   */
  duration: number
}

export const TextChanger = ({ texts, duration }: TextChangerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const intl = useIntl()

  const t = (id: string): string => {
    return intl.formatMessage({ id })
  };

  const textsTranslations = texts.map((texts) => {
    return t(`${texts}`)
  })

  const currentName = textsTranslations[currentIndex]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((oldIndex) => (oldIndex + 1) % textsTranslations.length)
    }, duration)

    return () => clearTimeout(timeout)
  }, [currentIndex, duration, textsTranslations.length])

  return (
    <div key={currentName} className="title-change">{currentName}</div>
  )
}
