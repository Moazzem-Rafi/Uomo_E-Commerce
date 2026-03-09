import Images from '@/component/common/Images'
import React from 'react'
import womencollection from "@/assets/images/womencollection.png"
import mencollection from "@/assets/images/mencollection.png"
import kidcollection from "@/assets/images/kidscollection.png"

const Collection = () => {
  return (
    <>
    <section className='mt-[100px]'>
        <div className="container">
            <div className="grid grid-cols-2 gap-[30px]">
                <div className="">
                    <Images className={""} imgSrc={womencollection}/>
                </div>
                <div className="flex-wrap">
                    <div className="">
                        <Images className={""} imgSrc={mencollection}/>
                    </div>
                    <div className="flex mt-7.5 gap-7.5">
                        <Images className={""} imgSrc={kidcollection}/>
                        <Images className={""} imgSrc={kidcollection}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Collection