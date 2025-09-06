import { Star, Users, MapPin, Award } from "lucide-react";
import { motion } from "motion/react";

export function StatsSection() {
  const stats = [
    {
      icon: Star,
      value: "4.8",
      label: "Rating promedio",
      description: "De todas las reseñas",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: Users,
      value: "15K+",
      label: "Foodies activos",
      description: "En nuestra comunidad",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: MapPin,
      value: "850+",
      label: "Restaurantes",
      description: "Reseñados y verificados",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Award,
      value: "2.5K+",
      label: "Reseñas expertas",
      description: "Con fotos y detalles",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="px-4">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
            <h2 className="text-3xl font-bold text-white">
              La comunidad gastronómica
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                más grande de España
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cifras que hablan de nuestra pasión por la buena comida y la confianza de nuestra comunidad
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-gray-300 font-medium mb-1">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-4"
          >
            <div className="inline-flex items-center gap-2 text-gray-300 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Datos actualizados en tiempo real</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}