'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from '@/components/Header.module.scss'
import { Fade, Flex, Line, ToggleButton } from '@/core/components'

import { routes } from '@/app/resources'
import { about, work } from '@/app/resources/content'

type TimeDisplayProps = {
  timeZone: string
  locale?: string
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = 'en-US'
}) => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
      const timeString = new Intl.DateTimeFormat(locale, options).format(now)
      setCurrentTime(timeString)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [timeZone, locale])

  return <>{currentTime}</>
}

export default TimeDisplay

export const Header = () => {
  const pathname = usePathname() ?? ''

  return (
    <>
      <Fade hide='s' fillWidth position='fixed' height='80' zIndex={9} />
      <Fade
        show='s'
        fillWidth
        position='fixed'
        bottom='0'
        to='top'
        height='80'
        zIndex={9}
      />
      <Flex
        fitHeight
        className={styles.position}
        as='header'
        zIndex={9}
        fillWidth
        padding='8'
        horizontal='center'
      >
        <Flex fillWidth horizontal='center'>
          <Flex
            background='surface'
            border='neutral-medium'
            radius='m-4'
            shadow='l'
            padding='4'
            horizontal='center'
          >
            <Flex gap='4' vertical='center' textVariant='body-default-s'>
              {routes['/'] && (
                <ToggleButton
                  prefixIcon='home'
                  href='/'
                  selected={pathname === '/'}
                />
              )}
              <Line vert maxHeight='24' />
              {routes['/about'] && (
                <>
                  <ToggleButton
                    className='s-flex-hide'
                    prefixIcon='person'
                    href='/about'
                    label={about.label}
                    selected={pathname === '/about'}
                  />
                  <ToggleButton
                    className='s-flex-show'
                    prefixIcon='person'
                    href='/about'
                    selected={pathname === '/about'}
                  />
                </>
              )}
              {routes['/work'] && (
                <>
                  <ToggleButton
                    className='s-flex-hide'
                    prefixIcon='grid'
                    href='/work'
                    label={work.label}
                    selected={pathname.startsWith('/work')}
                  />
                  <ToggleButton
                    className='s-flex-show'
                    prefixIcon='grid'
                    href='/work'
                    selected={pathname.startsWith('/work')}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
