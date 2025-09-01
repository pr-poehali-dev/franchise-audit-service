import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}