import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { defaultLangKey } from 'Data'
import { Loading } from 'Common/Loading'

export default () => {
  let ref
  let prevPath
  typeof window !== `undefined` ? (ref = window.document.referrer) : null
  if (!ref) {
    prevPath = `/${defaultLangKey}`
  } else {
    prevPath = new URL(window.document.referrer).pathname
  }
  useEffect(() => {
    navigate(prevPath)
  }, [prevPath])
  return <Loading />
}
