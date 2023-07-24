import React from 'react'

type Props = {}

const Review = (props: Props) => {
    return (
        <div className='min-h-[650px] min-w-screen pt-[76px]'>
            {/* _Heading_ */}
            <div className='mx-auto mb-[58px]'>
                <h3 className='text-textHighlight mx-auto text-[2.25rem] font-fr tracking-[-0.04em] text-center font-semibold'>
                    What our teenpreneurs have to say
                </h3>
            </div>

            {/* Review */}
            <div className='max-w-[855px] max-h-fit relative mx-auto bg-white rounded-[1.25rem] px-[58px] py-[52px]'>
                <p className='text-text min-w-[739px] m-auto min-h-[280px] text-[1rem] font-inter tracking-[-0.04em] leading-[2rem] text-left'>
                    As an Aspiring Teenpreneur and Startup Enthusiast, I spent over  10,000 USD on a bootcamp &
                    summer program to only realize that existing entrepreneurship programs for teens only sell startup
                    dreams and never actually help teens to startup. I finally understood that starting a startup as a teen
                    is really challenging and near impossible as I don’t have any technical expertise in building a product.
                    Finally, when I was about to lose my hopes on building a platform that helps startups launch a
                    gamified waitlist, I came to know about Teenpreneur Fellowship through Julia Ma’am on LinkedIn and
                    I’m thankful for the entire team for believing me and making my dream come true. The fellowship
                    helped me receive funding credits and also connected me with a tech accelerator to help with
                    product development and today I’m so happy to anounce that we will be launching the beta version in
                    the next 3 months
                </p>
            </div>
        </div>
    )
}

export default Review