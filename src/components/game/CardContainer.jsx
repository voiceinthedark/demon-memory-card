import Card from "./Card"

export default function CardContainer({ data }) {
  return (
    <section className="card-container">
      {data.map(d => {
        return (
          <Card key={d.mal_id} source={d.images.jpg.image_url} name={d.name} />
        )
      })}

    </section>
  )
}
