import Image from 'next/image';

export const ContentBox = () => {
    return (
        <div className="flex min-h-[40vh] border">
        <div className="min-h-full w-full">
          <div className="flex flex-col md:flex-row h-full items-center mx-12 gap-4 md:gap-0">
            <div className="w-full md:w-1/2">
                <h2>Upload your comics</h2>
                <p>Share your creations with the comic community</p>
            </div>
            <div className="w-full md:w-1/2 h-full relative">
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