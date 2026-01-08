export const GorillaBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-card to-charcoal">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 168, 80, 0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      {/* Gorilla Image */}
      <div className="relative flex flex-col items-center pt-8 pb-6">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute -inset-4 blur-3xl bg-gold/10 rounded-full" />
          
          {/* Gorilla image with gold ring */}
          <div className="relative w-44 h-44 rounded-full border-[3px] border-gold/70 overflow-hidden shadow-2xl shadow-black/50">
            <img 
              src="/gorilla-hero.jpg" 
              alt="Silverback Gorilla" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Inner shadow overlay for depth */}
          <div className="absolute inset-0 rounded-full pointer-events-none" 
               style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.4)' }} />
        </div>

        {/* Title */}
        <h1 className="mt-6 font-display font-bold text-4xl tracking-wider text-text">
          SILVERBACK
        </h1>
        <p className="mt-3 text-gold text-sm tracking-wide text-center px-6 font-medium">
          Unleash your inner beast. Track your gains.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-charcoal to-transparent" />
    </div>
  );
};

export default GorillaBanner;
