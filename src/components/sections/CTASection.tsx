import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

export default function CTASection() {
  return (
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
  );
}