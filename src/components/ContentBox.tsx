import Image from 'next/image';
import clsx from 'clsx';

export const ContentBox = ({content, boxKey}: {content: {heading: string, description: string, image: string, imageAlt: string}, boxKey: number}) => {
    const isEven = boxKey % 2 === 0;
    const textFirst = isEven; // Even keys: text first, Odd keys: image first
    
    return (
        <div className="py-16 px-4 md:py-24 md:px-8">
          <div className={clsx("flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto", {'md:flex-row-reverse' : textFirst})}>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {content.heading}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {content.description}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-80 md:h-96 lg:h-[500px]">
              <Image 
                src={content.image} 
                alt={content.imageAlt} 
                fill
                className="object-cover object-center rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
    )
}