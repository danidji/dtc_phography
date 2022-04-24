import { useState, useEffect } from "react";

interface DetectMobileWindowType {
  isMobile: boolean | null
}

const useDetectMobileWindow = (): DetectMobileWindowType => {
  const [isMobileWindow, setIsMobileWindow] = useState<DetectMobileWindowType>({
    isMobile: null
  })

  useEffect(() => {
    const detectSize = (): void => {
      if (window.innerWidth < 768) {
        setIsMobileWindow({ isMobile: true });
      } else {
        setIsMobileWindow({ isMobile: false })
      }
    }
    detectSize();
    window.addEventListener('resize', detectSize)
    return (): void => window.removeEventListener('resize', detectSize)
  }, [])

  return isMobileWindow
}

export default useDetectMobileWindow