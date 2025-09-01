import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const tarotCards = [
    { id: 1, name: "Маг", meaning: "Начинания, воля, мастерство" },
    { id: 2, name: "Жрица", meaning: "Интуиция, тайны, подсознание" },
    { id: 3, name: "Императрица", meaning: "Плодородие, творчество, изобилие" },
    { id: 4, name: "Император", meaning: "Власть, стабильность, порядок" },
    { id: 5, name: "Иерофант", meaning: "Духовность, традиции, учение" }
  ];

  const services = [
    {
      icon: "Star",
      title: "Персональные Расклады",
      desc: "Индивидуальные консультации и расклады карт для решения жизненных вопросов",
      price: 1500,
      duration: "30-45 минут"
    },
    {
      icon: "BookOpen", 
      title: "Обучение Таро",
      desc: "Комплексные курсы изучения Таро от базового до продвинутого уровня",
      price: 5000,
      duration: "4 недели"
    },
    {
      icon: "Users",
      title: "Групповые Сессии", 
      desc: "Мастер-классы и групповые медитации с картами Таро",
      price: 800,
      duration: "1.5 часа"
    }
  ];

  const PaymentDialog = ({ service }: { service: typeof services[0] }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-mystic-purple hover:bg-mystic-gold hover:text-mystic-dark transition-colors">
          Заказать
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-mystic-dark border-mystic-purple/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-mystic-gold font-['Cormorant'] text-2xl">
            Оплата услуги
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Card className="bg-mystic-deep/50 border-mystic-purple/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name={service.icon as any} size={20} className="text-mystic-gold" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-mystic-light text-sm">{service.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-mystic-light">Продолжительность:</span>
                <span className="text-white">{service.duration}</span>
              </div>
              <Separator className="bg-mystic-purple/30" />
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Стоимость:</span>
                <span className="text-mystic-gold">{service.price}₽</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-mystic-purple/20 border-mystic-gold/30">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 text-mystic-gold flex items-center gap-2">
                <Icon name="CreditCard" size={18} />
                Способы оплаты
              </h3>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-yellow-600 hover:bg-yellow-500 text-white justify-start gap-3"
                  onClick={() => window.open(`https://www.tinkoff.ru/rm/petrov.aleksandr27/BDqoh36469`, '_blank')}
                >
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-xs">Т</span>
                  </div>
                  Тинькофф Банк
                </Button>
                <div className="bg-mystic-deep/50 p-3 rounded-lg">
                  <p className="text-mystic-light text-sm mb-1">Перевод по номеру телефона:</p>
                  <p className="text-mystic-gold font-mono">+7 977 194-02-44</p>
                  <p className="text-xs text-mystic-light mt-1">
                    После оплаты вам придет подтверждение на указанный контакт
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-mystic-light text-sm">
              Безопасная оплата через Тинькофф Банк
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <Icon name="Shield" size={16} className="text-mystic-gold" />
              <span className="text-xs text-mystic-light">256-bit SSL шифрование</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const handleCardClick = (cardId: number) => {
    if (!flippedCards.includes(cardId)) {
      setFlippedCards([...flippedCards, cardId]);
      setSelectedCard(cardId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-dark via-mystic-deep to-mystic-purple">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-mystic-dark/80 border-b border-mystic-purple/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-mystic-gold font-['Cormorant']">
              ✨ Таролог Александра
            </h1>
            <div className="hidden md:flex space-x-6">
              {["Главная", "Расклады", "Обучение", "Услуги", "Отзывы", "Галерея", "Блог"].map((item) => (
                <a key={item} href="#" className="text-mystic-light hover:text-mystic-gold transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 text-white font-['Cormorant']">
              Откройте Тайны <span className="text-mystic-gold">Вселенной</span>
            </h1>
            <p className="text-xl text-mystic-light mb-8 leading-relaxed">
              Погрузитесь в мир древней мудрости Таро. Получите персональные расклады 
              и откройте секреты своего будущего через интерактивные онлайн-консультации
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button className="bg-mystic-purple hover:bg-mystic-deep text-white px-8 py-3 text-lg animate-scale-in">
                <Icon name="Sparkles" className="mr-2" />
                Получить Расклад
              </Button>
              <Button variant="outline" className="border-mystic-gold text-mystic-gold hover:bg-mystic-gold hover:text-mystic-dark px-8 py-3 text-lg">
                Узнать Больше
              </Button>
            </div>
          </div>
          
          {/* Floating Crystal Ball */}
          <div className="relative mx-auto w-48 h-48 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-mystic-light/20 to-mystic-purple/40 rounded-full blur-xl"></div>
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-mystic-gold/30 to-mystic-purple/60 rounded-full flex items-center justify-center">
              <Icon name="Eye" size={48} className="text-mystic-gold animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tarot Reading */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Cormorant']">
              Интерактивный Расклад Таро
            </h2>
            <p className="text-mystic-light text-lg">Выберите три карты для получения предсказания</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {tarotCards.map((card) => (
              <div key={card.id} className="tarot-card" onClick={() => handleCardClick(card.id)}>
                <Card className={`w-32 h-48 cursor-pointer transform transition-all duration-500 ${
                  flippedCards.includes(card.id) ? 'rotate-y-180' : ''
                }`}>
                  <CardContent className="p-0 h-full relative overflow-hidden bg-gradient-to-br from-mystic-deep to-mystic-purple border-mystic-gold/30">
                    {flippedCards.includes(card.id) ? (
                      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                        <h3 className="text-mystic-gold font-semibold mb-2 text-sm">{card.name}</h3>
                        <p className="text-mystic-light text-xs leading-tight">{card.meaning}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-mystic-dark to-mystic-purple">
                        <img 
                          src="/img/2b1b5a2d-81e5-4901-83d9-1b947605a02c.jpg" 
                          alt="Обратная сторона карты Таро"
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {selectedCard && (
            <div className="text-center animate-fade-in">
              <Badge className="bg-mystic-gold text-mystic-dark text-lg px-6 py-2">
                Карта выбрана: {tarotCards.find(c => c.id === selectedCard)?.name}
              </Badge>
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-mystic-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 font-['Cormorant']">
            Наши Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Star",
                title: "Персональные Расклады",
                desc: "Индивидуальные консультации и расклады карт для решения жизненных вопросов",
                price: "от 1500₽"
              },
              {
                icon: "BookOpen",
                title: "Обучение Таро",
                desc: "Комплексные курсы изучения Таро от базового до продвинутого уровня",
                price: "от 5000₽"
              },
              {
                icon: "Users",
                title: "Групповые Сессии",
                desc: "Мастер-классы и групповые медитации с картами Таро",
                price: "от 800₽"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-mystic-deep/80 border-mystic-purple/30 hover:border-mystic-gold/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-mystic-purple/30 rounded-full mb-4 group-hover:bg-mystic-gold/30 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-mystic-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-mystic-light mb-4">{service.desc}</p>
                  <div className="text-mystic-gold font-bold text-lg mb-4">{service.price}</div>
                  <Button className="bg-mystic-purple hover:bg-mystic-gold hover:text-mystic-dark transition-colors">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About & Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-['Cormorant']">
                О Таролог Александра
              </h2>
              <p className="text-mystic-light text-lg leading-relaxed mb-6">
                Александра — сертифицированный таролог с более чем 15-летним опытом. 
                Помогает людям найти ответы на важные жизненные вопросы через древнюю мудрость карт Таро.
              </p>
              <p className="text-mystic-light text-lg leading-relaxed mb-8">
                Моя миссия — сделать магические знания доступными каждому через 
                персональные консультации и интерактивные онлайн-сессии.
              </p>
              <Button className="bg-mystic-gold text-mystic-dark hover:bg-mystic-light">
                <Icon name="Calendar" className="mr-2" />
                Записаться на Консультацию
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/img/392dd1f9-61a4-48ba-8c17-e044b992bd17.jpg" 
                  alt="Таролог Александра"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold font-['Cormorant'] mb-2">
                    Александра
                  </h3>
                  <p className="text-mystic-light">Сертифицированный таролог</p>
                  <p className="text-mystic-gold text-sm">Опыт более 15 лет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-mystic-deep/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 font-['Cormorant']">
            Отзывы Клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                text: "Удивительно точные предсказания! Расклад помог принять важное решение в карьере.",
                rating: 5
              },
              {
                name: "Михаил С.", 
                text: "Профессиональный подход и глубокое понимание карт. Рекомендую всем!",
                rating: 5
              },
              {
                name: "Елена В.",
                text: "Прошла курс обучения Таро - теперь читаю карты сама. Отличные преподаватели!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-mystic-dark/60 border-mystic-purple/30">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-mystic-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-mystic-light mb-4">"{review.text}"</p>
                  <p className="text-mystic-gold font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 font-['Cormorant']">
            Последние Статьи Блога
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Значение старших арканов Таро",
              "Как правильно задавать вопросы картам",
              "История возникновения Таро"
            ].map((title, index) => (
              <Card key={index} className="bg-mystic-deep/80 border-mystic-purple/30 hover:border-mystic-gold/50 transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-mystic-gold transition-colors">
                    {title}
                  </h3>
                  <p className="text-mystic-light mb-4">
                    Узнайте больше о тайнах и секретах древнего искусства гадания...
                  </p>
                  <div className="flex items-center text-mystic-gold">
                    <span className="text-sm">Читать далее</span>
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-mystic-dark border-t border-mystic-purple/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-mystic-gold mb-4 font-['Cormorant']">
                ✨ Таролог Александра
              </h3>
              <p className="text-mystic-light">
                Персональные консультации и обучение искусству Таро
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2">
                {["Расклады Таро", "Обучение", "Консультации", "Групповые сессии"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-mystic-light hover:text-mystic-gold transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Обучение</h4>
              <ul className="space-y-2">
                {["Базовый курс", "Продвинутый уровень", "Мастер-классы", "Сертификация"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-mystic-light hover:text-mystic-gold transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-mystic-light flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
                <p className="text-mystic-light flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@mystic-portal.ru
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                {["Instagram", "Telegram", "Youtube"].map(social => (
                  <a key={social} href="#" className="text-mystic-light hover:text-mystic-gold transition-colors">
                    <Icon name={social as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-mystic-purple/30 mt-8 pt-8 text-center">
            <p className="text-mystic-light">
              © 2024 Мистический Портал. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;