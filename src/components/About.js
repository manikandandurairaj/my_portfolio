import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Manikandan Duaraiaj. I am a Dedicated Full-Stack Developer with extensive experience in designing, developing, testing, and deploying applications using Node.js and React Native.',
        line2: 'Proven ability to collaborate with cross-functional teams to deliver high-quality, scalable solutions while ensuring optimal performance and security.',
        line3: 'Strong background in code reviews and troubleshooting, committed to maintaining coding standards and best practices.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}