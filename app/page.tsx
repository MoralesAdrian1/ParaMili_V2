"use client";

import { useEffect, useState ,useRef } from "react";
import { Heart, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TimelineCard } from "@/app/components/TimelineCard";


export default function Home() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1200);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 80 });


  const moments = [
  {
    id: 1,
    title: "Nuestro primer beso",
    description:
      "Ese día yo estaba nervioso y tú ya estabas desesperada porque yo estoy bien bueno… jajajjakja no te creas, este día yo estaba muy nervioso porque ya queria conocerte, tu de verdad me gustaste desde el primer día que te ví y cuando Edwin me decía de tu cumpleaños y que yo estaba invitado y asi, la verdad me emocionaba muchooo, porque tu estas preciosa, asi que saber que yo Tambien te gustaba fue muy lindo, ese día pasaron cositas que casi hacen que no fuera a tu fiesta, pero no pensaba dejar pasar la oportunidad de conocerte, ya lo del beso fue algo que para ser sinceros no me esperaba pero me gusto mucho.",
    imageUrl: "/moments/1.jpeg",
  },
  {
    id: 2,
    title: "Nuestra primera cita",
    description:
      "Este día fue el comienzo de toda nuestra historia. Aunque la cagué y llegué muy tarde por ti, me diste chance. Yo no sabía ni qué decirte de los nervios, pero la conversación y el ambiente lo senti como si te conociera de toda la vida, aunque muchas cosas no te entendia aakjaja, y yo se que fui muy coqueto contigo, pero que sepas que todo eso lo practique antes de verte jakajkja btw te veías tan preciosa y deslumbrante como siempre… y ahí quedé completamente flechado.",
    imageUrl: "/moments/2.jpeg",
  },
  {
    id: 3,
    title: "Nuestra primera pelea",
    description:
      "JAJAJA, un día después de nuestra cita y ya nos estábamos divorciando. Te pusiste bien crazy ese día… pero no voy a mentir: me encantó tu carita de enojo 😌.",
    imageUrl: "/moments/3.jpeg",
  },
  {
    id: 4,
    title: "Nuestro primer 14 de febrero",
    description:
      "Fue un día muy bonito a pesar de todo lo que estaba pasando en ese momento, te agradezco mucho por darme la oportunidad y por creerme aunque todo el mundo te decía lo contrario. Disfruté muchísimo tu compañía y fue la primera vez que un 14 de febrero me emocionó , sin darme cuenta, cada día me enamoraba más de ti y de tus ojitos tan hermosos.",
    imageUrl: "/moments/4.jpeg",
  },
  {
    id: 5,
    title: "Cuando te pedí que fueras mi novia",
    description:
      "Yo ya tenía claro que te amaba y que necesitaba tenerte en mi vida, ya amaba cada cosa que hacías, tu olor, tu voz, tus corajes, tus chistes y basicamente todo de tí, planeé durante semanas la manera en la que te iba a pedir, las canciones que pondría e incluso el ramo que queria darte. Quiero esforzarme y darte todo lo que este en mis manos para hacerte sentir amada todos los días de tu vida.",
    imageUrl: "/moments/5.jpeg",
  },
  {
    id: 6,
    title: "Nuestra primera cita en San Felipe",
    description:
      "Yo siempre dije: “pura madre, ¿cómo voy a ir a otra ciudad nomás a ver a una morrilla?”. Y luego llegaste tú y me cambiaste todo lo que pensaba. Gracias por pasearme en tu motito, fue un día simplemente inolvidable 🛵❤️.",
    imageUrl: "/moments/6.jpeg",
  },
  {
    id: 7,
    title: "Nuestra primera ida a la feria",
    description:
      "Qué bella te mirabas ese día. Ir juntos a la feria fue algo que siempre me hacía ilusión. Nunca te agradecí por subirte a los juegos conmigo, así que aprovecho ahora para decirte: gracias, lo atesoro mucho 🎡.",
    imageUrl: "/moments/7.jpeg",
  },
  {
    id: 8,
    title: "Jarwuelin juntitos",
    description:
      "Nuestro primer Halloween juntos terminó siendo una pedota masiva. disfruto demasiado salir de fiesta contigo y conectar de la manera en la que conectamos andando de fiesta para luego terminar la noche llegando a dormir abrazaditos, piel con piel.",
    imageUrl: "/moments/8.jpeg",
  },
  {
    id: 9,
    title: "Diciembre juntitos",
    description:
      "Fue el primer diciembre que me hizo verdadera ilusión compartir con alguien. Aunque no pudimos estar juntos los días importantes, siempre te tuve presente y disfruté muchísimo cada momento que nos vimos.",
    imageUrl: "/moments/9.jpeg",
  },
  {
    id: 10,
    title: "Tus dos amores más grandes",
    description:
      "Ese día fue increíble. Después de mil fotos y videos del Romy, por fin se me hizo conocerlo y pasearlo contigo, es un momento que atesoro bastante porque yo se cuanto amas a romy y haberlo conocido fue muy bello, ademas de obvio estar contigo todo el día 🐶❤️.",
    imageUrl: "/moments/10.jpeg",
  },
  {
    id: 11,
    title: "Tu cumpleaños",
    description:
      "Ese día te veías hermosa, como siempre. pase varios días planeando que hacerte y mas porque no te decidias si hacer algo o no jjakjakaj, disfrute cada momento de planear tu día, disfrute el organizarme con tu familia y dejar todo listo para que tu solo disfrutaras y ver esa sonrisa tuya que tanto amo, mientras yo este vivo prometo hacer que todos tus cumpleaños sean hermosos 🎂.",
    imageUrl: "/moments/11.jpeg",
  },
  {
    id: 12,
    title: "Mi foto favorita",
    description:
      "Esta es mi foto favorita porque fue de nuestra primera sesión de fotitos juntos. Cada vez que la veo recuerdo como comenzo nuestra historia de amor, de una manera tan natural y como todo se fue dando poco a poco 📸❤️.",
    imageUrl: "/moments/12.jpeg",
  },
];


  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <>
    <audio
  ref={audioRef}
  src="/music/cancion1.mp3"
  loop
/>
<AnimatePresence>
  {!soundEnabled && (
    <motion.div
      className="fixed inset-0 z-[999] bg-gradient-to-br from-pink-500 via-red-500 to-rose-600 flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-8"
      >
        <Heart size={80} className="text-white" fill="currentColor" />
      </motion.div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Hola mi amor, este año quise hacer algo especial para ti.
      </h1>

      <p className="text-xl md:text-2xl text-white/90 mb-10">
        💖 Tu jamás vas a ser espectadora 💖
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-red-600 px-10 py-4 rounded-full text-2xl font-bold shadow-2xl"
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.volume = 0.6;
            audioRef.current.play();
          }
          setSoundEnabled(true);
        }}
      >
        Comenzar
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>


    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 relative overflow-hidden">
      
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * screenWidth,
              y: screenWidth + 100,
              opacity: 0.1,
            }}
            animate={{
              y: -100,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 25,
              repeat: Infinity,
              delay: Math.random() * 0.5,
              ease: "linear",
            }}
          >
            <Heart
              className="text-pink-400"
              size={Math.random() * 40 + 30}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 pt-16 pb-12 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Heart className="text-red-500 mx-auto mb-6" size={60} fill="currentColor" />

        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">
          Desde que llegaste a mi vida, me hiciste el hombre mas feliz del mundo y cada día a tu lado es un regalo que atesoro con todo mi corazón.
        </h1>

        <p className="text-2xl text-rose-700 max-w-4xl mx-auto">
          Y aqui un pequeño recuento de lo que eh vivido con el amor de mi vida y la persona a la que mas amo en este mundo.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Sparkles className="text-amber-500" />
          <Star className="text-yellow-500" />
          <Sparkles className="text-amber-500" />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 space-y-16">
        {moments.map((moment, index) => (
          <TimelineCard key={moment.id} moment={moment} index={index} />
        ))}
      </div>

      {/* Closing */}
      
      <div className="max-w-4xl mx-auto px-6 pb-32 text-center">
        {!accepted && !showQuestion &&(
        <p className="text-2xl text-rose-700 max-w-4xl mx-auto">
         fue un año lleno de emociones, aventuras y momentos inolvidables, asi que este año vengo e nuevo a preguntarte...
        </p>
        )}
        
        <br></br>
        <br></br>
        {!accepted && !showQuestion &&(
          <motion.button
          className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-12 py-6 rounded-full text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowQuestion(!showQuestion)}
        >
          💕 Haz clic aquí 💕
        </motion.button>
         )}
        <AnimatePresence>
  {showQuestion && (
    <motion.div
      className="mt-10 flex flex-col items-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    {!accepted &&(
      <h2 className="text-4xl font-bold text-red-600 text-center">
        ¿Quisieras volver a ser mi San Valentín este año? 💖
      </h2>
    )}
      

      {!accepted ? (
        <div className="relative flex gap-8 mt-6">
          {/* BOTÓN SÍ */}
          <motion.button
            className="bg-green-500 text-white px-8 py-4 rounded-full text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            onClick={() => setAccepted(true)}
          >
            💕 Sí 💕
          </motion.button>

          {/* BOTÓN NO (escurridizo 😈) */}
          <motion.button
            className="bg-gray-400 text-white px-8 py-4 rounded-full text-2xl font-bold absolute"
            animate={noPosition}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => {
              setNoPosition({
                x: Math.random() * 300 - 150,
                y: Math.random() * 200 - 100,
              });
            }}
          >
            No 😐
          </motion.button>
        </div>
      ) : (
        <motion.p
          className="text-3xl text-rose-700 font-bold text-center mt-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          💖 Sabía que dirías que sí mi amor 😘…  
          gracias por hacerme el hombre más feliz del mundo y por permitirme ser tu san valentin de nuevo 
          
          Te super Mega AMO💖
          <br></br>
          <br></br>
          Tenemos una cita pendiente para celebrar nuestro amor y hacer que este año sea aún más especial que el anterior. Te amo con todo mi corazón, mi amorcito preciosa 😘.

        </motion.p>
      )}
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
    </>
  );
}
