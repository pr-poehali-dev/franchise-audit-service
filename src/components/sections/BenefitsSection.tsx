import Icon from '@/components/ui/icon';

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Почему наш аудит — это не трата денег, а ваша главная инвестиция в спокойствие
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="PiggyBank" className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Экономим ваши деньги и время
                </h3>
                <p className="text-slate-600">
                  Стоимость нашего аудита равна 1-2% от среднего паушального взноса. 
                  Мы можем сэкономить вам 100% будущих вложений, если найдем подводные камни.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="BarChart3" className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Говорим на языке цифр, а не обещаний
                </h3>
                <p className="text-slate-600">
                  Мы не верим на слово. Мы проверяем договора, отчеты и цифры. 
                  Наше мнение основано на фактах.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Users2" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Мы по обе стороны баррикад
                </h3>
                <p className="text-slate-600">
                  Я и моя команда сами были и франчайзи, и франчайзерами. 
                  Мы знаем все внутренние кухни и уловки из личного опыта.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Lock" className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Полная конфиденциальность
                </h3>
                <p className="text-slate-600">
                  Франчайзер не узнает, что вы проводите проверку. 
                  Вы сохраняете лицо и ведете переговоры уже с полной колодой карт на руках.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}