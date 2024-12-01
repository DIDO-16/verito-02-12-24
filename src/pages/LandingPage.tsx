import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Search, FileText, LogIn, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-primary-100 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Step = ({ number, title, description, icon: Icon }: { number: number, title: string, description: string, icon: any }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: number * 0.2 }}
      className="flex items-start space-x-4"
    >
      <div className="flex-shrink-0 bg-primary-100 rounded-full p-3">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="sm:text-center lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Votre historique véhicule</span>
                  <span className="block text-primary-600">en un clic</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                  Accédez à l'historique complet de votre véhicule, des contrôles techniques aux réparations, le tout sur une plateforme sécurisée et facile à utiliser.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      <LogIn className="w-5 h-5 mr-2" />
                      Se connecter
                    </Link>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Vehicle inspection"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi choisir Verito ?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Une solution complète pour la gestion de l'historique de vos véhicules
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Car}
              title="Historique complet"
              description="Accédez à l'historique détaillé de chaque véhicule, des contrôles techniques aux réparations."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Fiabilité garantie"
              description="Données vérifiées et certifiées par des professionnels agréés."
            />
            <FeatureCard
              icon={FileText}
              title="Rapports détaillés"
              description="Générez des rapports complets sur l'état de votre véhicule."
            />
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comment ça marche ?
            </h2>
          </motion.div>

          <div className="mt-12 max-w-lg mx-auto space-y-8">
            <Step
              number={1}
              icon={LogIn}
              title="Connectez-vous"
              description="Créez votre compte ou connectez-vous à votre espace personnel."
            />
            <Step
              number={2}
              icon={Search}
              title="Recherchez votre véhicule"
              description="Entrez le numéro de châssis (VIN) de votre véhicule."
            />
            <Step
              number={3}
              icon={FileText}
              title="Accédez aux informations"
              description="Consultez l'historique complet et les rapports détaillés."
            />
          </div>
        </div>
      </div>
    </div>
  );
};