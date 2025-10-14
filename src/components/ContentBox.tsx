import Image from 'next/image';

export const ContentBox = ({content}: {content: {heading: string, description: string, image: string, imageAlt: string}}) => {
    return (
        <div className="flex min-h-[40vh]">
        <div className="min-h-full w-full">
          <div className="flex flex-col md:flex-row h-full items-center md:mx-12 gap-4 md:gap-0">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-2/3">
                <h2 className="text-xl">{content.heading}</h2>
                <p className="text-center text-sm">{content.description}</p>
            </div>
            <div className="w-full md:w-1/2 h-full relative">
              <Image 
                src={content.image} 
                alt={content.imageAlt} 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    )
}