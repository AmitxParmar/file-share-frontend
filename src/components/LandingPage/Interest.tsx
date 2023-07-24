import React from 'react'

type Props = {}

const Interest = (props: Props) => {
    return (
        <div className='h-full flex flex-col mobile:gap-5 text-black text-center w-full py-[5.3rem] mx-auto'>
            <h3 className="w-fit md:mb-12 mx-auto font-fr font-semibold text-4xl align-center text-textHighlight">
                Areas of interest
            </h3>
            <p className='capitalize m-auto max-w-[760px] text-[1.12rem] tracking-[-0.015em] font-inter leading-[2rem] relative text-text'>
                Think software, edtech, web3, creator economy, social media, HRtech, Artificial
                Intelligence, etc whatever the idea you might be having, we want to be the early believers
                of today’s ambitious teens
            </p>
        </div>
    )
}

export default Interest;