/* eslint-disable @next/next/no-img-element */
import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { LinkCardIcon } from '@/components/link-card-icon';
import { LinkCardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { DiscordPartnerIcon } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { FaBirthdayCake, FaDiscord, FaGithub, FaLocationArrow, FaSteam, FaTwitter, FaUserGraduate, FaXbox, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='container py-6 space-y-6 lg:my-10'>
      <FadeUpStagger>
        <div className='h-16 flex items-center justify-end'>
          <ThemeToggle/>
        </div>
        <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
          <FadeUpDiv className='col-span-12 lg:col-span-4 row-span-3 space-y-5 md:space-y-7 lg:space-y-8'>
            <img className='w-[150px] lg:w-[200px] pointer-events-none rounded-full shadow-xl' src='/icons/nonick.png' alt="nonick's avatar"/>
            <section>
              <h1 className='text-3xl lg:text-4xl font-black'>Okakajp</h1>
              <h2 className='text-muted-foreground text-lg lg:text-xl'>にわかプログラマー</h2>
            </section>
            <div className='grid gap-1'>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaBirthdayCake/>
                <p>200X年02月25日</p>
              </div>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaLocationArrow/>
                <p>日本 / Japan</p>
              </div>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaUserGraduate/>
                <p>学生</p>
              </div>
            </div>
          </FadeUpDiv>
          <LinkCard 
            className='col-span-12 md:col-span-6 lg:col-span-4 hover:border-youtube p-6'
            href='https://youtube.com/@okakajp'
            isGrid
          >
            <LinkCardIcon className='bg-youtube'>
              <FaYoutube size={25}/>
            </LinkCardIcon>
            <LinkCardName name='YouTube' id='@okakajp'/>
          </LinkCard>
          <LinkCard
            className='col-span-6 md:col-span-3 lg:col-span-2 hover:border-twitter p-6'
            href='https://twitter.com/okakajp25'
            isGrid
          >
            <LinkCardIcon className='bg-twitter'>
              <FaTwitter size={25}/>
            </LinkCardIcon>
            <LinkCardName name='Twitter' id='@okakajp25'/>
          </LinkCard>
          <LinkCard
            className='col-span-6 md:col-span-3 lg:col-span-2 hover:border-discord p-6'
            href='https://discord.gg/fbUhAxTAHx'
            isGrid
          >
            <LinkCardIcon className='bg-discord'>
              <FaDiscord size={25}/>
            </LinkCardIcon>
            <LinkCardName name='Discord' id='@okakajp25'>
            </LinkCardName>
          </LinkCard>
          <FadeUpCard className='grid gap-3 col-span-6 md:col-span-3 lg:col-span-2 hover:border-xbox p-6'>
            <LinkCardIcon className='bg-xbox'>
              <FaXbox size={25}/>
            </LinkCardIcon>
            <LinkCardName name='Xbox' id='Okakajp'/>
          </FadeUpCard>
          <LinkCard
            className='grid gap-3 md:col-span-3 col-span-6 lg:col-span-2 hover:border-steam p-6'
            href='https://steamcommunity.com/id/okakajp/'
          >
            <LinkCardIcon className='bg-steam'>
              <FaSteam size={25}/>
            </LinkCardIcon>
            <LinkCardName name='Steam' id='Okakajp'/>
          </LinkCard>
          <LinkCard
            className='flex justify-between col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-gray-500 p-6'
            href='https://github.com/Okakajp25'
          >
            <div className='grid gap-3'>
              <LinkCardIcon className='bg-github'>
                <FaGithub size={25}/>
              </LinkCardIcon>
              <LinkCardName name='GitHub' id='@okakajp25'/>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <img className='w-8 h-8' src='/programLangs/JavaScript.svg' alt='javascript'/>
              <img className='w-8 h-8' src='/programLangs/TypeScript.svg' alt='typescript'/>
            </div>
          </LinkCard>
          <LinkCard
          className='grid gap-3 col-span-6 md:col-span-3 lg:col-span-2 hover:border-xbox p-6'
          href='https://qiita.com/okakajp_25'
          >
            <img
            className='w-10 h-10 rounded-2x1'
            src='/icons/qiita.png'
            alt='qitta'
            />
            <LinkCardName name='okaka qiita' id='okaka qiita' />
          </LinkCard>
          <LinkCard
          className='grid gap-3 col-span-6 md:col-span-3 lg:col-span-2 hover:border-xbox p-6'
          href='https://note.com/okakajp_25'
          >
            <img
            className='w-10 h-10 rounded-2x1'
            src='/icons/note.png'
            alt='qitta'
            />
            <LinkCardName name='okaka note' id='okaka note' />
          </LinkCard>
          <LinkCard
            className='col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-gray-500 p-6'
            href='https://servers.okakaservice.com'
            isGrid
          >
            <img
            className='w-10 h-10 rounded-2x1'
            src='/icons/IMG_8726.png'
            alt='okaka server list'
            />
            <LinkCardName name='自分が少しでも携わっているサーバー' id='自分が少しでも携わっているサーバーのリストです' />
          </LinkCard>
        </div>
      </FadeUpStagger>
    </main>
  )
}
