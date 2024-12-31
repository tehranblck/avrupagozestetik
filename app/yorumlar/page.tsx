import AskQuestionButton from '@/components/AskQuestionButton/AskQuestionButton'
import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import CommentCard from '@/components/Comment/CommentCard'
import Header from '@/components/Header/Header'
import { fetchComments } from '@/components/helpers/FetchComments'
import { fetchVideoDatas } from '@/components/helpers/FetchHomeVideos'
import { FetchSlider } from '@/components/helpers/FetchSlider'
import InfinitySlider from '@/components/slider/InfinitySlider'
import TripleVideo from '@/components/TripleVideos/TripleVideos'
import React from 'react'

const page = async () => {
    const yorumlar = await fetchComments()
    const yorums = yorumlar.data || []

    const Videos = await fetchVideoDatas()
    const sortedVideos = Videos.sort((a: any, b: any) => a.id - b.id);

    const FirstTripleVideo = sortedVideos.find((video: any) => video.id === 78);
    const SecondTripleVideo = sortedVideos.find((video: any) => video.id === 80);
    const ThirdTripleVideo = sortedVideos.find((video: any) => video.id === 82);

    const SliderItemReq = await FetchSlider()
    const items = SliderItemReq[0]?.sliderItem





    return (
        <div className='flex flex-col items-center'>
            <div className="bg-white rounded-lg pb-2 min-h-fit w-full">
                <Header isHomePage={false} />
                <div className='fixed top-28 rounded-lg z-50 w-full'>
                    <Button />
                </div>
            </div>
            <CategoriesText text1Classes='text-4xl mt-44' text1='Mutlu Danışan' text2='tablomuz' paragraph='Mutluluğunuz sevincimizdir' />
            <InfinitySlider items={items} />

            {FirstTripleVideo && <TripleVideo videos={FirstTripleVideo} />}
            <div className='flex flex-col w-full items-center gap-3  px-2'>
                {yorums[0] && <CommentCard comment={yorums[0]} />}
                {yorums[1] && <CommentCard comment={yorums[1]} />}
            </div>

            {SecondTripleVideo && <TripleVideo videos={SecondTripleVideo} />}
            <div className='flex flex-col gap-3 px-2'>
                {yorums[2] && <CommentCard comment={yorums[2]} />}
                {yorums[3] && <CommentCard comment={yorums[3]} />}
            </div>

            {ThirdTripleVideo && <TripleVideo videos={ThirdTripleVideo} />}
            <div className='flex flex-col gap-3 px-2'>
                {yorums[4] && <CommentCard comment={yorums[4]} />}
                {yorums[5] && <CommentCard comment={yorums[5]} />}
            </div>

            <AskQuestionButton />
        </div>
    )
}

export default page
