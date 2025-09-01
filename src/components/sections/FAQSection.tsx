import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
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
  );
}