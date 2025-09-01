import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function TestimonialsSection() {
  return (
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
  );
}