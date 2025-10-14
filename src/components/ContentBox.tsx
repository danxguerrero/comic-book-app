import Image from 'next/image';

export const ContentBox = ({content}: {content: {heading: string, description: string, image: string, imageAlt: string}}) => {
    return (
        <div className="flex min-h-[40vh] border">
        <div className="min-h-full w-full">
          <div className="flex flex-col md:flex-row h-full items-center mx-12 gap-4 md:gap-0">
            <div className="w-full md:w-1/2">
                <h2>{content.heading}</h2>
                <p>{content.description}</p>
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