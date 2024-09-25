import headshot from '../images/headshot.png'

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <img style={{width: '30%'}} src={headshot} alt="headshot-photo" />
      <p className='body'>
        I was born in Connecticut. I grew up with both parents
        in the military so I moved every 3-4 years until I was
        in high school. I would say that made me adaptable and
        versatile. I love to learn and went on to start my career
        as a registered nurse but I hated the feeling of being 
        complacent. In tried and true fashion I became aware of 
        coding and web development and set forth to begin my new
        journey of programming.
      </p>
    </div>
  );
}
