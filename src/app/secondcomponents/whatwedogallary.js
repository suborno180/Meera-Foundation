
export async function getImages() {
  const response = await fetch("http://localhost:3000/api/images");
  const data = await response.json();
  return data;
}
export default async function ImagesPage() {
  const images = await getImages();
  console.log(images)

  return (
    <div>
      <h1>Uploaded Images</h1>
      <div className="container mx-auto p-4">
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-10">
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="Uploaded" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

  
