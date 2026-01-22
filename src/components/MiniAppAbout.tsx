export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Наша история</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Добро пожаловать в наш семейный архив</h3>
          <p className="text-lg leading-relaxed mb-4">
            Здесь собраны воспоминания, фотографии и истории нашей семьи. Каждое поколение вносило свой вклад в то, что мы есть сегодня.
          </p>
          <p className="text-lg leading-relaxed">
            Этот архив — способ сохранить нашу память, традиции и связь между поколениями. Здесь каждый может узнать о своих корнях.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Что вы найдёте здесь</h3>
          <div className="flex flex-wrap gap-2">
            {["Семейное древо", "Фотоархив", "Истории", "Традиции", "Рецепты", "Воспоминания", "Документы", "Генеалогия"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}