import { isEmpty, isNil, sampleSize } from 'lodash'
import { useEffect, useState } from 'react'

import { Extension } from '@/types/extenion.types'

interface UseExtensions {
  loading: boolean
  extensions: Array<Extension>
  categories: Array<string>
  getRandomExtensions: (n: number, exclude?: string) => Array<Extension>
}

const ENDPOINT = process.env.NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT ?? ''

export const useExtensions = (): UseExtensions => {
  const [loading, setLoading] = useState(false)
  const [extensions, setExtensions] = useState<Array<Extension>>([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        fetch(ENDPOINT, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const typedData = data as Extension[]
            setExtensions(typedData)
            setLoading(false)
          })
      } catch (error) {
        setLoading(false)
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  const getRandomExtensions = (n: number, exclude?: string) => {
    return sampleSize(
      extensions
        .filter((ext) => ext.category !== 'Demo')
        .filter((ext) => {
          if (isEmpty(exclude) || isNil(exclude)) {
            return true
          }

          return ext.key !== exclude
        }),
      n
    )
  }

  return {
    loading,
    extensions: extensions.filter((ext) => ext.category !== 'Demo'),
    categories: extensions
      .map((ext) => ext.category)
      .filter((ext) => ext !== 'Demo')
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort(),
    getRandomExtensions,
  }
}
