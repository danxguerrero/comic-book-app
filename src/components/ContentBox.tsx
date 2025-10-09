import Image from 'next/image';

export const ContentBox = () => {
    return (
        <div className="flex min-h-[40vh] border">
        <div className="min-h-full w-full">
          <div className="flex h-full items-center mx-12">
            <div className="w-1/2">Upload your comics</div>
            <div className="w-1/2 h-full relative">
              <Image 
                src="/CU_Hero_image.png" 
                alt="ComicUnity" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    )
}