import { motion } from 'framer-motion';

function FloatingIcon({ icon, radius, startAngle }) {
  const circularPathX = Array.from({ length: 9 }, (_, i) =>
    radius * Math.cos((startAngle + i * 45) * Math.PI / 180)
  );
  const circularPathY = Array.from({ length: 9 }, (_, i) =>
    radius * Math.sin((startAngle + i * 45) * Math.PI / 180)
  );

  return (
    <motion.img
      src={icon}
      alt="Floating Icon"
      style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '50%',
        top: '50%',
        marginLeft: '-25px',
        marginTop: '-25px',  
      }}
      animate={{
        x: circularPathX,
        y: circularPathY,
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 70,
        repeat: Infinity,      
        ease: "linear",
      }}
    />

  );
}

function Avatar() {
  const containerSize = 600;
  const circleRadius = 250;  

  return (
    <div
      style={{
        position: 'relative',
        width: `${containerSize}px`,
        height: `${containerSize}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src="/public/img/angelavatar.png"
        alt="Main Character"
        style={{
          width: '80%',
          height: '80%',
          zIndex: 0,
        }}
      />
      <FloatingIcon icon={"/public/icons/angular.svg"} radius={circleRadius}  startAngle={0} />
      <FloatingIcon icon={"/public/icons/spring.svg"} radius={circleRadius}  startAngle={60} />
      <FloatingIcon icon={"/public/icons/azure.svg"} radius={circleRadius}  startAngle={120} />
      <FloatingIcon icon={"/public/icons/dotnet.svg"} radius={circleRadius}  startAngle={180} />
      <FloatingIcon icon={"/public/icons/laravel.svg"} radius={circleRadius}  startAngle={240} />
      <FloatingIcon icon={"/public/icons/react.svg"} radius={circleRadius}  startAngle={300} />
    </div>
  );
}

export default Avatar;