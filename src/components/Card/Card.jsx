export function Card({
  url,name,description
}){
    return (
        <a href="#" class="card">
        <div class="card__body">
          <img
            src={url}
            alt="Playlist cover"
            class="card__body-cover"
          />
          <strong class="card__body-name">{name}</strong>
          <p class="card__body-description">{description}</p>
        </div>
      </a>
    )
}