<template>
  <div class="blocktext">
    <h2>EMG: Moving The Music Industry Forward</h2>
    <br />
    <p>
      Evolved Music Group is not just a forward-thinking company; we are passionate about
      revolutionising the music industry. Our comprehensive artist development and management
      services include bookings, publishing, record label releases, tour management, and
      consultancy. We collaborate closely with artists to provide personalised services, ensuring
      they thrive creatively and professionally. Join us in reshaping the future of music, where
      talent outshines, and innovation prevails.🎶🚀
    </p>
    <br />
    <h2>Embark on Your Career Journey with Evolved Music Group!</h2>
    <br />
    <p>
      Welcome to a realm where creativity knows no bounds, and music takes flight on wings of
      innovation! At Evolved Music Group, we're not just a service; we're your gateway to a vibrant
      world of possibilities in the music industry. 🌐✨
    </p>
    <br />
    <h2>Our Mission:<br>Transform the Music Industry</h2>
    <br />
    <h3>1. Elevate Your Artistry with A&R Brilliance:</h3>
    <p>
      Dive into the heart of our A&R consultancy, where connections meet expertise, paving the way
      for your global musical journey. Our A&R wizards craft personal artist management plans,
      securing long-term foundations for your rise. From record deals to international tours, we're
      your passport to prominence. 🎤 ✈
    </p>
    <br />
    <h3>2. Unleash Sonic Brilliance in our Global Studios:</h3>
    <p>
      Join forces with Evolved's network of high-end production studios, both in the UK and across
      the globe. Our accomplished musical maestros specialize in crafting dynamic, edgy, and unique
      sounds that resonate with the masses. Collaborate with hit-making writers and producers,
      turning your lyrics into unrivaled records of top-tier production quality. 🚀🎹
    </p>
    <br />
    <h3>3. Recording Excellence, Less Road Time:</h3>
    <p>
      Step into a world where recording excellence meets convenience. With Evolved, spend more time
      creating and less time on the road. Whether it's a full album or a single cover, our
      experienced team ensures your vocals shine. 🎙🌟
    </p>
    <br />
    <h3>4. Excellent in Mixing & Mastering:</h3>
    <p>
      Master your tracks with precision and flair. Our external engineers, working hand-in-hand with
      Evolved, ensure your music is heard by 'fresh ears.' From analog to digital, your tracks will
      be mastered swiftly, delivering high-quality WAVs for your approval. 🎚🔊
    </p>
    <br />
    <h3>5. Brilliance in HD and 360:</h3>
    <p>
      Your musical journey deserves captivating visuals. Elevate your art with our professional HD
      music videos, or venture into the immersive world of 360 videos. Our award-winning directors
      and cutting-edge technology ensure your music not only sounds but looks groundbreaking. 🎬🌈
    </p>
    <br />
    <h3>6. The Power of Live Performance:</h3>
    <p>
      Forge your presence with high-end live performance videos, shot in a single location. Showcase
      your music and performance prowess, securing quality gig opportunities early in your career.
      🎥🎤
    </p>
    <br />
    <h3>7. Captivating Photography and Design:</h3>
    <p>
      Step into the spotlight with our award-winning photographers and graphic design team. From
      planning shoots to polishing images, we ensure you look like the star you are. Your logo will
      become as iconic as your music, leaving a lasting impression. 📸🎨
    </p>
    <br />
    <h3>8. Dominate Social Media with Striking Designs:</h3>
    <p>
      Navigate the dynamic world of social media with our bespoke designs. Our team optimizes your
      platforms, ensuring a viral reach and an engaged fanbase. Your online presence will be a
      visual spectacle that stands out amidst the noise. 🌐🚀
    </p>
    <br />
    <h3>9. Craft a Unique Identity with Merchandise:</h3>
    <p>
      Turn your logo into a brand with our merchandise design team. From t-shirts to festival bands,
      we create a range that resonates with your fanbase. Stand out at gigs with limited edition
      items, creating a buzz and extra revenue. 💰👕
    </p>
    <br />
    <h3>10. Ride the Social Wave with Influencer Impact:</h3>
    <p>
      Navigate the changing landscape of digital marketing with our influencer management service.
      Partner with global influencers to boost your music's exposure. From consultation to
      negotiation, we'll orchestrate a campaign that resonates across social platforms. 🌐🌟
    </p>
    <br />
    <h3>11. Conquer the Press with Music Industry Specialists:</h3>
    <p>
      Elevate your visibility with our music industry press team. With contacts in major
      publications, blogs, and sponsorship opportunities, we amplify your presence. Our press
      support guarantees an added layer of interest to your radio/TV/press campaigns. 🗞🎤
    </p>
    <br />
    <h3>12. Songwriting Camps: Ignite Your Creative Fire!</h3>
    <p>
      Join our private songwriting sessions and emerge from our camps with stellar vocal projects.
      With Grammy-nominated artists and industry veterans, your projects will soar globally. Enquire
      now to take your music to the next level! Evolved Music Group isn't just a service; it's a
      symphony of possibilities. Connect with us, and let's craft your musical legacy together!
      #EvolvedMusic #SonicRevolution #MusicInnovation 🎤✨
    </p>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  created() {
    fetch('/about_us.txt')
      .then((response) => response.text())
      .then((data) => {
        this.content = data
      })
  }
}
</script>

<style>
.blocktext {
  width: 80%;
  padding: 10px;
  text-align: justify;
}

.blocktext h2,
.blocktext h3 {
  text-align: center;
  font-size: 1.5rem;
}

li {
  list-style-type: none;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
}

@media (max-width: 768px) {
  .blocktext {
    width: 100%;
  }
}
</style>
