import { motion } from 'motion/react';
import { Play, Star, Award, Shield, Users, ArrowRight } from 'lucide-react';

const CAST = [
  { name: 'Trấn Thành', image: '/images/anh_tranthanh.jpg', role: 'Host' },
  { name: 'Lan Ngọc', image: '/images/anh_ninhduonglanngoc.webp', role: 'Cast' },
  { name: 'Lê Dương Bảo Lâm', image: '/images/anh_leduongbaolam.webp', role: 'Cast' },
  { name: 'BB Trần', image: '/images/anh_bb_tran.jpg', role: 'Cast' },
  { name: 'Cris Phan', image: '/images/anh_crisphan.jpg', role: 'Cast' },
  { name: 'Quân A.P', image: '/images/anh_quan_ap.jpg', role: 'Cast' },
];

const ITEMS = [
  { name: 'Bộ Cờ Rồng Việt', image: '/images/box_o_an_quan.jpg', type: 'Vật phẩm độc quyền' },
  { name: 'Bàn Ô Ăn Quan', image: '/images/o_an_quan.png', type: 'Đạo cụ thử thách' },
  { name: 'Mũ Vàng Quyền Lực', image: '/images/mu_vang_rongviet.jpg', type: 'Đặc quyền vinh quang' },
  { name: 'Mũ Trắng Thực Tập', image: '/images/mu_trang_rongviet.jpg', type: 'Trang phục tân binh' },
];

const SPONSORS = [
  { img: '/images/logo_taitro_vinfast.png', alt: 'Vinfast' },
  { img: '/images/logo_taitro_chinsu.webp', alt: 'Chinsu' },
  { img: '/images/logo_taitro_omo.png', alt: 'Omo' },
  { img: '/images/logo_taitro_lifebuoy.png', alt: 'Lifebuoy' },
  { img: '/images/logo_taitro_number-1.png', alt: 'Number 1' },
  { img: '/images/logo_taitro_msu.png', alt: 'Msu' },
];

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans selection:bg-[#FDB931]/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo_rongviet.png" alt="Rồng Việt Logo" className="h-12 object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <button onClick={() => scrollToSection('cast')} className="hover:text-[#FDB931] transition-colors">Dàn Cast</button>
            <button onClick={() => scrollToSection('items')} className="hover:text-[#FDB931] transition-colors">Vật Phẩm</button>
            <button onClick={() => scrollToSection('sponsors')} className="hover:text-[#FDB931] transition-colors">Nhà Tài Trợ</button>
            <button className="px-5 py-2 bg-gradient-to-r from-[#d4af37] to-[#b5952f] text-black font-bold rounded-full hover:scale-105 transition-transform">
              Xem Ngay
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FDB931]/30 bg-[#FDB931]/10 text-[#FDB931] text-sm font-medium uppercase tracking-wider mb-8"
            >
              <Star className="w-4 h-4" />
              <span>Chương trình thực tế hot nhất 2024</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] uppercase tracking-tight"
            >
              Hành Trình <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FF9900] filter drop-shadow-[0_0_20px_rgba(253,185,49,0.3)]">
                Rồng Việt
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed relative"
            >
              Cùng dàn cast đình đám chinh phục những thử thách khắc nghiệt nhất, đậm chất văn hóa dân gian Việt Nam. 
              Ai sẽ là người sống sót cuối cùng?
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#FDB931] to-[#D48B1C] text-black font-bold uppercase tracking-wider rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                <Play className="w-5 h-5 fill-current" />
                Trailer Mùa 1
              </button>
              <button onClick={() => scrollToSection('cast')} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white/10 active:scale-95 transition-all flex items-center gap-3">
                Khám phá
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDB931]/20 to-transparent blur-[100px] rounded-full"></div>
            <img 
              src="/images/big_logo.jpg" 
              alt="Hành Trình Rồng Việt Big Logo" 
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl shadow-[#FDB931]/10 border border-white/10 mix-blend-screen"
            />
          </motion.div>
        </div>
      </section>

      {/* Cast Section */}
      <section id="cast" className="py-24 relative border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <Users className="w-8 h-8 text-[#FDB931] mb-4" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center">Dàn Cast Đặc Nhiệm</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FDB931] to-transparent mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CAST.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/5 bg-[#111]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#FDB931] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] uppercase tracking-widest text-[#FDB931] font-bold block mb-1">{member.role}</span>
                    <h3 className="text-lg font-bold leading-tight drop-shadow-md">{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section id="items" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <Shield className="w-8 h-8 text-[#FDB931] mb-4" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center">Vật Phẩm & Đạo Cụ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FDB931] to-transparent mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ITEMS.map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-white/5 rounded-3xl p-6 hover:border-[#FDB931]/30 hover:bg-[#151515] transition-all group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-black flex items-center justify-center p-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FDB931]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs uppercase tracking-widest text-[#FDB931] font-medium block mb-2">{item.type}</span>
                  <h3 className="text-xl font-bold text-white/90">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 relative border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-[#000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase mb-4">Đồng hành cùng chương trình</p>
            <h2 className="text-2xl md:text-3xl font-light text-white/80">Các Nhà Tài Trợ Trọng Điểm</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
            {SPONSORS.map((sponsor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex items-center justify-center w-24 md:w-32 lg:w-40"
              >
                <img 
                  src={sponsor.img} 
                  alt={sponsor.alt} 
                  className="w-full h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Hành Trình Rồng Việt. Production.</p>
        <p className="mt-2 text-xs opacity-50">Designed with precise image mappings.</p>
      </footer>
    </div>
  );
}

export default App;
