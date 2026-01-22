export function MiniAppArt() {
  const artworks = [
    { title: "Семейные праздники", medium: "Фотографии", year: "2020-е" },
    { title: "Свадьбы", medium: "Семейный архив", year: "1990-е" },
    { title: "Старые фото", medium: "Чёрно-белые", year: "1960-е" },
    { title: "Детские годы", medium: "Семейные снимки", year: "2000-е" },
    { title: "Путешествия", medium: "Совместные поездки", year: "2010-е" },
    { title: "Встречи поколений", medium: "Особые моменты", year: "2015-е" },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Семейный фотоархив</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-[#FF2E63] to-[#FF6B9D] border-b-[3px] border-black flex items-center justify-center">
              <span className="text-white font-black text-lg">ФОТО</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1">{artwork.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{artwork.medium}</p>
              <p className="text-sm font-bold">{artwork.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все фотографии
        </button>
      </div>
    </div>
  )
}