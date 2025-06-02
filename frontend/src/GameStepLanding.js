import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Play, 
  Gamepad2, 
  Settings, 
  Users, 
  Heart, 
  Zap,
  Check,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const GameStepLanding = () => {
  const { scrollYProgress } = useScroll();
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "100% Foot-Controlled",
      description: "Revolutionary foot-based control system designed for complete hands-free gaming experience"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Fully Customizable",
      description: "Every button can be customized to your exact needs and preferences"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightweight Design",
      description: "Premium materials ensure durability while maintaining comfortable weight"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Therapy Integration",
      description: "Perfect for physical therapy sessions and rehabilitation programs"
    }
  ];

  const specs = [
    { label: "Material", value: "Lightweight Wood & Foam" },
    { label: "Compatibility", value: "Nintendo GameBoy Systems" },
    { label: "Setup Time", value: "Under 2 Minutes" },
    { label: "Customization", value: "Fully Programmable Buttons" },
    { label: "Weight", value: "Ultra-Light Design" },
    { label: "Durability", value: "Built for Daily Use" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl lg:text-9xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              GameStep
            </h1>
            <p className="text-2xl lg:text-3xl font-light text-blue-100 mb-4">
              Revolutionary Gaming Freedom
            </p>
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The world's first foot-controlled Nintendo GameBoy system designed for 
              upper limb accessibility and physical therapy innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30">
              <span className="relative z-10 flex items-center gap-3">
                Experience GameStep
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mt-12"
            >
              <ChevronDown className="w-8 h-8 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Innovation Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Redefining Accessible Gaming
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Born from observation, research, and innovation - GameStep bridges the gap 
              between cutting-edge technology and inclusive gaming experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxwaHlzaWNhbCUyMHRoZXJhcHl8ZW58MHx8fGJsdWV8MTc0ODg4MTAyOXww&ixlib=rb-4.1.0&q=85" 
                alt="Accessibility in gaming"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">For Everyone</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Designed specifically for gamers with upper limb disabilities, but beneficial 
                  for anyone seeking alternative gaming experiences.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Therapy Integration</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Perfect companion for physical therapy sessions, making rehabilitation 
                  engaging and enjoyable through gaming.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every detail engineered for the ultimate accessible gaming experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specifications */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Precision engineering meets innovative design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzQ4ODgxMDIzfDA&ixlib=rb-4.1.0&q=85" 
                alt="Modern technology showcase"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-4 border-b border-slate-700/50"
                >
                  <span className="text-slate-400 text-lg">{spec.label}</span>
                  <span className="text-white font-semibold text-lg">{spec.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Testimonial */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1635514569144-2dc4b0cfd141?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxhY2Nlc3NpYmxlJTIwZ2FtaW5nfGVufDB8fHxibHVlfDE3NDg4ODEwMTl8MA&ixlib=rb-4.1.0&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl lg:text-4xl font-light italic mb-8 leading-relaxed">
              "It's amazing to game from the comfort of my chair using my feet and playing GameBoy again!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">GameStep Beta Tester</p>
                <p className="text-slate-400">Physical Therapy Patient</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Innovation Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From research to reality - following the design circle methodology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-400">Research-Driven Design</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our team followed rigorous design methodology, starting with observation of 
                  accessibility issues in gaming, followed by comprehensive literature review 
                  of existing assistive technologies.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-cyan-400">Prototyping Excellence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Multiple iterations using lightweight wood and strategic foam placement, 
                  ensuring optimal foot positioning and button responsiveness for various users.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-400">User Testing</h3>
                <p className="text-slate-300 leading-relaxed">
                  Extensive fieldwork with real users, gathering feedback through comprehensive 
                  questionnaires to refine the experience continuously.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581090698407-7d93959da202?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxpbm5vdmF0aW9uJTIwbGFifGVufDB8fHxibHVlfDE3NDg4ODEwMzR8MA&ixlib=rb-4.1.0&q=85" 
                alt="Innovation and research"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              See GameStep in Action
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Watch our demonstration video showcasing the revolutionary capabilities of GameStep
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-video bg-slate-800 rounded-2xl border-2 border-slate-700 group-hover:border-blue-500/50 transition-colors flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-500/30 transition-colors">
                  <Play className="w-10 h-10 text-blue-400 ml-1" />
                </div>
                <p className="text-slate-400 text-lg">Click to play demonstration video</p>
                <p className="text-sm text-slate-500">[Video placeholder - upload your GameStep demo here]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Gaming Revolution
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to experience the future of accessible gaming? Get in touch for demos, 
              inquiries, or to be part of the GameStep community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-slate-600 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-3xl font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GameStep
              </h3>
              <p className="text-slate-400 mt-2">Revolutionary Gaming Freedom</p>
            </div>
            
            <div className="flex gap-8 text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; 2024 GameStep. Empowering accessible gaming for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameStepLanding;