<template>
  <div class="team">
    <div class="team-member">
      <slot name="image"></slot>
      <h2>
        <slot name="name"></slot>
      </h2>
      <div>
        <slot name="link"></slot>
      </div>
      <div>
        <slot name="location"></slot>
      </div>
      <div>
        <slot name="logo"></slot>
      </div>
      <h3>
        <slot name="role"></slot>
      </h3>
      <div>
        <slot name="quote"></slot>
      </div>
      <div>
        <div class="socials">
          <div>
            <slot name="facebook"></slot>
          </div>
          <div>
            <slot name="instagram"></slot>
          </div>
          <div>
            <slot name="spotify"></slot>
          </div>
          <div>
            <slot name="soundcloud"></slot>
          </div>
          <div>
            <slot name="youtube"></slot>
          </div>
          <div>
            <slot name="twitch"></slot>
          </div>
        </div>
        <slot name="booking"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ROW STYLE */
.team {
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  line-height: 2.5;
  border: 1px solid var(--color-border);
  padding-inline-start: 0;
}

.socials {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

/* GRID STLYE */
/* .team {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem; 
  position: relative;
  border: 1px solid var(--color-border);
} */

h2 h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
