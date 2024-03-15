import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMedScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/*image and header*/}
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            {/**main */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/**headings */}
                <div className='md:-mt-20'>
                    {/**rel tag */}
                    <div className='relative'>
                        <div className='before:absolute '>
                            <img src={HomePageText} alt={'homepage text'} />
                        </div>
                    </div>
                    <p>
                        Unrivaled GYM. Unparalleled training fitness classes. World class studios to get the body shapes that you dream of. Get your dream body now!!
                    </p>
                </div>

                {/** buttons*/}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                    className='text-sm font-bold text-primary-500 underline  hover:text-secondary-500'
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)} 
                    href={`${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

            {/**img */}
            <div>
                <img src={HomePageGraphic} alt='homepageGraphic'/>
            </div>
        </div>

        {/**sponsors */}
        {isAboveMedScreen && (
            <div>
                <div>
                    <div>
                        <img src={SponsorForbes} alt='Forbes' />
                        <img src={SponsorFortune} alt='Fortune' />
                        <img src={SponsorRedBull} alt='RedBull' />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home