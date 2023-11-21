<template>
  <div class="team">
    <div class="team-member">
      <h2>
        <slot name="name"></slot>
      </h2>
      <h3>
        <slot name="role"></slot>
      </h3>
      <slot name="link"></slot>
      <slot name="booking"></slot>
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
