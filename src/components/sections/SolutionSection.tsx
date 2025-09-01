import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function SolutionSection() {
  return (
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
  );
}