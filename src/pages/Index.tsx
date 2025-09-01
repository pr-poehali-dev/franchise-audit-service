import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                  Перестаньте гадать. Узнайте, окупится ли ваша франшиза{" "}
                  <span className="text-primary">до</span> того, как вы отдадите деньги.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Профессиональный аудит франшизы от экспертов с 15-летним опытом. 
                  Получите независимый вердикт «СТОИТ» или «НЕ СТОИТ» покупать и защитите свои инвестиции.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить бесплатную консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Примеры отчетов
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/71ad9d9e-ff5a-45b2-a33f-c329dec34540.jpg" 
                alt="Профессиональный аудит франшизы" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">15+ лет опыта</div>
                    <div className="text-sm text-slate-600">Более 500 аудитов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Выбирая франшизу, вы рискуете столкнуться с тем, о чем умалчивают на презентациях
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start space-x-4">
                  <Icon name="AlertTriangle" className="text-red-500 mt-1" size={24} />
                  <span>Скрытые платежи и кабальные условия в договоре</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Вы можете быть обязаны годами закупать товар по завышенным ценам или 
                  платить роялти даже при убытках.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start space-x-4">
                  <Icon name="TrendingDown" className="text-red-500 mt-1" size={24} />
                  <span>Неясная реальная прибыль точек</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Франчайзер показывает вам идеальные цифры пилотного ресторана, 
                  а не средние показатели реально работающих партнеров.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start space-x-4">
                  <Icon name="UserX" className="text-red-500 mt-1" size={24} />
                  <span>Невыполнимые обещания поддержки</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  «Мы поможем с запуском» на деле может оказаться одним письмом с инструкцией, 
                  а не реальным выездом специалиста.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start space-x-4">
                  <Icon name="EyeOff" className="text-red-500 mt-1" size={24} />
                  <span>Отсутствие реальной статистики по закрытиям</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Сколько франчайзи на самом деле прогорели и ушли с молчаливым 
                  соглашением не разглашать причины?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Мы проводим полноценное расследование вместо вас. Спите спокойно, пока мы проверяем.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Что входит в аудит под ключ
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Scale" className="text-primary" size={32} />
                </div>
                <CardTitle>Юридическая экспертиза договора</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Ищем скрытые платежи, условия расторжения, штрафы и невыгодные для вас обязательства.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Calculator" className="text-primary" size={32} />
                </div>
                <CardTitle>Анализ финансовой модели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Проверяем рентабельность, окупаемость и реалистичность плановых показателей, 
                  которые вам озвучили.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-primary" size={32} />
                </div>
                <CardTitle>Тайный shopper и звонок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  «Звоним» под видом потенциального покупателя и оцениваем качество 
                  реальной поддержки и обучения.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle>Конфиденциальные опросы франчайзи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Наши наработанные связи позволяют узнать реальные цифры прибыли 
                  и проблемы из первых уст.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow lg:col-span-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="FileCheck" className="text-primary" size={32} />
                </div>
                <CardTitle>Итоговый отчет с вердиктом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Вы получаете не просто данные, а четкий вывод с аргументацией по каждому пункту:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                    <Icon name="CheckCircle" size={20} />
                    <span className="font-semibold">СТОИТ покупать</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full">
                    <Icon name="XCircle" size={20} />
                    <span className="font-semibold">НЕ СТОИТ покупать</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Благодарности тех, кто принял решение с уверенностью
            </h2>
            <p className="text-xl text-slate-600">Истории спасенных инвестиций</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle>Максим</CardTitle>
                    <p className="text-sm text-slate-600">Планировал открыть кофейню</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  «Искандер, спасибо вам! По вашей рекомендации я отказался от, казалось бы, 
                  выгодной франшизы. Ваш эксперт нашел в договоре условие об обязательной 
                  закупке зерна только у них по цене выше рыночной на 40%. 
                  Вы saved me 3.5 млн рублей вложений и годы жизни!»
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle>Анна</CardTitle>
                    <p className="text-sm text-slate-600">Открыла салон оптики</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  «Заказала аудит по франшизе, которую уже почти выбрала. Вердикт был «СТОИТ», 
                  но с рекомендациями по изменению 3 пунктов в договоре. С этими правками 
                  я пошла на переговоры и смогла их отстоять! Открылась, вышла на плановую 
                  прибыль на 2 месяца раньше.»
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle>Сергей</CardTitle>
                    <p className="text-sm text-slate-600">Хотел купить франшизу в сфере образования</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  «Ваш тайный звонок франчайзеру все показал. Вместо promised land меня 
                  ждала аморфная консультация и отправка PDF-инструкции. А анализ отзывов 
                  реальных партнеров в закрытых чатах выявил тотальное недовольство поддержкой. 
                  Решение «НЕ СТОИТ» спасло мне 1.2 млн. рублей»
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ответы на частые вопросы
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Сколько стоит аудит?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Стоимость полного аудита под ключ — <strong>49 900 рублей</strong>. 
                  Это фиксированная сумма. Помните, что это в 50-100 раз меньше среднего 
                  паушального взноса, который вы можете потерять.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как происходит работа?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Вы оставляете заявку, мы связываемся с вами для уточнения деталей и заключаем договор. 
                  Вы предоставляете имеющиеся у вас документы (предложение франчайзера, договор, фин.модель). 
                  Мы проводим все этапы аудита в течение 5-7 рабочих дней и выдаем вам итоговый отчет 
                  с подробным разбором и вердиктом.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Что если ваше заключение будет «НЕ СТОИТ»?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Это лучший возможный исход! Это значит, что мы только что сэкономили вам 
                  несколько миллионов рублей, которые вы могли бы потерять, и несколько лет жизни, 
                  потраченных на работу в убыток. Вы платите не за положительный ответ, а за истину. 
                  И в этом случае наша услуга окупается многократно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Вы даете гарантию прибыли?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Нет, и никто не может этого сделать. Рынок, локация, персонал — это зона вашей ответственности. 
                  Мы же даем <strong>гарантию того, что сама франшиза как бизнес-модель не содержит 
                  фатальных изъянов, скрытых платежей и заведомо невыполнимых обещаний</strong>. 
                  Мы гарантируем, что вы делаете осознанный выбор на основе проверенных данных.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Примите самое важное бизнес-решение — решение не терять деньги
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Выбор франшизы определяет ваши доходы на годы вперед. Не доверяйте его интуиции 
              и красивым брошюрам. Доверьте его экспертам, которые говорят с вами начистоту.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Icon name="Clock" className="mr-2" size={16} />
                  Успейте до конца месяца!
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Аудит со скидкой 10%
                </h3>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-2xl text-slate-400 line-through">49 900 ₽</span>
                  <span className="text-4xl font-bold text-primary">44 910 ₽</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-xl py-6 mb-4">
                <Icon name="ShieldCheck" className="mr-2" size={24} />
                Заказать аудит с промокодом SAFE1
              </Button>
              
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Бонус!</strong> Для первых 20 клиентов — проверка вашего будущего договора аренды 
                  в <strong>подарок!</strong> (Стоимость услуги отдельно — 15 000 руб.)
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 mt-12 text-slate-600">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" className="text-primary" size={20} />
                <span>Полная конфиденциальность</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="text-primary" size={20} />
                <span>5-7 рабочих дней</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" className="text-primary" size={20} />
                <span>15+ лет опыта</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}