import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function ProblemsSection() {
  return (
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
  );
}