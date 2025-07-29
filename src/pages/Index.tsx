import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Volume2" size={32} className="text-blue-500" />
              <h1 className="text-2xl font-orbitron font-bold text-white">
                AUTO<span className="text-blue-500">SOUND</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors font-medium">Главная</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-white hover:text-blue-400 transition-colors font-medium">Портфолио</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors font-medium">О студии</a>
              <a href="#pricing" className="text-white hover:text-blue-400 transition-colors font-medium">Прайс</a>
              <a href="#contacts" className="text-white hover:text-blue-400 transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-orbitron font-black text-white mb-6 leading-tight">
                ПРОФЕССИОНАЛЬНЫЙ
                <span className="text-blue-500 block animate-glow">АВТОЗВУК</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Установка премиальных аудиосистем, автомагнитол, колонок и сабвуферов. 
                Превращаем ваш автомобиль в концертный зал.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 font-semibold px-8 py-4 text-lg">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="/img/d273f956-5012-468d-bd42-3e35ed4fa85a.jpg"
                alt="Профессиональная установка автозвука"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              НАШИ <span className="text-blue-500">УСЛУГИ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Полный спектр услуг по установке и настройке автомобильных аудиосистем
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:bg-slate-700/80 transition-all duration-300 group">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Radio" size={48} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Автомагнитолы</h3>
              <p className="text-slate-400 mb-6">
                Установка современных мультимедийных систем с Android Auto и Apple CarPlay
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  2DIN и 1DIN системы
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Навигация и Bluetooth
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Камеры заднего вида
                </li>
              </ul>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:bg-slate-700/80 transition-all duration-300 group">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Speaker" size={48} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Колонки</h3>
              <p className="text-slate-400 mb-6">
                Замена штатной акустики на премиальные компонентные и коаксиальные системы
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Компонентная акустика
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Коаксиальные динамики
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Звукоизоляция дверей
                </li>
              </ul>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:bg-slate-700/80 transition-all duration-300 group">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Headphones" size={48} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Сабвуферы</h3>
              <p className="text-slate-400 mb-6">
                Установка активных и пассивных сабвуферов для глубокого баса
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Активные сабвуферы
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Корпусные решения
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Усилители мощности
                </li>
              </ul>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:bg-slate-700/80 transition-all duration-300 group">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Icon name="ShieldCheck" size={48} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Шумоизоляция</h3>
              <p className="text-slate-400 mb-6">
                Профессиональная звукоизоляция автомобиля для максимального комфорта
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Изоляция дверей и пола
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Виброизоляция кузова
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Акустические материалы
                </li>
              </ul>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:bg-slate-700/80 transition-all duration-300 group">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Radar" size={48} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Парктроники</h3>
              <p className="text-slate-400 mb-6">
                Системы помощи при парковке с звуковыми и визуальными сигналами
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Передние и задние датчики
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  LED дисплеи
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Интеграция с штатной системой
                </li>
              </ul>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:bg-slate-700/80 transition-all duration-300 group">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Camera" size={48} />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Камеры заднего хода</h3>
              <p className="text-slate-400 mb-6">
                Системы видеонаблюдения для безопасной парковки и маневрирования
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  HD камеры с ночным видением
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Динамические линии разметки
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-500 mr-2" />
                  Интеграция с мультимедиа
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              НАШИ <span className="text-blue-500">РАБОТЫ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Примеры профессиональной установки аудиосистем в автомобили различных классов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/5b235084-b44e-47db-b225-d7a3bca77cd1.jpg"
                  alt="Установка мультимедийной системы"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-orbitron font-bold text-lg">Мультимедийная система</h3>
                  <p className="text-slate-300 text-sm">Premium головное устройство с навигацией</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/d273f956-5012-468d-bd42-3e35ed4fa85a.jpg"
                  alt="Компонентная акустика"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-orbitron font-bold text-lg">Компонентная акустика</h3>
                  <p className="text-slate-300 text-sm">Высококачественные динамики и твитеры</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/21c456f2-ede4-48b9-97a7-630172e152fe.jpg"
                  alt="Сабвуфер"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-orbitron font-bold text-lg">Сабвуфер</h3>
                  <p className="text-slate-300 text-sm">Мощная басовая система в багажнике</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/e94f5d95-3fdb-4528-b1a2-9c81aebfd18a.jpg"
                  alt="Шумоизоляция автомобиля"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-orbitron font-bold text-lg">Шумоизоляция</h3>
                  <p className="text-slate-300 text-sm">Комплексная звукоизоляция салона</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/8cc7b842-9b55-4855-81b7-34763f01bfcd.jpg"
                  alt="Парктроники и камеры"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-orbitron font-bold text-lg">Парктроники</h3>
                  <p className="text-slate-300 text-sm">Системы помощи при парковке</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/8cc7b842-9b55-4855-81b7-34763f01bfcd.jpg"
                  alt="Камеры заднего хода"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-orbitron font-bold text-lg">Камеры заднего хода</h3>
                  <p className="text-slate-300 text-sm">HD видеонаблюдение для безопасности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-orbitron font-bold text-white mb-6">
                О <span className="text-blue-500">СТУДИИ</span>
              </h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Более 15 лет мы специализируемся на профессиональной установке автомобильных 
                аудиосистем. Наша команда сертифицированных мастеров работает только с 
                проверенным оборудованием от ведущих мировых брендов.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-orbitron font-bold text-lg">500+</div>
                    <div className="text-slate-400 text-sm">Установленных систем</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-orbitron font-bold text-lg">15+</div>
                    <div className="text-slate-400 text-sm">Лет опыта</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-orbitron font-bold text-lg">5.0</div>
                    <div className="text-slate-400 text-sm">Рейтинг клиентов</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-orbitron font-bold text-lg">2 года</div>
                    <div className="text-slate-400 text-sm">Гарантия на работы</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-lg border border-slate-600">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Наши преимущества</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-blue-500 mt-1" />
                  <span className="text-slate-300">Бесплатная диагностика и консультация</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-blue-500 mt-1" />
                  <span className="text-slate-300">Работа с оригинальным оборудованием</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-blue-500 mt-1" />
                  <span className="text-slate-300">Профессиональная настройка звука</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-blue-500 mt-1" />
                  <span className="text-slate-300">Сохранение заводской гарантии автомобиля</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              ПРАЙС-<span className="text-blue-500">ЛИСТ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Стоимость услуг по установке и настройке автомобильных аудиосистем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Базовый</h3>
              <div className="text-4xl font-orbitron font-bold text-blue-500 mb-6">
                от 15,000₽
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Установка 1DIN магнитолы
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Замена передних колонок
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Базовая настройка
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Гарантия 1 год
                </li>
              </ul>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                Выбрать пакет
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500 p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Премиум</h3>
              <div className="text-4xl font-orbitron font-bold text-blue-400 mb-6">
                от 35,000₽
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-400 mr-3" />
                  Установка 2DIN системы
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-400 mr-3" />
                  Компонентная акустика
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-400 mr-3" />
                  Активный сабвуфер
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-400 mr-3" />
                  Профессиональная настройка
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-400 mr-3" />
                  Гарантия 2 года
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Выбрать пакет
              </Button>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Эксклюзив</h3>
              <div className="text-4xl font-orbitron font-bold text-blue-500 mb-6">
                от 75,000₽
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Hi-End мультимедиа система
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Премиум акустика
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Мощный сабвуфер
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Полная звукоизоляция
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon name="Check" size={16} className="text-blue-500 mr-3" />
                  Индивидуальная настройка
                </li>
              </ul>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                Выбрать пакет
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              НАШИ <span className="text-blue-500">КОНТАКТЫ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и записи на установку
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Адрес</h3>
                  <p className="text-slate-300">г. Москва, ул. Автомобильная, 15</p>
                  <p className="text-slate-400 text-sm">Район автосервисов, легко найти</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Телефон</h3>
                  <p className="text-slate-300">+7 (495) 123-45-67</p>
                  <p className="text-slate-400 text-sm">Работаем с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Email</h3>
                  <p className="text-slate-300">info@autosound.ru</p>
                  <p className="text-slate-400 text-sm">Отвечаем в течение часа</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Режим работы</h3>
                  <p className="text-slate-300">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-slate-300">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/80 border-slate-700 p-8">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Заказать обратный звонок</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Какие услуги вас интересуют?"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Volume2" size={32} className="text-blue-500" />
                <h3 className="text-2xl font-orbitron font-bold text-white">
                  AUTO<span className="text-blue-500">SOUND</span>
                </h3>
              </div>
              <p className="text-slate-400">
                Профессиональная установка автомобильных аудиосистем с 2009 года
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-orbitron font-bold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Автомагнитолы</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Колонки</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Сабвуферы</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Шумоизоляция</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Парктроники</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Камеры заднего хода</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-orbitron font-bold text-white mb-4">Информация</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-orbitron font-bold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@autosound.ru</li>
                <li>г. Москва, ул. Автомобильная, 15</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center">
            <p className="text-slate-400">
              © 2024 AutoSound. Все права защищены. Профессиональная установка автозвука.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}