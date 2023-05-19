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
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/second_hero.54e92a4305d8302c245006b1e8c8a10c.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div
          class="carousel-caption d-none d-md-block"
          style="
            color: black;
            margin-bottom: 15vw;
            margin-left: -50vw;"
        >
          <h5 style= "color: #bd744c;">Chairs</h5>
          <h2 style= "font-size: 35px; font-weight: 500;" class="my-2">
            Get All
          </h2>
          <h1 style= "font-size: 45px; font-weight: 700;">
            ALL GOOD STUFF
          </h1>
          <a href={"/products"}>
            <button class="btn viewBtn">
              View More Products <i class="fa-solid fa-arrow-right" />
            </button>
          </a>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/first_hero.e7fe7598b3d23101534ffaa1817549d6.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div
          class="carousel-caption d-none d-md-block"
          style="margin-bottom: 15vw; color:black; margin-left:-50vw;"
        >
          <h5 style= "color: #bd744c;">Chairs</h5>
          <h2 style= "fontSize: 35px; font-weight: 500" class="my-2">
            Get All
          </h2>
          <h1 style= "fontSize: 45px; font-weight: 700">
            ALL GOOD STUFF
          </h1>
          <a href={"/products"}>
            <button class="btn viewBtn">
              View More Products <i class="fa-solid fa-arrow-right" />
            </button>
          </a>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/bg.450cfc7781058eb8f7c3e254a483d147.png"
          class="d-block w-100"
          alt="..."
        />
        <div
          class="carousel-caption d-none d-md-block"
          style="margin-bottom: 15vw; color:black; margin-left:-50vw;"
        >
          <h5 style= "color: #bd744c">Chairs</h5>
          <h2 style= "font-size: 35px; font-weight: 500;" class="my-2">
            Get All
          </h2>
          <h1 style= "font-size: 45px; font-weight: 700;">
            ALL GOOD STUFF
          </h1>
          <a href={"/products"}>
            <button class="btn viewBtn">
              View More Products <i class="fa-solid fa-arrow-right" />
            </button>
          </a>
        </div>
      </div>
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
