
import React , {useState} from 'react';
import styles from './Contact.scss';
import Image from 'next/image';
import { assets } from './../../assets/index';


export default function Contact() {

    // This is the link to check for links => https://app.web3forms.com/forms

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "fcdc58ac-dd16-4970-98e7-e7dd60cdf160");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


  return (
    <div id="contact" className="contact">
      <h4 className="contactIntro">Get in touch</h4>
      <h2 className="contactTitle">Contact Me</h2>

      <p className="contactDescription">
        I'd love to hear from you! If you have any questions, comments or feedback, 
        please use the form below.
      </p>  

      <form className='contactForm' onSubmit={onSubmit}>
        <div className='formContainer'>
            <div className='formHeader'>
                <input 
                    type="text" 
                    placeholder='Name' 
                    required
                    className='formName'
                    name='name'
                />
                <input 
                    type="email" 
                    placeholder='Email' 
                    required
                    className='formEmail'
                    name='email'
                />

            </div>
            <input 
                type="text" 
                placeholder='Subject' 
                className='formSubject'
                name='subject'
            />
            <textarea 
                rows={6}
                placeholder='Your message'
                required
                className='formBody'
                name='message'
            >

            </textarea>
            <button
                type='submit'
                className='formButton'
            >
                Submit Now 
                <Image src={assets.right_arrow_white} alt='' className='formIcon' />
            </button>

            <p className='formSubmission'>{result}</p>
        </div>
      </form>
      

    </div>
  )
}