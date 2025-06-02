import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="42 Братухи"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            42, <span className="text-primary">братуха</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Движение, которое объединяет поколение через мемы, музыку и свободу самовыражения
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Присоединиться
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Что такое 42 Братухи?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">История</h3>
              <p className="text-gray-300">
                Движение зародилось в 2023 году благодаря стримеру Кириллу Баранову (5opka) и быстро стало вирусным в русскоязычном интернете.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">Философия</h3>
              <p className="text-gray-300">
                "Кринжа не существует" - главный принцип движения, пропагандирующий свободу самовыражения и отсутствие рамок.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent">Сообщество</h3>
              <p className="text-gray-300">
                Объединение творческих людей, которые не боятся быть собой и создавать уникальный контент.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Особенности движения
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Уникальный стиль</h3>
                  <p className="text-gray-300">Яркие шубы, цепи, очки с шипами и другие элементы, делающие образ запоминающимся.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Сильное сообщество</h3>
                  <p className="text-gray-300">Тысячи активных участников по всей России, объединенных общей идеей.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Музыкальная культура</h3>
                  <p className="text-gray-300">Собственные треки, коллаборации с известными артистами и уникальный саунд.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Медиа-присутствие</h3>
                  <p className="text-gray-300">Активное развитие в TikTok, YouTube и других социальных сетях.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-8">
            Стань частью движения
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Присоединяйся к сообществу 42 Братухи и стань частью чего-то большего
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Присоединиться сейчас
          </motion.button>
        </div>
      </section>
    </main>
  );
} 