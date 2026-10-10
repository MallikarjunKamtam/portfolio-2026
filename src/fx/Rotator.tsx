import { useEffect, useState } from 'react'

/** Typewriter that cycles through a list of words forever. */
export function Rotator({ words, speed = 70 }: { words: string[]; speed?: number }) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]

    if (!del && txt === word) {
      const t = setTimeout(() => setDel(true), 1700)
      return () => clearTimeout(t)
    }
    if (del && txt === '') {
      setDel(false)
      setI((n) => n + 1)
      return
    }

    const t = setTimeout(
      () => setTxt(del ? word.slice(0, txt.length - 1) : word.slice(0, txt.length + 1)),
      del ? speed / 2.2 : speed,
    )
    return () => clearTimeout(t)
  }, [txt, del, i, words, speed])

  return (
    <span className="rotator">
      {txt}
      <i className="caret" />
    </span>
  )
}
