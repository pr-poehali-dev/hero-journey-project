export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Семейное древо</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Поколения</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Старшее поколение</h4>
              <p className="text-gray-600 font-medium">Прадедушки и прабабушки</p>
              <p className="mt-2">
                Основатели нашей семейной истории. Здесь вы найдёте информацию о наших корнях, местах рождения и жизненном пути.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Среднее поколение</h4>
              <p className="text-gray-600 font-medium">Бабушки, дедушки и родители</p>
              <p className="mt-2">
                Хранители семейных традиций и воспоминаний. Их истории и мудрость передаются следующим поколениям.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Важные события</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Свадьбы и союзы</h4>
              <p className="text-sm text-gray-600 mb-2">Ключевые события в истории семьи</p>
              <p>Здесь собраны воспоминания о свадьбах и о том, как образовывались семейные союзы.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Рождения и крещения</h4>
              <p className="text-sm text-gray-600 mb-2">Пополнение семьи</p>
              <p>Важные могменты появления на свет новых членов семьи и их первые шаги в жизни.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}