export function Card(){
    return (
        <a href="#" class="card">
        <div class="card__body">
          <img
            src="https://placekitten.com/300/300"
            alt="Playlist cover"
            class="card__body-cover"
          />
          <strong class="card__body-name">Today's Top Hits</strong>
          <p class="card__body-description">
            Steve Lacy is on top of the Hottest 50!
          </p>
        </div>
      </a>
    )
}