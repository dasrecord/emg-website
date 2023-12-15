<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.item {
  margin-top: 3rem;
  display: flex;
  position: relative;
  margin-bottom: 3rem;
  padding: 1rem 3rem;
  border: 3px solid var(--color-border);
  border-radius: 25px;
  transition: box-shadow 150ms ease-out;
}
.item:hover {
  box-shadow: 0 0 20px #fff; /* add the white glow to the image */
}

.details {
  flex: 2;
  margin-left: 1rem;
  padding: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 4rem;

}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (max-width: 768px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    border: 3px solid var(--color-border);
    border-radius: 25px;
  }

  i {
    top: calc(50% - 25px);
    left: 10px;
    position: absolute;
    background: var(--color-background);
    border-radius: 10px;
    width: 2rem;
    height: 2rem;
  }

  /* .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  } */

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
