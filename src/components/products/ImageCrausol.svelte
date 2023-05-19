<script>
  export let images;
</script>

<div>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      
      {#each images as image}
        <div
          class={image == images[0] ? "carousel-item active" : "carousel-item"}
          data-bs-interval={image == images[images.length-1] ? "" : "2000"}
        >
          <img src={image} class="d-block w-100" alt="..." />
        </div>
      {/each}
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<style>
  .viewBtn {
    border: 0.5px solid #bd744c;
    font-weight: 600;
    font-size: 20px;
    color: #bd744c;
  }
  .viewBtn:hover {
    background-color: #bd744c;
    color: white;
    font-weight: 400;
  }
</style>
