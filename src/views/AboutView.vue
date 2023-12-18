<template>
  <div class="blocktext">
    <h2>About</h2>
    <br />
    <p>
      Welcome to Evolved Music Group (EMG), where we proudly uphold our Company Motto: Empowering
      Musical Growth. At EMG, we are more than just a record label; we are a force for positive
      change within the global music ecosystem. Our commitment to transparency, decency, and
      morality sets us apart, and our mission is to redefine the evolutionary landscape of the music
      industry for the greater good.
    </p>
    <br />
    <h2>Discover, Enable, Build: Unleashing Tomorrow's Talent Today</h2>
    <br />
    <p>
      Come on in and meet our entire global creative team who bring nearly five decades of combined
      experience in the music industry together under one unique international roof. In a world
      where the key issues of transparency, decency, and morality have become glaringly apparent,
      EMG stands as the answer. We refuse to be part of an industry that lacks integrity. As music
      lovers, consumers, and industry professionals, we understand the need for record labels to
      serve both their global communities and the creators they collaborate with, in a transparent
      and supportive manner. Stand with us, as we represent tomorrow's talent
      today—unapologetically.
    </p>
    <br />
    <h2>Our Mission: Transforming the Music Industry</h2>
    <br />
    <p>
      EMG is on a mission to be the systematic and long-lasting positive change that the electronic
      music industry has yearned for but has consistently failed to achieve. In the wake of a new
      era for DIY electronic artists, we provide holistic support structures within a professional,
      global music landscape. Regardless of gender, age, beliefs, sexuality, or financial standing,
      EMG is committed to offering a 360-degree artist management experience. We believe in genuine
      creativity and long-term success, rejecting the notion of turning artists into mere AI
      machines. We are dedicated to renewing the drive for harmonic equality, forcing positive
      change, and fighting for industrial parity. EMG seeks to unite the lost and the hopeless,
      taking them on a spiritual journey of awakening and empowering genuine talents worldwide.
    </p>
    <br />
    <h2>Our Purpose: Leaving a Legacy of Creativity and Balance</h2>
    <br />
    <p>
      EMG is committed to leaving the world in a healthier, more creatively educated, and socially
      engaged state than we found it. We support unique talents from all corners of society,
      especially those from diverse ethnic minorities and less socially mobile communities. Our
      focus on managing our company's carbon footprint aligns with our goal to limit damage to the
      planet. By democratising and humanising corporate governance, we strategically target industry
      best practices, continually innovating to resonate with the ecosystem around us.
    </p>
    <br />
    <h2>Our Core Values: Guiding Principles for Success</h2>
    <br />
    <!-- <p>
      At EMG, our core values are the driving force behind our success:
    </p>
    <br> -->
    <ul>
      <li>Ownership: Be proud of your opinions and work ethic.</li>
      <li>Accountability: Real measurable transparency is key.</li>
      <li>Visionary Creativity: Create the vision, and they will believe.</li>
      <li>Challenge the Future: Forget the norms; innovate relentlessly.</li>
      <li>Team Spirit: Win as a team, lose as a team.</li>
      <li>Empathy: Lift each other up and be supportive.</li>
      <li>Longevity: Survivability comes from sustainability.</li>
      <li>Blue Sky Thinking: Be out of the box; innovate always.</li>
      <li>Authenticity: Authenticity rules; set the industry standard.</li>
      <li>Collaboration: Strategies for long-term wins.</li>
      <li>Tenacity: To give up is to give in; no surrender.</li>
      <li>Celebration: Celebrate the collective endeavour.</li>
      <li>Talent Focus: Internal team talent guides decision-making.</li>
      <li>Integrity: Integrity wins out every time.</li>
      <li>Inclusivity and Diversity: Inform and fuel our growth.</li>
      <li>Passion: Lives at the heart of everything we do.</li>
      <li>Timely Communication: Strengthens our community.</li>
      <li>Analytical Judgement: Be bold and brave in adversity.</li>
      <li>Artistic Independence: Fight for the right to greater artistic independence.</li>
      <li>Champion Tomorrow's Talent Today: Fearlessly.</li>
    </ul>
    <!-- <p>{{ content }}</p> -->
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
  margin: 0 auto;
  width: 80%;
  padding: 10px;
  text-align: justify;
  font-size: 2rem;
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

  .blocktext h2 {
    font-size: 2rem;
  }

  .blocktext p,
  .blocktext li {
    font-size: 1rem;
  }
}
</style>
