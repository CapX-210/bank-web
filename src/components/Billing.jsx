import {apple,bill,google} from '../assets'
import styles,{layout} from '../style'


const Billing = () => {
  return (
    <section id="products" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='z-[5] w-full h-full relative'/>
        <div className='absolute z-[3] w-[50%] h-[50%] top-0
        -left-1/2 white__gradient rounded-full'/>
         <div classNdame='absolute z-[0] w-[50%] h-[50%] top-0
        -left-1/2 pink__gradient rounded-full'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing
