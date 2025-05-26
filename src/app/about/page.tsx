import { baseURL } from '@/app/resources'
import { about, person, social } from '@/app/resources/content'
import TableOfContents from '@/components/about/TableOfContents'
import styles from '@/components/about/about.module.scss'
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text
} from '@/core/components'
import { differenceInMonths, differenceInYears } from 'date-fns'

export async function generateMetadata() {
  const title = about.title
  const description = about.description
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: []
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company)
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name)
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title)
    }
  ]

  const getExp = () => {
    const today = new Date()
    const startDate = new Date(2021, 0, 1)
    let years = differenceInYears(today, startDate)
    console.log(years)

    let months = differenceInMonths(
      today,
      new Date(
        startDate.getFullYear() + years,
        startDate.getMonth(),
        startDate.getDate()
      )
    )
    return `${years} years ${months} months`
  }

  return (
    <Column maxWidth='m'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              '@type': 'Organization',
              name: about.work.experiences[0].company || ''
            }
          })
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left='0'
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          position='fixed'
          paddingLeft='24'
          gap='32'
          hide='s'
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection='column' horizontal='center'>
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth='160'
            paddingX='l'
            paddingBottom='xl'
            gap='m'
            flex={3}
            horizontal='center'
          >
            <Avatar src={person.avatar} size='xl' />
            <Flex gap='8' vertical='center'>
              <Icon onBackground='accent-weak' name='globe' />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap='8'>
                {person.languages.map((language, index) => (
                  <Tag key={index} size='l'>
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight='160'
            vertical='center'
            marginBottom='32'
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border='brand-alpha-medium'
                className={styles.blockAlign}
                style={{
                  backdropFilter: 'blur(var(--static-space-1))'
                }}
                background='brand-alpha-weak'
                radius='full'
                padding='4'
                gap='8'
                marginBottom='m'
                vertical='center'
              >
                <Icon
                  paddingLeft='12'
                  name='calendar'
                  onBackground='brand-weak'
                />
                <Flex paddingX='8'>Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border='rounded'
                  variant='secondary'
                  icon='chevronRight'
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant='display-strong-xl'>
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant='display-default-xs'
              onBackground='neutral-weak'
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop='20'
                paddingBottom='8'
                gap='8'
                wrap
                horizontal='center'
                fitWidth
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <>
                        <Button
                          className='s-flex-hide'
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size='s'
                          variant='secondary'
                        />
                        <IconButton
                          className='s-flex-show'
                          size='l'
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant='secondary'
                        />
                      </>
                    )
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant='body-default-l'
              fillWidth
              gap='m'
              marginBottom='xl'
            >
              I’m {person.firstName} {person.lastName}, a {person.role} with
              over {getExp()} years of experience across UX, interaction design,
              front-end development, and content strategy. I'm currently working
              at Schrödinger where I lead the design for LiveDesign and Maestro
              – platforms used for computational chemistry and drug discovery.
              <br />
              <br />
              Previously, I worked as a UX Researcher and Designer at Arizona
              State University and interned at Ourdate, where I streamlined
              information architecture and user flows. My journey also includes
              front-end development at Deloitte where I built web pages and
              campaign tools with HTML, CSS, and JavaScript on Salesforce
              Marketing Cloud.
              <br />
              <br />
              I specialize in end-to-end product design, usability testing,
              design systems, and research. Tools I use include Figma, Adobe XD,
              Sketch, Zeplin, HTML/CSS, JavaScript, and more. I've designed for
              enterprise platforms, B2B SaaS tools, marketing dashboards, and
              educational apps in agile teams.
              <br />
              <br />
              I’m a curious, self-driven designer who also loves writing,
              history, books, and travel. I thrive in collaborative environments
              and enjoy solving complex problems through user-centered design.
              {/* I'm a full-stack developer with  of experience building
              seamless digital experiences that blend design and technology. I
              craft intuitive, pixel-perfect user interfaces backed by
              high-performance, AI-driven backends. My expertise spans frontend
              and backend development, UX/UI design, and cutting-edge AI/LLM
              applications—turning complex challenges into elegant, scalable
              solutions.
              <br />
              <br />
              When I’m not coding, I enjoy sketching and painting, finding fresh
              inspiration for my work through creativity and exploration. */}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading
                as='h2'
                id={about.work.title}
                variant='display-strong-s'
                marginBottom='m'
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap='l' marginBottom='40'>
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Flex
                      fillWidth
                      horizontal='space-between'
                      vertical='end'
                      marginBottom='4'
                    >
                      <Text id={experience.company} variant='heading-strong-l'>
                        {experience.company}
                      </Text>
                      <Text
                        variant='heading-default-xs'
                        onBackground='neutral-weak'
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant='body-default-s'
                      onBackground='brand-weak'
                      marginBottom='m'
                    >
                      {experience.role}
                    </Text>
                    <Column as='ul' gap='16'>
                      {experience.achievements.map(
                        (achievement: JSX.Element, index: number) => (
                          <Text
                            as='li'
                            variant='body-default-m'
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop='m' paddingLeft='40' wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border='neutral-medium'
                            radius='m'
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius='m'
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as='h2'
                id={about.studies.title}
                variant='display-strong-s'
                marginBottom='m'
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap='l' marginBottom='40'>
                {about.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap='4'
                  >
                    <Text id={institution.name} variant='heading-strong-l'>
                      {institution.name}
                    </Text>
                    <Flex
                      fillWidth
                      horizontal='space-between'
                      vertical='end'
                      marginBottom='4'
                    >
                      <Text
                        variant='body-default-m'
                        onBackground='neutral-weak'
                      >
                        {institution.description}
                      </Text>
                      <Text
                        variant='heading-default-xs'
                        onBackground='neutral-weak'
                      >
                        {institution.timeframe}
                      </Text>
                    </Flex>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as='h2'
                id={about.technical.title}
                variant='display-strong-s'
                marginBottom='40'
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap='l'>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap='4'>
                    <Text variant='heading-strong-l'>{skill.title}</Text>
                    <Text variant='body-default-m' onBackground='neutral-weak'>
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop='m' gap='12' wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border='neutral-medium'
                            radius='m'
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius='m'
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  )
}
